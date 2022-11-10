import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { Select } from '@chakra-ui/react'
import{useSearchParams,useLocation} from "react-router-dom"





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


const Sidebar = ({products,result,setResult}) => {
  const [subcat,setsubCat]=useState([])
  const[arr,setArr]=useState([]);
  const location=useLocation();



useState(()=>{
  Check(setArr,products,setsubCat)
 console.log(arr)
},[location.search])



  const handleChange=(e)=>{
    let option=e.target.value;
    let newCategory=[...result];
    
    if(newCategory.includes(option))
    {
        newCategory.splice(newCategory.indexOf(option),1);
    }else{
        newCategory.push(option);
    }
    setResult(newCategory);
    console.log(result);

}

  
  return (
    <div className='sidebar'>
        <div className='categoryFbox'>
          <h2>All Category</h2>
         
          <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Personal Care</option>
            <option value="Face Care">Face Care</option>
            <option value="Body Care">Body Care</option>
            <option value="Lip Care">Lip Care</option>
          </select>
           <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Treatment</option>
            <option value="sergical Instruments">Surgical Instrument</option>
            <option value="Respiratory Supplies">Respiratory supplies</option>
            <option value="Iv Infusion">Iv Infusion</option>
          </select>
          <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Wellness</option>
            <option value="sergical Instruments">Surgical Instrument</option>
            <option value="Respiratory Supplies">Respiratory supplies</option>
            <option value="Iv Infusion">Iv Infusion</option>
          </select>
          <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Fitness</option>
            <option value="sergical Instruments">Surgical Instrument</option>
            <option value="Respiratory Supplies">Respiratory supplies</option>
            <option value="Iv Infusion">Iv Infusion</option>
          </select>
          <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Hair</option>
            <option value="sergical Instruments">Surgical Instrument</option>
            <option value="Respiratory Supplies">Respiratory supplies</option>
            <option value="Iv Infusion">Iv Infusion</option>
          </select>
          <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Devicess</option>
            <option value="sergical Instruments">Surgical Instrument</option>
            <option value="Respiratory Supplies">Respiratory supplies</option>
            <option value="Iv Infusion">Iv Infusion</option>
          </select>
          <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Diabetes support</option>
            <option value="sergical Instruments">Surgical Instrument</option>
            <option value="Respiratory Supplies">Respiratory supplies</option>
            <option value="Iv Infusion">Iv Infusion</option>
          </select>
          <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Make up</option>
            <option value="sergical Instruments">Surgical Instrument</option>
            <option value="Respiratory Supplies">Respiratory supplies</option>
            <option value="Iv Infusion">Iv Infusion</option>
          </select>
          <select className='selection' name="personalcare" id="" placeholder='Personal Care'>
            <option value="">Iv fusion</option>
            <option value="sergical Instruments">Surgical Instrument</option>
            <option value="Respiratory Supplies">Respiratory supplies</option>
            <option value="Iv Infusion">Iv Infusion</option>
          </select>


       
          
   
 
  

  



        </div>
        <div className='brandbox'>
          <h1>All Brands</h1>
          {
            subcat.length>0 && subcat.map((item,index)=>(
              <div key={index} className='brandinputbox'>
                <input type="checkbox"
                value={item}
                onChange={handleChange}  defaultChecked={result.includes(item)}
                 
                  
                  />
                <label >`{item}({arr[index]})`</label>
                </div>
            ))
            
          }
          

        </div>
        <div className='featuresbox'>

        </div>

    </div>
  )
}

export default Sidebar