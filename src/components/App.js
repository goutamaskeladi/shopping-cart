import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import ProductList from './ProductList'
import Details from './Details'
import Cart from './Cart'
import Default from './Default'

class App extends Component {
    render() {
        return(
           <React.Fragment>
               <Navbar/>
               <Switch>
                   <Route exact path="/" component={ProductList} />
                   <Route path="/details" component={Details} />
                   <Route path="/cart" component={Cart} />
                   <Route component={Default} />
               </Switch>
           </React.Fragment>
        )
    }
}

export default App