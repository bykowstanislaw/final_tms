import React,{useEffect,useState} from 'react'
import firebase from 'firebase'
import './sweet.css'

const Sweet =({currentUser})=>{

    const[dataSweet,setDataSweet]=useState([])
    const [targetSweetId,setSweetId]=useState()

    const handleSweetId =(e)=>{
        setSweetId(e.target.id)
    }
    useEffect(()=>{
        getDataSweet()
    },[])

    const getDataSweet = async () => {
        try {
            const { docs } = await firebase.firestore().collection("sweets")
                .get()
                
            setDataSweet( docs.map(doc => ({ ...doc.data()})))
            
            } catch(e) {
            console.error(e)
        } 
    }
    const handleAddSweetToCart = async() =>{
        try {
            await firebase.firestore().collection('sweets').doc(targetSweetId).update({
                inCart:firebase.firestore.FieldValue.arrayUnion(`${currentUser}`)
            })
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        handleAddSweetToCart()
    },[targetSweetId])
    

    return(<>
        <div className="sweet__list">
               {dataSweet.map((el,i)=>{
                   return (<div className="list__element" key={i}><img src={el.pic} width='290px' height='230px' alt="image not found"/>
                   <div className="element__tittle" key={i}>{el.name}</div>
                   {/* <div className="element__structure" key={i}>{el.structure}</div> */}
                   
                   <div className='df'><button className='element__button' key={i} id={el.id} onClick={handleSweetId}>В корзину</button><div className="element__price">{el.price} BYN</div></div>
                   
                   </div>)
               })}
               </div>
       </>)
   }

   export default Sweet