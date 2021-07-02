import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import './cart.css'

const Cart = ({ currentUser }) => {
   const [dattaPizza, setDattaPizza] = useState([])
   const [snackData, setSnackData] = useState([])
   const [soupData,setSoupData]=useState([])
   const [drinkData,setDrinkData]=useState([])
   const [sweetData,setSweetData]=useState([])
   const [sauceData,setSauceData]=useState([])
   const [currentId,setCurrentId]=useState('xd')
   const [order,setOrder]=useState([])

   

   const handleId= (e)=>{
      setCurrentId(e.target.id)
   }
   const getPizza = async () => {
         const { docs } = await firebase.firestore().collection("pizza").where('inCart', 'array-contains', currentUser)
            .get()
         setDattaPizza(docs.map(doc => ({ ...doc.data() })))
         
   }
   const handleRemovePizzaFromCart = async () => {
          await firebase.firestore().collection("pizza").doc(currentId).update({
              inCart: firebase.firestore.FieldValue.arrayRemove(`${currentUser}`)
             })
      }
     
   const getSnacks = async () => {
         const { docs } = await firebase.firestore().collection("snacks").where('inCart', 'array-contains', currentUser)
            .get()
         setSnackData(docs.map(doc => ({ ...doc.data() })))
   }
   const handleRemoveSnackFromCart = async () => {
       await firebase.firestore().collection("snacks").doc(currentId).update({
          inCart: firebase.firestore.FieldValue.arrayRemove(`${currentUser}`)

      })
  }
   const getSoups = async () => {
      
         const { docs } = await firebase.firestore().collection("soups").where('inCart', 'array-contains', currentUser)
            .get()
         setSoupData(docs.map(doc => ({ ...doc.data() })))   
   }
   const handleRemoveSoupFromCart = async () => {
      await firebase.firestore().collection("soups").doc(currentId).update({
         inCart: firebase.firestore.FieldValue.arrayRemove(`${currentUser}`)

     })
 }
   const getDrinks = async () => {
         const { docs } = await firebase.firestore().collection("drinks").where('inCart', 'array-contains', currentUser)
            .get()
         setDrinkData(docs.map(doc => ({ ...doc.data() })))
         }
   const handleRemoveDrinksFromCart = async () => {
            await firebase.firestore().collection("drinks").doc(currentId).update({
               inCart: firebase.firestore.FieldValue.arrayRemove(`${currentUser}`)
     
           })
       }

   const getSweet = async () => {
            const { docs } = await firebase.firestore().collection("sweets").where('inCart', 'array-contains', currentUser)
               .get()
            setSweetData(docs.map(doc => ({ ...doc.data() })))
         }
    
   const handleRemoveSweetFromCart = async () => {
            await firebase.firestore().collection("sweets").doc(currentId).update({
               inCart: firebase.firestore.FieldValue.arrayRemove(`${currentUser}`)
     
           })
       }      
   const getSauce = async () => {
            const { docs } = await firebase.firestore().collection("sauces").where('inCart', 'array-contains', currentUser)
               .get()
            setSauceData(docs.map(doc => ({ ...doc.data() })))
         }
   const handleRemoveSauceFromCart = async () => {
            await firebase.firestore().collection("sauces").doc(currentId).update({
               inCart: firebase.firestore.FieldValue.arrayRemove(`${currentUser}`)
     
           })
       }
   const setOrderColl = async() =>{
      await firebase.firestore().collection('orders').doc(currentUser).set({
         name:order,
         time:Date(),
         user:currentUser,
         

         
      })
   }

      const setUpCart =(arr)=>{
         return(
            arr.map((el) => {
               return  (<div className='cart'>
                  <div className='cart__container'>
                     <div className="container__image"><img src={el.pic} width='100px' height='100px' alt=' not found'></img></div>
                     <div>
                        <div className="container__name">{el.name}</div>
                        <div className="container__structure">{el.structure}</div>
                     </div>
                     <div className="container__quantity">
                        <div className="container__decr" ><button>-</button></div>
                        <div className="container__number">1</div>
                        <div className="container__decr"><button>+</button></div>
                     </div>
                     <div className="container__price">{el.price} BYN</div>
                     <div><button id={el.id} className='cart__remove' onClick={handleId}>X</button></div>
                  </div>
                
               </div>)
            })
         )
         
      }
    
   useEffect(()=>{
      
      setOrder([...dattaPizza,...snackData,...soupData,...sweetData,...sauceData,...drinkData])
      

      
    },[dattaPizza,snackData,soupData,sweetData,sauceData,drinkData,])

   useEffect(() => {
      getPizza()
      getSnacks()
      getSoups()
      getDrinks()
      getSweet()
      getSauce()
      handleRemovePizzaFromCart()
      handleRemoveSnackFromCart()
      handleRemoveSweetFromCart()
      handleRemoveSoupFromCart()
      handleRemoveDrinksFromCart()
      handleRemoveSauceFromCart()
      
      
   }, [currentId])

   return (<>  
      
       <div>
       <div>
         {setUpCart(dattaPizza)}
         {setUpCart(snackData)}
          {setUpCart(soupData)}
         {setUpCart(drinkData)}
         {setUpCart(sweetData)}
         {setUpCart(sauceData)}
       </div>
       {(order.length>0) && <div><button className='container__button' onClick={setOrderColl}  >Оформить заказ</button></div>}
       </div>
        

      </>)
}

export default Cart