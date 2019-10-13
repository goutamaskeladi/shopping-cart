import React, { Component } from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Details from './Details'
import Cart from './Cart'
import Default from './Default'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
    render() {
        return(
           <React.Fragment>
               <Navbar/>
               <ProductList/>
               <Details/>
               <Cart/>
               <Default/>
           </React.Fragment>
        )
    }
}

export default App