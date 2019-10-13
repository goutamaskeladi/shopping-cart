import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        const { name } = this.props.location.state
        return (
            <div className="product-full-details">
                <h2>Product Details</h2>
                <br></br>
                <hr></hr>
                <br></br>
                <h4>You selected: {name}</h4>
            </div>
        )
    }
}
