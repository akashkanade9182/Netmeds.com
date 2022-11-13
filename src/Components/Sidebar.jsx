import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { Select } from '@chakra-ui/react'
import{useSearchParams,useLocation} from "react-router-dom"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


// const catarray=['Active_beaute', 'Arata', 'Aryanveda', 'Avene', 'Beardo', 'Agrawal', 'Aroma', 'Ayur', 'Alyuva', 'Atulya', 'AZAFRAN', 'Be Bodywise', 'Bold Care', "Chaitanya'", 'Kapiva ', 'Aiwo ', 'B-Protin', 'Boost', 'Bournvita', 'andMe ', 'Apple Cider Vinegar', 'ElectroFizz', 'Dr. Morphan', 'Enerzal', 'Glucon-D', 'Kapiva', 'Resmed', 'Akas', 'Dr. Odin', 'AccuSure', 'Airways', 'Bard', 'La-Med']
// const countarray=[4, 5, 3, 1, 1, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 2, 1, 8]


const Check=(products,setArr,setsubCat)=>{
   
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


const Sidebar = ({props}) => {
  const{setBrand,setSort,setRange,catarray,countarray,minvalue,maxvalue}=props;
  const location=useLocation();
  const[subcat,setsubCat]=useState([])
  const[arr,setArr]=useState([])
  const[count,setCount]=useState(0);
  const [searchParams,setseachParams]=useSearchParams();
  const products=useSelector(store=>store.products)
  const[result,setResult]=useState(searchParams.getAll("brand")||[])
  const[sortBy,setSortBy]=useState(searchParams.get("sortBy")||"");

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
    },
    {
      Path:"/personalcare",
      image:"https://www.netmeds.com/images/product-v1/150x150/940230/loreal_paris_excellence_creme_hair_color_3_dark_brown_natural_darkest_brown_100gm70ml_185010_0_2.jpg",
      name:"Devices"
    },
    {
      Path:"/personalcare",
      image:"https://www.netmeds.com/images/product-v1/150x150/940230/loreal_paris_excellence_creme_hair_color_3_dark_brown_natural_darkest_brown_100gm70ml_185010_0_2.jpg",
      name:"Fragrances"
    },
    {
      Path:"/personalcare",
      image:"https://www.netmeds.com/images/product-v1/150x150/940230/loreal_paris_excellence_creme_hair_color_3_dark_brown_natural_darkest_brown_100gm70ml_185010_0_2.jpg",
      name:"Makeup"
    },
    {
      Path:"/personalcare",
      image:"https://www.netmeds.com/images/product-v1/150x150/940230/loreal_paris_excellence_creme_hair_color_3_dark_brown_natural_darkest_brown_100gm70ml_185010_0_2.jpg",
      name:"Men's Grooming"
    },
    {
      Path:"/personalcare",
      image:"https://www.netmeds.com/images/product-v1/150x150/940230/loreal_paris_excellence_creme_hair_color_3_dark_brown_natural_darkest_brown_100gm70ml_185010_0_2.jpg",
      name:"Tool and Aplliances"
    }
   
   
   
   
   
   
  
  ];






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
    setBrand(newCategory);
    console.log(result);
  }

const handleSortclick=(val)=>{
  setSortBy(val);
  setSort(val)
}



  useEffect(()=>{
    

    const params={};
    result && (params.brand=result);
    sortBy&&(params.sortBy=sortBy);
    // sortBy&&(params.sortBy=sortBy);
    setseachParams(params);
    Check(products,setArr,setsubCat);
  },[result,setseachParams,sortBy])
  // console.log("check",arr);

 

  
  return (
    <div className='sidebar'>
        <div className='categoryFbox'>
          <h1 >All Category</h1>
         <div className='train'>
         {
          catArray.map((item)=>(
            <Link to={item.Path}>
            <div className='trainbox'>
            <h2>{item.name}</h2>
              </div>
              </Link>
          ))
        }
   
         </div>
        

       
          
   
 
  

  



        </div>
        <div className='brandbox'>
          <h1>All Brands</h1>
          {
           catarray.map((item,index)=>(
              <div key={index} className='brandinputbox'>
                <input type="checkbox"
                value={item}
                onChange={handleChange}  defaultChecked={result.includes(item)}
                 
                  
                  />
                <label >{item}({countarray[index]})</label>
                </div>
            ))
            
          }
          

        </div>
        <div className='featuresbox'>
          <h1>Filters</h1>
          <div >
            <button onClick={()=>handleSortclick("asc")}>Price Low to High</button>
            <button onClick={()=>handleSortclick("desc")}>Price High to low</button>
            <div>
              <label> low</label>
            <input type="range" min={minvalue} onChange={(e)=>setRange(e.target.value)} max={maxvalue}  step="10" />
            <label> High</label>
            </div>

          </div>

        </div>

    </div>
  )
}

export default Sidebar