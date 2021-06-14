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

   const getCart = () =>{

   }

   const getPizza = async () => {
         const { docs } = await firebase.firestore().collection("pizza").where('inCart', 'array-contains', currentUser)
            .get()
         setDattaPizza(docs.map(doc => ({ ...doc.data() })))
         
   }
   const getSnacks = async () => {
         const { docs } = await firebase.firestore().collection("snacks").where('inCart', 'array-contains', currentUser)
            .get()
         setSnackData(docs.map(doc => ({ ...doc.data() })))
   }
   const getSoups = async () => {
      
         const { docs } = await firebase.firestore().collection("soups").where('inCart', 'array-contains', currentUser)
            .get()
         setSoupData(docs.map(doc => ({ ...doc.data() })))   
   }
   const getDrinks = async () => {
         const { docs } = await firebase.firestore().collection("drinks").where('inCart', 'array-contains', currentUser)
            .get()
         setDrinkData(docs.map(doc => ({ ...doc.data() })))
         }

   const getSweet = async () => {
            const { docs } = await firebase.firestore().collection("sweets").where('inCart', 'array-contains', currentUser)
               .get()
            setSweetData(docs.map(doc => ({ ...doc.data() })))
         }
   const getSauce = async () => {
            const { docs } = await firebase.firestore().collection("sauces").where('inCart', 'array-contains', currentUser)
               .get()
            setSauceData(docs.map(doc => ({ ...doc.data() })))
         }

         
      const setUpCart =(arr)=>{
         return(
            arr.map((el) => {
               return (<div className='cart'>
                  <div className='cart__container'>
                     <div className="container__image"><img src={el.pic} width='100px' height='100px'></img></div>
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

                  </div>
               </div>)
            })
         )
      }

   useEffect(() => {
      getPizza()
      getSnacks()
      getSoups()
      getDrinks()
      getSweet()
      getSauce()
   }, [])

   return (
      <>
         <div>
           {setUpCart(dattaPizza)}
           {setUpCart(snackData)}
            {setUpCart(soupData)}
           {setUpCart(drinkData)}
           {setUpCart(sweetData)}
           {setUpCart(sauceData)}

         </div>
         
      </>)
}

export default Cart