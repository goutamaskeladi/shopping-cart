import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
       <header>
           <nav>
               <Link to="/">
                    <span>
                        All Items
                    </span>
               </Link>
               <Link to="#">
                    <span>
                        Item is added to cart
                    </span>
               </Link>
               <Link to="/cart">
                   <button>
                       Go to cart
                   </button>
               </Link>
           </nav>
       </header>
    );
  }
}
