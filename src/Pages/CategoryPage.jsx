import React ,{useState,useEffect}from 'react'
import "./CategoryPage.css"
import Card from '../Components/Card'
import Sidebar from '../Components/Sidebar'
import {useSelector,useDispatch} from "react-redux"
import {getdata} from "../Redux/action"



const Check=(setArr,products,setsubCat)=>{
   
    let obj={};
    products.forEach((ele)=>{
    
    if(obj[ele.brand]===undefined)
    {
        obj[ele.brand]=1;
    }else{
        obj[ele.brand]++;
    }
   })
   let brr=[];
   let crr=[];
   for(let key in obj){
    brr.push(key);
    crr.push(obj[key])

   }
   setsubCat([...brr]);
   setArr([...crr]);


}




const CategoryPage = () => {
    const dispatch=useDispatch();
    const products=useSelector(store=>store.products);
   
    const[result,setResult]=useState([])









    useEffect(()=>{
        dispatch(getdata);
     
    },[dispatch])
    
    

  return (
    <div className='categorypage'>
         <div className='categorypagebox'>
            <Sidebar   result={result} setResult={setResult} products={products}/>
            <div className='productsbox'>
                <div className='categoryimagebox'>
                    <img src="https://www.netmeds.com/images/category/v1/3902/face_personal_care.jpg" alt="" />
                </div>
                <div className='sortingbox'>

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

export default CategoryPage