import { map } from '@firebase/util'
import React from 'react'
import styled from "styled-components"
export const LabTestComponent = () => {
    const Options= [
        "complete Homogram","Liver Profile","Diabetes"
    ]

    const Imgs = [
        {title:"Complete Hemogram",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
        {title:"Liver Profile",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
        {title:"Diabetes",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
        {title:"Lipid Profile",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
        {title:"Thyroid Profile",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
    ]
    const Img1s = [
        {title:"Iron Deficiency",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
        {title:"Vitamin",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
        {title:"Testosterone",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
        {title:"Kidney Function Test",img:"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"},
    ]
    return (
        <>
          
        <div style={{backgroundColor:"#d8feff"}} className="categories mt-4 d-flex gap-3 px-4 py-5" >
             <div> <img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1664953293_db.jpg" alt="" />  </div> 
        <div style={{width:"28%"}} class="w3-container rounded  bg-white  ">
    <form class="w3-container  px-3">
        <div className='border w-50 m-auto p-1 mt-3 d-flex align-items-center gap-3'><img  width={"28px"} src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" alt="" />Pathology</div>
        <p className='py-3 '  style={{fontSize:"14px",fontWeight:"499"}}>Please fill in your details</p>
            {/* <div class="spinner-border text-secondary spinner-border-lg">  </div> */}
          <Label >NAME</Label>
      <Input  className="w3-input border-bottom mb-4" type="text"/>
   
      <Label>MOBILE NUMBER</Label>
      <Input  className="w3-input border-bottom mb-4" type="text"/>
     
      <Label>PINCODE</Label>
      <Input  className="w3-input border-bottom mb-4" type="text"/>
   
      <Label>CHOOSE PACKAGE AND TEST</Label>
      {/* <Input  className="w3-input border-bottom mb-5" type="text"/> */}
      <select  className="p-2 w-100 m-1 custom-select text-secondary custom-select-lg mb-3">
  <option style={{fontSize:"12px"}} selected>Select</option>
  {Options?.map((opt)=> <option style={{fontSize:"13px",color:"black"}} value={opt}>{opt}</option>)}
</select>
   
<input class="w3-check-input " type="checkbox" />
      <label style={{fontSize:"13px" ,fontWeight:"bold"}} class=" ps-2 form-check-label" >
      I agree to Netmeds Terms and Conditions.
      </label>
  
      <Input style={{backgroundColor:"#03b0b0",padding:"13px 0px",fontSize:"13px",fontWeight:"625"}} type="submit" value={"BOOK NOW"} className=" mt-3 mb-4  btn btn-primary"/>
    
     </form>
</div>          
      </div>



    <div style={{height:"auto"}} className='rounded bg-white m-5 p-4'>
   <div>
    <Text>Popular Tests</Text>   
    <p className='my-4 text-secondary'>and many more tests and packages <span className='fw-bold '>@ THE BEST PRICES</span> </p>
    </div> <div  className="container-fluid" >
  <div class="row  mb-5 ">
    {Imgs?.map((i)=>  <div  className=' col w-100  d-flex flex-wrap align-items-center gap-2'><img  src={i.img} alt={i.title} />{i.title}</div>)}    
  </div>
  <div class="row  ">
    {Img1s?.map((i)=>  <div  className=' col w-100   d-flex flex-wrap align-items-center gap-2'><img src={i.img} alt={i.title} />{i.title}</div>)}    
  </div>
</div>
</div>



    {/* <div className='rounded  m-5 p-4'>
        <Text>Top Selling Packages</Text>
        <p className='my-2 text-secondary'>Choose from the list of top-selling packages tailored for you. We care for your health!</p>
<div className='row'>
    <div style={{height:'500px'}} className='col border'></div>
</div>
    </div> */}


    <div className='rounded  m-5 p-4'>
        <Text>Customer Speak</Text>
        <p className='my-2 text-secondary'>
Customers Speak Customer satisfaction is our prime focus. We would like to hear your comments about our service.</p>
<div className='row'>
    <div style={{height:'500px'}} className='col border'></div>
</div>
    </div>


    <div className='rounded  m-5 p-4'>
        <Text>Our Highlights</Text>
       <div className='row'>
       <div style={{height:'2x00px'}} className='col  d-flex gap-3'>
       <div  className=' col w-100 p-3 bg-white d-flex flex-wrap align-items-center gap-3'><img  src={"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"} alt="" /><h1 style={{fontWeight:"bold",fontSize:"20px"}}>Home Sample Collection</h1></div>
       <div  className=' col w-100 p-3  bg-white d-flex flex-wrap align-items-center gap-3'><img  src={"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"} alt="" /><h1 style={{fontWeight:"bold",fontSize:"20px"}}>2000+ Location Served</h1></div>
       <div  className=' col w-100 p-3  bg-white d-flex flex-wrap align-items-center gap-3'><img  src={"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"} alt="" /><h1 style={{fontWeight:"bold",fontSize:"20px"}}>NABL, CAP ISO Certified</h1></div>
       <div  className=' col w-100 p-3  bg-white d-flex flex-wrap align-items-center gap-3'><img  src={"https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"} alt="" /><h1 style={{fontWeight:"bold",fontSize:"20px"}}>Upto 80% Discount</h1></div>


       </div>
    </div>

</div>
         </>
    )
}




const Input = styled.input`
width:100%;
flex:1;
border:none;
outline:none;`

const Text = styled.div`
font-size:30px;
font-weight:600;
`
const Label = styled.label`
color:#03b0b0;
font-weight:600`

// className='text-info fw-semibold'