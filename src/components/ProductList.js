import React, { Component } from "react"
import Product from "./Product"
import Navbar from './Navbar'
import { ProductConsumer } from "../context/ProductsContext"

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
         <Navbar/>
        <div className="product-list">
          <ProductConsumer>
            {context => {
              if (context.products.length > 0) {
                return context.products.map(item => {
                  return (
                    <Product
                      key={item.id}
                      {...item}
                      addToCart={context.addToCart}
                    />
                  );
                });
              } else {
                return (
                  <h2 className="loading-message">Loading, Please Wait...</h2>
                );
              }
            }}
          </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}
