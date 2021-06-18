import firebase from "../services/firebase";
import "firebase/auth";
import './auth.css'
import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

export const PhoneSignIn = ({setIsLoggedIn,setCurrentUser}) => {
    
    const [phone, setPhone] = React.useState('');
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
    const handleGuest = () =>{
        setIsLoggedIn(true)

    }


    return (
        <>
            <div className="auth__number">
            <div className="element__tittle">Авторизация по номеру телефона</div>
            <input value={phone} placeholder='Введите ваш номер' onChange={e => setPhone(e.target.value)} className='auth__input'/>
            <button onClick={SignInSubmit} className="sliding-button" >Отправить код</button>
          
            <div id="recaptcha-container" className="recaptcha-container"></div>
            <input onChange={setUpConfirmCode} placeholder='Введите код подтверждения' className="auth__input"></input>
            <NavLink to='/pizza'><button onClick={handleValidateCode} className="sliding-button">Подтвердить</button></NavLink>

            <div className="element__tittle1">или же</div>
            <NavLink to='/pizza'> <div><button onClick={handleGuest} className="sliding-button1">Войти как гость</button></div></NavLink>
            </div>
        </>
    )
    }

    export default PhoneSignIn
