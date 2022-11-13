import React, { useEffect, useState } from 'react'
import db from "./BeautyData.json"
import Img from './Img';
import Img1  from './Img1';
import Slideshow from '../../HomePage/Navbar/SlideShow';
import 'react-slideshow-image/dist/styles.css'
export const BeautyComponent = () => {
    const [res,setRes]=useState([]);
    useEffect(()=>{
      setRes(db.data)
    },[])
    
    return (
        <>
     
      <div style={{padding:'20px'}} >
        
      <Slideshow/>
      <div className="categories bg-light" >
                    <p className='m-4 ms-0' style={{ textAlign:'left', fontSize:'26px', fontWeight:'bolder'}}>In the Spotlight</p>
                   <img  src="https://www.netmeds.com/images/cms/section/images/1667367314_Winter-Skincare-Sale.jpg" alt="" /> 
                     <p className='m-4 ms-0' style={{ textAlign:'left', fontSize:'26px', fontWeight:'bolder'}}>Featured Brands</p>
                      
             {res?.map((item)=><div> 
            
             {(item.arr[0].title != "")? <Img data={item.arr}/>: <Img1 data={item.arr}/>}
             <div class="d-flex  justify-content-between  py-4">
        <p   style={{  fontSize:'25px', fontWeight:'bolder'}} >{item.name} </p> 
        {(item.arr[item.arr.length-1].view !== "null")?
       <button class=" btn  btn-default text-danger fw-bolder" >View All {">"} </button>:null}</div> 
        </div>
       )}
    </div>
  
      </div>
   </>
    )
}