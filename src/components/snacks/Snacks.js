import React,{useState,useEffect} from 'react'
import CartContainer from '../cart/cart'
import './snacks.css'
import firebase from 'firebase'







const Snacks = ({currentUser}) =>{
    const [snackConst,setSnackConst]=useState([])
    useEffect(()=>{
        getDataSnack()
    },[])

    const [snackId,setSnackId]=useState([])

    const handleSnackId = (e) =>{
        setSnackId(e.target.id)
    }
 
    const getDataSnack = async () => {
        try {
            const { docs } = await firebase.firestore().collection("snacks")
                .get()
                
            setSnackConst( docs.map(doc => ({ ...doc.data()})))
            
            
            } catch(e) {
            console.error(e)
        } 
    }
    
    const addSnackToCart =async()=>{
        try{
            await firebase.firestore().collection('snacks').doc(snackId).update({
                inCart:firebase.firestore.FieldValue.arrayUnion(`${currentUser}`)
            })
        }
        catch(e){
            console.error(e)
        }
    }
    useEffect(()=>{
        addSnackToCart()
    },[snackId])


    

    return(<>
     <div className="snacks__list">
            {snackConst.map((el,i)=>{
                return (<div className="list__element" ><img src={el.pic} width='290px' height='230px' alt="image not found"/>
                <div className="element__tittle" >{el.name}</div>
                <div className="element__structure" >{el.structure}</div>
                
                <div className='df'><button className='element__button' onClick={handleSnackId} id={el.id}  >В корзину</button><div className="element__price">{el.price} BYN</div></div>
                
                </div>)
            })}
            </div>
            <div></div>
            
    </>)
}

export default Snacks