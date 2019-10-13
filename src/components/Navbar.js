import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/ProductsContext";

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return <nav>
            <Link to="/">
              <span>All Items</span>
            </Link>
            <Link to="#">
              {
                   value.selectedItem ? <span>{value.selectedItem} is added to cart</span> : <span>Please select items</span>
              }
            </Link>
            <Link to="/cart">
              <button>Go to cart</button>
            </Link>
          </nav>;
        }}
      </ProductConsumer>
    );
  }
}
