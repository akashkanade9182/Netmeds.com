import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./CategoryPage.css"
import {useSelector,useDispatch} from "react-redux"
import {getUrlData} from "../Redux/action"
import { useLocation } from 'react-router-dom'
import{useSearchParams} from "react-router-dom"
import Card from '../Components/Card';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from "../HomePage/Navbar/Footer"
import "./PersonalCare.css"
import { Image, Text, Box, Button } from '@chakra-ui/react';

const catArray=[
  {
    Path:"/personalcare",
    image:"https://www.netmeds.com/images/category/v1/3902/thumb/face_personal_care.jpg",
    name:"Personal Care"
  },
  {
    Path:"/fitness",
    image:"https://www.netmeds.com/images/product-v1/150x150/848569/vidavance_vanilla_powder_400gm_0_1.jpg",
    name:"Fitness"
  },
  {
    Path:"/treatment",
    image:"https://www.netmeds.com/images/product-v1/150x150/962997/st_johns_industrial_first_aid_kit_stainless_steel_box_small_sjf_s2_0_0.jpg",
    name:"Treatment"
  },
  {
    Path:"/personalcare",
    image:"https://www.netmeds.com/images/product-v1/600x600/851495/sri_sri_tattva_jantughna_vati_500_mg_tablets_100s_0_1.jpg",
    name:"Wellness"
  },
  {
    Path:"/personalcare",
    image:"https://www.netmeds.com/images/product-v1/150x150/940230/loreal_paris_excellence_creme_hair_color_3_dark_brown_natural_darkest_brown_100gm70ml_185010_0_2.jpg",
    name:"Hair"
  }
 

];

const healthArray=[
  {
    Path:"/personalcare",
    image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1",
    name:"Lung Care"
  },
  {
    Path:"/fitness",
    image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1",
    name:"Weight Care"
  },
  {
    Path:"/treatment",
    image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1",
    name:"Women's Care"
  },
  {
    Path:"/personalcare",
    image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1",
    name:"Bone and Jointpain"
  },
  {
    Path:"/personalcare",
    image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1",
    name:"Cold and Fever"
  }
 

];
const responsiveSettings = [
  {
      breakpoint: 700,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 5
      }
  },
  {
      breakpoint: 400,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  },

];


const CategoryPage = () => {
  const dispatch=useDispatch();
  const products=useSelector(store=>store.products);
 const location=useLocation();
 const[range,setRange]=useState()

 const [minvalue,setminvalue]=useState(245);
 const[maxvalue,setmaxvalue]=useState(1245)
  const [searchParams]=useSearchParams();
  const[sort,setSort]=useState(searchParams.get("sortBy")||"")
  const[Brand,setBrand]=useState(searchParams.getAll("brand"));
  

  useEffect(()=>{
    let queryparams
    if(location.search||products.length===0)
    {
      let brand=searchParams.getAll("brand");
      queryparams={
        params:{
         
          _sort:"id",
          _order:searchParams.get("asc") ,
          _limit:10
      
        }
      }
     
    }
   
      dispatch(getUrlData(queryparams,"Fitness",range));

    console.log(range);

   

  },[Brand,sort,range,location.search,searchParams,dispatch,location,products.length])
  
 
  return (
    <div className='cat'>
      <Navbar/>
      <div className='catbox'>
        <h1>Popular Categories</h1>
        <div className='cattrain'>

        {
          catArray.map((item)=>(
            <Link to={item.Path}>
            <div className='carttrainbox'>
            <img src={item.image} alt="err" />
            <h1>{item.name}</h1>
              </div>
              </Link>
          ))
        }
        </div>
        <h1>Popular Products</h1>
        <div className='gridbox'>
                   {
                    products && products.map((item,index)=>(
                      <Box boxShadow={ "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                      } key={item.id} bg={"white"} color="#0b1219" lineHeight={"24px"} width={"90%"} height="400px" marginLeft="25px" padding="40px" display="flex" flexDirection={"column"} alignItems="center" borderRadius="10px" fontSize="17px" textAlign="left" >
                      <Image src={item.image} objectFit="fill" height="250px" width="150px" />
                      <Text noOfLines={1} width={"100px"}>{item.title}</Text>
                      <Box display={"flex"} gap="10px">
                          <Text >₹{item.price}</Text>
                          <Text as='s'>₹{item.MRP}</Text>
                      </Box>
                      <Text color="#5ba41c">{`UPTO ${Math.ceil(100 - (item.price / item.MRP) * 100)}% off`}</Text>
                      <Button width="100%" color="white" backgroundColor="#24aeb1">Add to Cart</Button>
                  </Box>
                    ))
                   }

        </div>
        <h1 fontWeight="bold" >Health Concerns</h1>
        <div className='cattrain'>

{
  healthArray.map((item)=>(
    <Link to={item.Path}>
    <div className='carttrainbox'>
    <img src={item.image} alt="err" />
    <h1>{item.name}</h1>
      </div>
      </Link>
  ))
}
</div>

      </div>
      <Footer/>


    </div>
  )
}

export default CategoryPage