import React ,{useState,useEffect} from 'react'
import "./PersonalCare.css"
import Navbar from "../HomePage/Navbar/Navbar"
import Footer from "../HomePage/Navbar/Footer"
import Card from '../Components/Card'
import Sidebar from '../Components/Sidebar'
import {useSelector,useDispatch} from "react-redux"
import {getUrlData,EditCart} from "../Redux/action"
import { Navigate, useLocation,useNavigate } from 'react-router-dom'
import{useSearchParams} from "react-router-dom"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,SimpleGrid
} from '@chakra-ui/react'


const Treatment = () => {
    const dispatch=useDispatch();
    const products=useSelector(store=>store.products);
   const location=useLocation();
   const[range,setRange]=useState()
   const navigate=useNavigate()

   const [minvalue,setminvalue]=useState(245);
   const[maxvalue,setmaxvalue]=useState(1245)
    const [searchParams]=useSearchParams();
    const[sort,setSort]=useState(searchParams.get("sortBy")||"")
    const[Brand,setBrand]=useState(searchParams.getAll("brand"));
    const[count,setCount]=useState(0)

const catarray=['Resmed', 'Dr. Odin', 'AccuSure', 'Airways', 'Bard', 'La-Med'];
const countarray=[1, 3, 1, 2, 1, 2];


const hadleAddtoCart=(id)=>{
  dispatch(EditCart(id,{quantity:1}))
  .then(()=>{
    let queryparams
    if(location.search||products.length===0)
    {
      let brand=searchParams.getAll("brand");
      queryparams={
        params:{
          brand:brand,
          _sort:sort && "price",
          _order:searchParams.get("sortBy") 
      
        }
      }
     
    }
   
    dispatch(getUrlData(queryparams,"Treatments",range));
  })

setCount(prev=>prev+1)
}
const handleAddProduct=(id,quantity)=>{
  let newquantity=quantity+1;
  dispatch(EditCart(id,{quantity:newquantity}))
  .then(()=>{
    let queryparams
    if(location.search||products.length===0)
    {
      let brand=searchParams.getAll("brand");
      queryparams={
        params:{
          brand:brand,
          _sort:sort && "price",
          _order:searchParams.get("sortBy") 
      
        }
      }
     
    }
   
    dispatch(getUrlData(queryparams,"PersonalCare",range));
  })
  console.log(quantity,id)

// setCount(prev=>prev+1)
}




const handleRemoveProduct=(id,quantity)=>{
  let newquantity=quantity-1;
  if(newquantity>=0){
    dispatch(EditCart(id,{quantity:newquantity}))
    .then(()=>{
      let queryparams
      if(location.search||products.length===0)
      {
        let brand=searchParams.getAll("brand");
        queryparams={
          params:{
            brand:brand,
            _sort:sort && "price",
            _order:searchParams.get("sortBy") 
        
          }
        }
       
      }
     
      dispatch(getUrlData(queryparams,"PersonalCare",range));
    })
  
  // setCount(prev=>prev+1)
   
  }
 

  setCount(prev=>prev+1)

}




    useEffect(()=>{
      let queryparams
      if(location.search||products.length===0)
      {
        let brand=searchParams.getAll("brand");
        queryparams={
          params:{
            brand:brand,
            _sort:sort && "price",
            _order:searchParams.get("sortBy") 
        
          }
        }
       
      }
     
        dispatch(getUrlData(queryparams,"Treatments",range));
  
      console.log(range);
  
     
  
    },[Brand,sort,range,location.search,searchParams,dispatch,location,products.length])
    
    const handleSortclick=(val)=>{
       
        setSort(val)
      }
      const handleNavigate=(id)=>{
        navigate(`/personalcare/${id}`)
        // console.log(id)
      }
      
      
    

  return (
    <div className='categorypage'>
      <Navbar/>
         <div className='categorypagebox'>
            <Sidebar props={{setBrand,setRange,minvalue,maxvalue,catarray,countarray,setSort}} />
            <div className='productsbox'>
               
                <div className='categoryimagebox'>
                    <img src="https://www.netmeds.com/images/category/3141/respiratory-supplies_0.jpg" alt="" />
                </div>
                <div className='sortingbox'>
                    <div>  
  
                        {
                            range && <button>price Range 0 to {range}</button>
                        }{
                            Brand && Brand.map((item,index)=>(
                            <button key={index}>{item}</button>  
                            ))
                        }

                    </div>
                    <div>
                        <label htmlFor="">sort by:-</label>
                        <button className={ sort=="asc"?"buttontrue":"buttonfalse"} onClick={()=>handleSortclick("asc")}>Price Low to High</button>
                         <button className={ sort=="desc"?"buttontrue":"buttonfalse"} onClick={()=>handleSortclick("desc")}>Price High to low</button>
                    </div>
            
                </div>
                <SimpleGrid columns={[1,2,3,4]} spacing={10} className='gridbox'>
            {
              products.length > 0 && products.map((item, index) => (
                <Card key={index} handleNavigate={() => handleNavigate(item._id)} hadleAddtoCart={() => hadleAddtoCart(item._id)} handleAddProduct={() => handleAddProduct(item._id, item.quantity)} handleRemoveProduct={() => handleRemoveProduct(item._id, item.quantity)} {...item} />
              ))
            }

          </SimpleGrid >
            </div>
      

        </div>
        <Footer/>
    </div>
  )
}

export default Treatment;