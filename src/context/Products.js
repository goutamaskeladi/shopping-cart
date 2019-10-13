import React, { Component } from 'react'
import axios from 'axios'

const ProductContext = React.createContext({})

class ProductProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    handleDetail = () => {
        console.log('Handling details')
    }
    addToCart = () => {
        console.log('Handling addToCart')
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
