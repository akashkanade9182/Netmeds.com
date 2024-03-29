import {useState,useEffect} from "react"
import { Grid,Container,Text,Image,Flex,Box,Heading,VStack,Stack, GridItem } from '@chakra-ui/react'
import {Navigate, useNavigate} from "react-router-dom"
import{useParams} from "react-router-dom"

  import {useSelector,useDispatch} from "react-redux"
import { getOneProduct,addOneProduct } from "../Redux/action"
import Navbar from "../HomePage/Navbar/Navbar"
import Footer from "../HomePage/Navbar/Footer"

import "./SingalPage.css"
  



const SingalPage=()=>{
    const{id}=useParams("id");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const data=useSelector(store=>store.products);
    useEffect(()=>{
        dispatch(getOneProduct(id));

    },[id]);


    const handleCart=(id)=>{
      dispatch(addOneProduct(id,{quantity:1})).then(()=>{
        dispatch(getOneProduct(id));
      }).then(()=>{
     navigate("/cart")
      })
    }
    return (
      <>
           <Navbar/>
    <div className="container">
 
       <div className="conatinerbox">

        <div className="imagebox">
            <img src={data.image} alt="" />
        </div>
        <div className="detailsbox">
            <div>
            <h1>Title:-{data.title}</h1>
            <h4><span>Category;-{data.category}</span><span>Subcategory:-{data.subcategory}</span></h4>
            </div>
            <div>
                <h1 className="pricebox"><span>Price:-</span><span>Rs.{data.price}</span></h1>
                <h5><span>MRP-:</span><span>Rs.{data.MRP}</span></h5>
                <p>(inclusive all taxes)</p>
                <p>* Delivery charges if appllicable will be applied at checkout</p>
                <p>* Country of origin-France</p>
                <p>* good product</p>

                <button onClick={()=>handleCart(id)}className="addtocartbtn">Add to Cart</button>

            </div>
            


        </div>

       </div>
       

    </div>
    <Footer/>
    </>
    )
}
export default SingalPage;