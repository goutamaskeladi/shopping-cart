import React, { Component } from 'react'
import axios from 'axios'

const ProductContext = React.createContext({})

class ProductProvider extends Component {
    state = {
        products: [],
        cart:[],
        selectedItem: ""
    }
    addToCart = (id, img_url, name, price) => {
        this.setState({
            selectedItem: name,
            cart: this.state.cart.concat({
                id, img_url, name, price
            })
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
            <ProductContext.Provider value={{...this.state, addToCart: this.addToCart}}>
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
