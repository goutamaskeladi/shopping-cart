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
                id, img_url, name, price, discount, qty: 1
            })
        })
    }
    increment = (id) => {
        // Need to fix here
        let addedItem = this.state.cart.find(item => item.id === id)
        addedItem.qty += 1 
        let originalPrice = localStorage.getItem('originalPrice')
        if(originalPrice) {
            addedItem.price = originalPrice * addedItem.qty
        } else {
            localStorage.setItem('originalPrice', addedItem.price)
            addedItem.price = addedItem.price * addedItem.qty
        }
        let cart = this.state.cart;
        cart.forEach(function(item, i) { if (item.id == id) cart[i] = addedItem })
        this.setState({
            cart : cart
        })
    }
    decrement = (id) => {
        // Need to fix here
        let addedItem = this.state.cart.find(item => item.id === id)
        addedItem.qty -= 1
        let originalPrice = localStorage.getItem('originalPrice')
        if(originalPrice) {
            addedItem.price = originalPrice * addedItem.qty
        } else {
            localStorage.setItem('originalPrice', addedItem.price)
            addedItem.price = addedItem.price * addedItem.qty
        }
        let cart = this.state.cart;
        cart.forEach(function(item, i) { if (item.id == id) cart[i] = addedItem })
        this.setState({
            cart : cart
        })
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
