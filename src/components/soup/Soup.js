import React,{useEffect,useState} from 'react'
import '../pizza/pizza.css'
import firebase from 'firebase'

const Soup = ({currentUser}) =>{
    const [dataSoup,setDataSoup]=useState([])
    const [targetSoupId,setTargetSoupId]=useState([])

    const takeSoupId=(e)=>{
        setTargetSoupId(e.target.id)
        console.log(targetSoupId)
    }

    useEffect(()=>{
        const getDataSoup = async () => {
            try {
                const { docs } = await firebase.firestore().collection("soups")
                    .get()
                    
                setDataSoup( docs.map(doc => ({ ...doc.data()})))
            
                } catch(e) {
                console.error(e)
            } 
        }
        getDataSoup()
    },[])

    
   
    useEffect(()=>{
        const handleAddSoupToCart = async() =>{
            try {
                await firebase.firestore().collection('soups').doc(targetSoupId).update({
                    inCart:firebase.firestore.FieldValue.arrayUnion(`${currentUser}`)
                })
            }
            catch(e){
                console.log(e)
            }
        }
        handleAddSoupToCart()
    },[targetSoupId,currentUser])
   
    return(
        <>
        
        <div className="pizza__list">
            {dataSoup.map((el)=>{
                return (<div className="list__element"><img src={el.pic} width='290px' height='230px' alt="not found"/>
                <div className="element__tittle">{el.name}</div>
                <div className="element__structure">{el.structure}</div>
                
                <div className='df'><button className='element__button' onClick={takeSoupId} id={el.id} >В корзину</button> <div className="element__price">{el.price} BYN</div></div>
                
                </div>)
            })}
            </div>

        </>
    )
}

export default Soup