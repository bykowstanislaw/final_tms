import React,{useState,useEffect} from 'react'
import firebase from 'firebase'
import './sauce.css'

const Sauce =({currentUser})=>{
    const [dataSauce,setDataSauce]=useState([])
    const [sauceId,setSauceId]=useState()

    const handleSauceId = (e) =>{
        setSauceId(e.target.id)
    }
    useEffect(()=>{
        getDataSauce()
    },[])

    const getDataSauce = async () => {
        try {
            const { docs } = await firebase.firestore().collection("sauces")
                .get()
                
            setDataSauce( docs.map(doc => ({ ...doc.data()})))
            
            } catch(e) {
            console.error(e)
        } 
    }
    const handleAddSauceToCart = async() =>{
        try {
            await firebase.firestore().collection('sauces').doc(sauceId).update({
                inCart:firebase.firestore.FieldValue.arrayUnion(`${currentUser}`)
            })
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        handleAddSauceToCart()
    },[sauceId])

    return(<>
        <div className="sauce__list">
               {dataSauce.map((el,i)=>{
                   return (<div className="list__element" ><img src={el.pic} width='290px' height='230px' alt="image not found"/>
                   <div className="element__tittle" >{el.name}</div>
                   {/* <div className="element__structure" key={i}>{el.structure}</div> */}
                   
                   <div className='df'><button className='element__button'  id={el.id} onClick={handleSauceId}>В корзину</button> <div className="element__price">{el.price} BYN</div></div>
                   
                   </div>)
               })}
               </div>
       </>)
   }

   export default Sauce