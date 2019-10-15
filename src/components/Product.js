import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    calcuteDiscount = (price, discount) => {
       let discountPrice = price - ( price * discount / 100 )
       return <React.Fragment>
           <span className="product-price discount">${price}</span>&nbsp;<span className="product-price">${discountPrice}</span>
       </React.Fragment>
    }
    render() {
        const { id, discount, img_url, name, price } = this.props
        return (
            <div className="product">
                <div className="product-image">
                    { discount ? <span className="discount">{discount}% off</span> : <span className="no-discount"></span> }
                    <Link to={{ pathname: '/details', state: { name } }}>
                       <img src={img_url} alt={name}/>
                    </Link>
                </div>
                <div className="product-info">
                    <p className="product-name">{name}</p>
                    { discount ? this.calcuteDiscount(Number(price), Number(discount)) : <span className="product-price">${price}</span> }
                    <button onClick={() => this.props.addToCart(id, img_url, name, price)} className="add-to-cart-button">Add to cart</button>
                </div>
            </div>
        )
    }
}
