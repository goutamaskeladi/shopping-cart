import React, { Component } from 'react'
import Product from './Product'
import { ProductConsumer } from '../context/Products'

export default class ProductList extends Component {
    render() {
        return (
            <main>
               <ProductConsumer>
                   {
                       (context) => {
                          if(context.products.length > 0) {
                            return context.products.map(item => {
                                return <Product key={item.id} {...item}/>
                            })
                          } else {
                             return <h2 className="loading-message">Loading, Please Wait...</h2>
                          }
                       }
                   }
               </ProductConsumer>
            </main>
        )
    }
}
