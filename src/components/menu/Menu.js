import React, { useEffect, useReducer, useState } from 'react'
import Container from '../../container/container'
import "./menu.css"
import './reducer'
import reducer from './reducer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import PhoneSignIn from '../auth/phoneAuth'

const menuItem = [{
    name: "пицца",
    link: '/pizza'
},
{
    name: "горячее",
    link: "/soup"
},
{
    name: "закуски",
    link: '/snacks'
},
{
    name: "напитки",
    link: "/drink",
},
{
    name: "соусы",
    link: "/sauce",
},

{
    name: "десерты",
    link: "/sweet"
},
{
    name: "комбо",
    link: '/stack'
}]
const menuPanel = ['умолчанию', "убыванию", "возрастанию"]

const Menu = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser]=useState('bykow')
    const [sort, setSort] = useState('умолчанию')
    const [menu,setMenu]=useState('')
    
    const handleChangeSortMethod = (e) => {
        setSort(e.target.value)
    }
    const [loading, setLoading] = useState(false)

    const handleMenu = (e) =>{
        setMenu(e.target.id)
    }

    useEffect(()=>{
        const backtoback=()=>{
            setLoading(false)
        }
        const handleLoading= () =>{
            setLoading(true)
        }
        handleLoading()
        setTimeout(backtoback,1000)
       
    },[menu,sort])

    return (
        <>
        <div>
        {(!isLoggedIn) ? <Route path="/" ><PhoneSignIn key={1222} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/></Route> :
            <div>
                <div className="menu">
                    <div className="menu__image">
                        <img src="/images/zaebalo.png" className='image__logo' alt="image not found" />
                    </div>
                    <div className="menu__main">
                        {menuItem.map((item,i) => {
                            return (<NavLink to={item.link} onClick={handleMenu} id={i}  className="main__item" activeClassName="red-border">{item.name}</NavLink>)
                        })}
                    </div>
                    <div className="menu__settings">
                        <div className="settings__sort">Сортировать по:</div>
                        <select className="sort" onChange={handleChangeSortMethod}>
                            {menuPanel.map((el) => {
                                return <option>{el}</option>
                            })}
                        </select>
                        <NavLink key={1231}  onClick={handleMenu} exact to='/cart' className="settings__cart"><img src="/images/cart.png" className="cart__picture" /></NavLink>
                    </div>
                </div>
                {(loading) ?<div className="loader"></div> :
                <div className="df">
                    <div>
                        <Container key={333333} sort={sort} currentUser={currentUser} />
                    </div>
                </div>}
            </div>
        }
        </div>
        </>
    )
}

export default Menu
