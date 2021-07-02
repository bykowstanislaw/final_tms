import React,{useEffect,useState} from 'react'

import './drinks.css'
import firebase from 'firebase'


const Drinks =({currentUser})=>{

    const[dataDrinks,setDataDrinks]=useState([])
    const[targetDrinkId,setTargetDrinkId]=useState()

    const handleDrinkId = (e) =>{
        setTargetDrinkId(e.target.id)
    }
    
    useEffect(()=>{
        getDataDrinks()
    },[])

    const getDataDrinks = async () => {
        try {
            const { docs } = await firebase.firestore().collection("drinks")
                .get()
                
            setDataDrinks( docs.map(doc => ({ ...doc.data()})))
            
            } catch(e) {
            console.error(e)
        } 
    }
   
    useEffect(()=>{
        const handleAddDrinkToCart = async() =>{
            try {
                await firebase.firestore().collection('drinks').doc(targetDrinkId).update({
                    inCart:firebase.firestore.FieldValue.arrayUnion(`${currentUser}`)
                })
            }
            catch(e){
                console.log(e)
            }
        }
        handleAddDrinkToCart()
    },[targetDrinkId,currentUser])
   
    return(<>
        <div className="drinks__list">
               {dataDrinks.map((el,i)=>{
                   return (<div className="list__element" ><img src={el.pic} width='290px' height='230px' alt="not found"/>
                   <div className="element__tittle" key={i}>{el.name}</div>
                   {/* <div className="element__structure" key={i}>{el.structure}</div> */}
                   
                   <div className='df'><button className='element__button' id={el.id} onClick={handleDrinkId} >В корзину</button><div className="element__price">{el.price} BYN</div></div>
                   
                   </div>)
               })}
               </div>
       </>)
   }

export default Drinks