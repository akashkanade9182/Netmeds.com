import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Add, Get } from "../../Redux/action";
const AddProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [state,setState] = useState({
        title:'',
        image:'',
        category:'',
        subcategory:'',
        brand: '',
        price: '',
        MRP:'',
        quantity: 0,
    })
    const {title,image,category,subcategory,brand,price,MRP,quantity} = state
   
    const handleChange = (e) =>
    {
        const value = e.target.value;
        setState({...state,[e.target.name] : value});
    }
const handleSubmit = ()=>{
    const value = ({title,image,category,subcategory,brand,price,MRP,quantity})
    if(title!=""&&image!=""&&subcategory!=''&&brand!=''&&price!=''&&MRP!="")
    {
    dispatch(Add(value)).then((r)=>console.log("Login Success",r))
    dispatch(Get())
    navigate('/admin')
    }
    else
    {
        alert("Please fill all the Inputs")
    }
}
    return (
        <div className=" w-50 m-auto py-4 border bg-light rounded my-5 " >
            <div className="text-center mb-4 fs-4 fw-bolder   ">Add Products</div>
            <FormWrap>
                <Elem >
                    <Label>Product title :-</Label>
                    <input className="border" name="title"onChange={handleChange} value={title}   type="text" />
                </Elem>

                <Elem>
                    <Label>Product Image :-</Label>
                    <input className="border" name="image" onChange={handleChange} value={image}
                        type="url"
                    />
                </Elem>

                <Elem>
                    <Label>Product Category :-</Label>
                    <select className="border" name="category" onChange={handleChange}  value={category} >
                        <option value="">Select Category</option>
                        <option value="Personal Care">Personal Care</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Family Medicine">Family Medicine</option>
                        <option value="Dermatology">Dermotology</option>
                    </select>
                </Elem>
               
                <Elem>
                    <Label>Sub Category :-</Label>
                    <input className="border" name='subcategory' onChange={handleChange} value={subcategory}   type="text" />
                </Elem>

                <Elem>
                    <Label>Brand :-</Label>
                    <input className="border" name='brand' onChange={handleChange} value={brand}   type="text" />
                </Elem>

                <Elem>
                    <Label>Product Price :-</Label>
                    <input className="border" name="price" onChange={handleChange} value={price}   type="number" />
                </Elem>


                <Elem>
                    <Label>MRP :-</Label>
                    <input className="border " required name='MRP' onChange={handleChange} value={MRP}   type="number" />
                </Elem>

                <Elem>
                    <Label>Quantity :-</Label>
                    <select className="border" required name="quantity" onChange={handleChange}  value={quantity} >
                       <option value="">quantity</option>
                        <option value="0">0</option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                    </select>
                    {/* <input className="border" name='quantity' onChange={handleChange} value={quantity}   type="number" /> */}
                </Elem>
<div className="d-flex gap-5">
                <input type="button" value="Go Back" onClick={()=>navigate("/admin")} className="btn btn-danger fw-bold d-flex px-5 my-5 m-auto"/>
                <input type="button" value="Submit" onClick={()=>handleSubmit()} className="btn btn-success fw-bold d-flex px-5 my-5 m-auto"/>
                </div>         
            </FormWrap>
        </div>
    );
};

export default AddProduct;

// .add-product-wrapper{
    // text-align: left;
    // font-size: 19px;
    // width: fit-content;
    // margin: auto;
// }

const FormWrap = styled.div`
text-align: left;
width: fit-content;
margin: auto;
`
const Elem = styled.div`
display: flex;
padding: 15px 0px   ;

`

const Label = styled.div`
  width: 180px;
  font-size: 18px;`