import React from "react"
import Soup from '../components/soup/Soup'
import Pizza from '../components/pizza/Pizza'
import Snacks from "../components/snacks/Snacks";
import Drinks from "../components/drinks/Drinks";
import Sauce from "../components/sauce/Sauce";
import Sweet from "../components/Sweet/Sweet";
import {
  Switch,
  Route,
} from "react-router-dom";

import Cart from "../components/cart/cart";

const Container = ({ sort,currentUser ,setLoading, setQuantity}) => {



  

  const handleSortUp = (arr) => {
    arr.sort((a, b) => a.price - b.price);
  }
  const handleSortDown = (arr) => {
    arr.sort((a, b) => b.price - a.price);
  }

  const handleSortDefault = (arr) => {
    arr.sort((a, b) => a.name - b.name);
  }
  return (

      <Switch>
      
         {/* <Route path='/' exact> <Pizza sort={sort} handleSortUp={handleSortUp} handleSortDown={handleSortDown} handleSortDefault={handleSortDefault} currentUser={currentUser} key={99} /></Route> */}
          <Route exact path='/pizza'> <Pizza sort={sort} handleSortUp={handleSortUp} handleSortDown={handleSortDown} handleSortDefault={handleSortDefault} key={100} currentUser={currentUser}/></Route>
        
         <Route path='/snacks'> <Snacks currentUser={currentUser} key={101} /></Route>
         <Route path='/soup'> <Soup currentUser={currentUser} key={102}/></Route>

        <Route path='/drink'> <Drinks currentUser={currentUser} key={103} /></Route>
        <Route path='/sauce'>  <Sauce currentUser={currentUser} key={103}/></Route>

      <Route path='/sweet'> <Sweet currentUser={currentUser} key={104} /></Route>

      <Route  path='/cart'><Cart key={105} currentUser={currentUser} setQuantity={setQuantity}  /></Route>

      {/* <Route path='/sweet' render={() => 123123} /> */}

      </Switch>
  )
}




export default Container