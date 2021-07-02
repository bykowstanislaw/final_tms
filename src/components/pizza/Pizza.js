import React, { useState, useEffect, useReducer, } from 'react'
import './pizza.css'
import reducerFilter from './reducerFilter'
import firebase from 'firebase'

const Pizza = ({ sort, handleSortUp, handleSortDown, handleSortDefault, currentUser }) => {

    const types = ['все', "с мясом", "без мяса", "с грибами", "острая"]
    const [dataPizza, setDataPizza] = useState([])
    const [filterType, dispatch] = useReducer(reducerFilter, 'все')
    const [targetId, setTargetId] = useState([])
    

    function handleSort() {
        if (sort === "возрастанию") {
            handleSortUp(dataPizza)
        }
        else if (sort === "убыванию") {
            handleSortDown(dataPizza)
        }
        else if (sort === "умолчанию") {
            handleSortDefault(dataPizza)
        }
    }

    const takeId = (e) => {
        setTargetId(e.target.id)
    }

    useEffect(() => {
        getDataPizza()
    }, [])

    const getDataPizza = async () => {
        try {
            const { docs } = await firebase.firestore().collection("pizza")
                .get()

            setDataPizza(docs.map(doc => ({ ...doc.data() })))
        } catch (e) {
            console.error(e)
        }
    }

  
    handleSort()

    useEffect(() => {
          const handleAddPizzaToCart = async () => {
        try {
            await firebase.firestore().collection("pizza").doc(targetId).update({
                inCart: firebase.firestore.FieldValue.arrayUnion(`${currentUser}`)

            })
        
        }
        catch (e) {
            console.error(e)

        }
    }
    handleAddPizzaToCart()
    }, [targetId])

    useEffect(() => {
        handleSort()
    }, [sort])

    return (
        <>
            <div className="filter">
                {types.map((el) => {
                    return <button className="filter__item" onClick={() => dispatch({ type: `${el}` })}>{el}</button>
                })}
            </div>
            <div className="pizza__list">
                {dataPizza.map((el) => {
                    const text = (<div className="list__element"><img src={el.pic} alt='not found' width='290px' height='230px'  />
                        <div className="element__tittle">{el.name}</div>
                        <div className="element__structure">{el.structure}</div>
                        <div className='df'><button className='element__button' id={el.id} onClick={takeId}  >В корзину</button> <div className="element__price">{el.price} BYN</div></div>
                    </div>)
                    if (filterType === "все") {
                        return text
                    }
                    if (filterType === 'без мяса') {
                        return (
                            (el.meat === false) && text
                        )
                    }
                    if (filterType === 'с мясом') {
                        return (
                            (el.meat === true) && text
                        )
                    }
                    if (filterType === 'с грибами') {
                        return (
                            (el.mashrooms === true) && text
                        )
                    }
                    if (filterType === 'острая') {
                        return (
                            (el.hot === true) && text
                        )
                    }
                })}
            </div>
            <div className="cart"></div>
        </>
    )
}

export default Pizza