import React ,{useState,useEffect} from 'react'
import "./PersonalCare.css"

import Card from '../Components/Card'
import Sidebar from '../Components/Sidebar'
import {useSelector,useDispatch} from "react-redux"
import {getUrlData} from "../Redux/action"
import { useLocation } from 'react-router-dom'
import{useSearchParams} from "react-router-dom"


const Fitness = () => {
    const dispatch=useDispatch();
    const products=useSelector(store=>store.products);
   const location=useLocation();
   const[range,setRange]=useState()

   const [minvalue,setminvalue]=useState(245);
   const[maxvalue,setmaxvalue]=useState(1245)
    const [searchParams]=useSearchParams();
    const[sort,setSort]=useState(searchParams.get("sortBy")||"")
    const[Brand,setBrand]=useState(searchParams.getAll("brand"));
    
const catarray=['Aiwo ', 'B-Protin', 'Boost', 'Bournvita', 'andMe ', 'Apple Cider Vinegar', 'ElectroFizz', 'Dr. Morphan', 'Enerzal', 'Glucon-D', 'AZAFRAN', 'Be Bodywise', 'Bold Care', "Chaitanya'", 'Kapiva ', 'Kapiva'];
const countarray=[2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1];






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
     
        dispatch(getUrlData(queryparams,"Fitness",range));
  
      console.log(range);
  
     
  
    },[Brand,sort,range,location.search,searchParams,dispatch,location,products.length])
    
    const handleSortclick=(val)=>{
       
        setSort(val)
      }
      
    

  return (
    <div className='categorypage'>
         <div className='categorypagebox'>
            <Sidebar props={{setBrand,setRange,minvalue,maxvalue,catarray,countarray,setSort}} />
            <div className='productsbox'>
               
                <div className='categoryimagebox'>
                    <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1668110130_supradyn_web_cat.jpg" alt="" />
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
                <div className='gridbox'>
                   {
                    products && products.map((item,index)=>(
                        <Card key={index} {...item}/>
                    ))
                   }

                </div>
            </div>
      

        </div>
    </div>
  )
}

export default Fitness