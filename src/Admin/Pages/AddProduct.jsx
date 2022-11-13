import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Add } from "../../Redux/action";
const AddProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
//     "title": "Activ Beaute Brightening Face Wash 100 ml",
//     "image": "https://www.netmeds.com/images/product-v1/600x600/1068181/alyuva_ghee_enriched_natural_peach_lip_balm_for_all_ages_7_gm_502156_0_0.jpg",
//     "category": "PersonalCare",
//     "subcategory": "Face Care",
//     "brand": "Active_beaute",
//     "price": 245,
//     "MRP": 300,
//     "quantity": 0,
//     "id": 8
//   },
//   {
//     "name": "",
//     "category": "",
//     "image": "",
//     "price": "",
//     "id": 9
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
    dispatch(Add(value)).then((r)=>console.log("Login Success",r))
    navigate('/')
}
    return (
        <div className=" w-50 m-auto py-4 border bg-light rounded " >
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
                    <input className="border" name='MRP' onChange={handleChange} value={MRP}   type="number" />
                </Elem>

                <Elem>
                    <Label>Quantity :-</Label>
                    <select className="border" name="quantity" onChange={handleChange}  value={quantity} >
                       <option value="">quantity</option>
                        <option value="0">0</option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                    </select>
                    {/* <input className="border" name='quantity' onChange={handleChange} value={quantity}   type="number" /> */}
                </Elem>

                <input type="button" value="Submit" onClick={()=>handleSubmit()} className="btn btn-success fw-bold d-flex px-5 my-5 m-auto"/>
                
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