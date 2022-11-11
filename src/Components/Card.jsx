import React ,{useState,useEffect}from 'react'
import "./Card.css"
import TotalProduct from './TotalProduct';
import { addProduct } from '../Redux/action';
import {useDispatch,useSelector} from "react-redux"
import axios from 'axios';


const postdata=(data)=>{
 axios.post(`http://localhost:8081/cart`,data)
}





const Card = ({title,image,category,subcategory,brand,price,MRP,quantity}) => {
 const dispatch=useDispatch();
 const cart=useSelector(store=>store.cart)




   const handleClick=()=>{
    let data={
      title,image,category,subcategory,brand,price,MRP,quantity
    }
    postdata(data)

 

    

   
    
   }
    

  return (
    <div className="card">
        <img src={image} alt="err" />
        <h2 className='title'>{title}</h2>
        <p className='categoryname'><span>{category}</span><span>{subcategory}</span></p>
        <p className='pricename'><span>Best Price</span><span>{`Rs.${price}`}</span></p>
        <p className='mrpname'><span>MRP</span><span>{`Rs.${MRP}`}</span></p>
       
    
       {
        
        quantity>0?<TotalProduct/>: <button className='addcartbtn' onClick={handleClick}>Add To Card</button>

       }
        
           

            

     
     



    </div>
  )
}
export default Card;
