import React from "react"
import { Link } from "react-router-dom";
import "./style.css"
const Navbar=()=>{
     return(
         <div className="Navbar-main">
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link> 
            <Link to="/products">Products</Link> 
         </div>
     )
}

export default Navbar;