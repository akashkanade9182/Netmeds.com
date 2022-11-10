import React ,{useState,useEffect}from 'react'
import "./Card.css"





 const TotalProdduct=(count)=>{

    return (
        <div className="totalProduct">
            <button className='increamentbtn'>+</button>
            <div className='countbox'>{count}</div>
            <button className='decreamentbtn' >-</button>
        </div>
    )
 }





const Card = ({title,image,category,subcategory,brand,price,MRP,quantity}) => {

    const [count,setCount]=useState(quantity);
    console.log(quantity)

  return (
    <div className="card">
        <img src={image} alt="err" />
        <h2 className='title'>{title}</h2>
        <p className='categoryname'><span>{category}</span><span>{subcategory}</span></p>
        <p className='pricename'><span>Best Price</span><span>{`Rs.${price}`}</span></p>
        <p className='mrpname'><span>MRP</span><span>{`Rs.${MRP}`}</span></p>
       
    
       
           <button className='addcartbtn'>Add To Card</button>
        


     
     



    </div>
  )
}
export default Card;
