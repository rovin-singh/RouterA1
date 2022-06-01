import React, { useState,useEffect } from "react"
import {useParams } from "react-router-dom"
import "./style.css"
const Product=()=>{
    const [products,setProducts]=useState({});
    const {id} =useParams()
    useEffect(()=>{
      if(id){
        fetch(`http://localhost:8080/products/${id}`).then((res)=>res.json()).then((data)=>
        setProducts(data));
       }
    },[id])
    console.log(products)
     return(
         <div>
             <h3>Prooduct Name : {products.name}</h3>
             <h3>Product Price : {products.price}</h3>
         </div>
     )
}

export default Product;