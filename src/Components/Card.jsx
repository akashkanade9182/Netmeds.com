import React ,{useState,useEffect}from 'react'
import "./Card.css"
import { getCart,EditCart } from '../Redux/action'
import "../Page/Cart.css"
import TotalProduct from './TotalProduct';
import { addProduct } from '../Redux/action';
import {useDispatch,useSelector} from "react-redux"
import axios from 'axios';


const postdata=(data)=>{
 axios.post(`http://localhost:8081/cart`,data)
}





const Card = ({id,handleNavigate,title,image,category,subcategory,brand,price,MRP,quantity,hadleAddtoCart,handleAddProduct,handleRemoveProduct}) => {
 const dispatch=useDispatch();
 const cart=useSelector(store=>store.cart)
 const [state,setState]=useState(quantity);
 const[count,setCount]=useState(0);


const Click=(id)=>{
  hadleAddtoCart(id)
  setCount(prev=>prev+1)
}
const Clickadd=(id,quantity)=>{
  handleAddProduct(id,quantity)
  setCount(prev=>prev+1)
}
const Clickremove=(id,quantity)=>{
  handleRemoveProduct(id,quantity)
  setCount(prev=>prev+1)
}






    

  return (
    <div className="card" >
        <img  onClick={()=>handleNavigate(id)} src={image} alt="err" />
        <h2 className='title'>{title}</h2>
        <p className='categoryname'><span>{category}</span><span>{subcategory}</span></p>
        <p className='pricename'><span>Best Price</span><span>{`Rs.${price}`}</span></p>
        <p className='mrpname'><span>MRP</span><span>{`Rs.${MRP}`}</span></p>
        <div className='buttonbox'>

        
    
       {
         quantity===0 ? <button  className={`addcartbtn`} onClick={()=>Click(id)}>Add To Card</button>:<div className='countingbox'>
         <button onClick={()=>Clickadd(id,quantity)}>+</button>
          <div className='quantbox'>{quantity}</div>
        <button onClick={()=>Clickremove(id,quantity)}>-</button>
         </div>
     

       }
       </div>
     
        
           

            

     
     



    </div>
  )
}
export default Card;
