import React, { Component } from "react";
import { ProductConsumer } from "../context/ProductsContext";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  renderData = products => {
    return (
      <div className="cart-details">
        <ul>
          {products.map(item => {
            return (
              <li>
                {item.name} - $<strong>{item.price.toFixed(2)}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
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
              return this.renderData(products.cart);
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
