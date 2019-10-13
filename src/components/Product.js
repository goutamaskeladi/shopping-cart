import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { id, discount, img_url, name, price } = this.props
        return (
            <div className="product">
                <div className="product-image">
                    <span className="discount">{discount}% off</span>
                    <img src={img_url} alt={name}/>
                </div>
                <div className="product-info">
                    <p className="product-name">{name}</p>
                    <span className="product-price">${price}</span>
                    <button className="add-to-cart-button">Add to cart</button>
                </div>
            </div>
        )
    }
}
