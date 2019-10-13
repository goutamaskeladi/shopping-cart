import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    render() {
        const { id, discount, img_url, name, price } = this.props
        return (
            <div className="product">
                <div className="product-image">
                    <span className="discount">{discount}% off</span>
                    <Link to={{ pathname: '/details', state: { name } }}>
                       <img src={img_url} alt={name}/>
                    </Link>
                </div>
                <div className="product-info">
                    <p className="product-name">{name}</p>
                    <span className="product-price">${price}</span>
                    <button onClick={() => this.props.addToCart(id, name, price)} className="add-to-cart-button">Add to cart</button>
                </div>
            </div>
        )
    }
}
