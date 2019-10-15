import React, { Component } from "react";
import { ProductConsumer } from "../context/ProductsContext";
import { Link } from "react-router-dom";

const CartHeader = (props) => {
  return (
    <div className="cart-list-header">
      <div className="row">
        <p>Items ({props.products.length})</p>
      </div>
      <div className="row">
        <p>Qty</p>
      </div>
      <div className="row">
        <p>Price</p>
      </div>
    </div>
  );
};

const CartItems = props => {
    return props.items.cart.map(item => {
        return(
          <li className="cart-item" key={item.id}>
                <div className="item-img-name"> 
                    <img src={item.url} alt={item.name} className="item-image"/>
                    <span className="item-name">{item.name}</span>
                </div>
                <div className="item-qty">

                </div>
                <div className="item-price">
                  <p>${item.price}</p>
                </div>
          </li>
        )
    })
}

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cart-header">
          <Link to="/">
            <p>
              <span>&laquo;</span>&nbsp;Order Summary
            </p>
          </Link>
        </div>
        <ProductConsumer>
          {products => {
            if (products.cart.length > 0) {
              return (
                <div className="cart-details">
                  <div className="cart-list">
                    <CartHeader products={products.cart}/>
                    <ul className="cart-collection">
                        <CartItems items={products}/>
                    </ul>
                  </div>
                  <div className="order-list">
                    <p>Cart Total</p>
                  </div>
                </div>
              );
            } else {
              return (
                <h2 className="empty-cart-message">
                  Your shopping cart is empty. Please select an item!
                </h2>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
