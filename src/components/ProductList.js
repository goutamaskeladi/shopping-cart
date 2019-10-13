import React, { Component } from 'react'
import Product from './Product'
import { ProductConsumer } from '../context/Products'

export default class ProductList extends Component {
    render() {
        return (
            <div>
               <ProductConsumer>
                   {
                       (context) => {
                          if(context.products.length > 0) {
                            return context.products.map(item => {
                                return <Product key={item.id}/>
                            })
                          } else {
                             return <h2>Loading, Please Wait...</h2>
                          }
                       }
                   }
               </ProductConsumer>
            </div>
        )
    }
}
