import React, { Component } from 'react'
import axios from 'axios'

const ProductContext = React.createContext({})

class ProductProvider extends Component {
    state = {
        products: [],
        cart:[],
        selectedItem: ""
    }
    addToCart = (id, img_url, name, price, discount) => {
        this.setState({
            selectedItem: name,
            cart: this.state.cart.concat({
                id, img_url, name, price, discount
            })
        })
    }
    increment = () => {

    }
    decrement = () => {

    }
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/qhnfp')
        .then(response => this.setState({
            products : response.data
        }))
        .catch(error => console.log(error))
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state, addToCart: this.addToCart, increment: this.increment, decrement: this.decrement}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {
    ProductProvider,
    ProductConsumer
}
