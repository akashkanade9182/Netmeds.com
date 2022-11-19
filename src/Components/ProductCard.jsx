import { AlertTitle } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Del, Edit } from "../Redux/action";
import "./productcard.css"

const ProductCard = ({ item }) => {
    
const d = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(item)
   const handleDelete = (id)=>{
        // dispatch(Del(id))
        dispatch(Del(id)).then((r)=>console.log("Delete Success",r)) 
        window.location.reload()
   }

    return (
        <>
       
            <th scope='row'>{item.id}</th>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td><img width="50px" src={item.image} alt="" /></td>
            <td>{item.subcategory}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
            <td>{item.MRP}</td>
            <td>{item.quantity}</td>
            <td> <button  onClick={()=>handleDelete(item.id)} className="danger"> <img src='./delete.png' alt='delete' width='20px' />         </button></td>
          </>
     
    );
};

export default ProductCard;
