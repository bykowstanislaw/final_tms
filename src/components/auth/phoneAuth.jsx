import firebase from "../services/firebase";
import "firebase/auth";
import React, { useState } from 'react'

export const PhoneSignIn = ({setIsLoggedIn,setCurrentUser}) => {
    
    const [phone, setPhone] = React.useState('+375441111111');
    const [codeInput,setCode]=React.useState('')
    const [confirmationResult,setConfirmationResult]=React.useState(null)
    const setUpRecaptcha = () => {
        console.log('start setUpRecaptcha')
        firebase.auth().languageCode = 'ru';
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'visible',
            'callback': (response) => {
                console.log("Captcha Resolved");
                SignInSubmit();
            }
        });
    }


    const setUpConfirmCode= (e) =>{
        setCode(e.target.value)

    }
    const SignInSubmit = (e) => {
        setUpRecaptcha();
        let phoneNumber = phone;
        console.log(phoneNumber);
        let appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                window.confirmationResult = confirmationResult;
                setConfirmationResult(confirmationResult)
                console.log("OTP is sent");
            })
            .catch(function (error) {
                console.log(error);
            });
            
    };
    
    
 
    
    const handleValidateCode = async () => {
        const code = codeInput;
        try {
            await confirmationResult.confirm(code).then((result)=>{
                setCurrentUser(result.user.uid)
                console.log(result)
                setIsLoggedIn(true)
            })
                console.log('sucsess')
                setIsLoggedIn(true)
            
           
            
        } catch(error) {
            console.error(error)
            setIsLoggedIn(false)
        }
    }


    return (
        <>
            <input value={phone} onChange={e => setPhone(e.target.value)} />
            <input type='button' value='Sign in' onClick={SignInSubmit} />
            <div id="recaptcha-container" className="recaptcha-container"></div>
            <input onChange={setUpConfirmCode}></input>
            <button onClick={handleValidateCode}>let's go</button>
        </>
    )
    }

    export default PhoneSignIn
