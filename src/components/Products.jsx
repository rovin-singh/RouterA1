import React, { useEffect, useState } from "react"
import {Link, Outlet} from "react-router-dom"
import "./style.css"
const Products=()=>{
   const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts= async ()=>{
            let res= await fetch("http://localhost:8080/products");
            let data= await res.json();
            setProducts(data);
          }
          fetchProducts();
    },[])
    console.log(products)
     return(
         <div className="Produts_table">
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Know-More</th>
                </thead>
                <tbody>
                    { products.map((data)=>(
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>
                                <Link to={`/products/${data.id}`}>Know More</Link>
                            </td>
                        </tr>
                    ))}   
                </tbody>
            </table>
            <Outlet/>
         </div>
     )
}

export default Products;