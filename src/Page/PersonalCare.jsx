import React, { useState, useEffect } from 'react'
import "./PersonalCare.css"
import Navbar from "../HomePage/Navbar/Navbar"
import Footer from "../HomePage/Navbar/Footer"
import Card from '../Components/Card'
import Sidebar from '../Components/Sidebar'
import { useSelector, useDispatch } from "react-redux"
import { getUrlData, getCart, EditCart, addCart } from "../Redux/action"
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSearchParams, Link } from "react-router-dom"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,Box,Grid,SimpleGrid
} from '@chakra-ui/react'





const catArray = [
  {
    Path: "/personalcare",
    image: "https://www.netmeds.com/images/category/v1/3902/thumb/face_personal_care.jpg",
    name: "Personal Care"
  },
  {
    Path: "/fitness",
    image: "https://www.netmeds.com/images/product-v1/150x150/848569/vidavance_vanilla_powder_400gm_0_1.jpg",
    name: "Fitness"
  },
  {
    Path: "/treatment",
    image: "https://www.netmeds.com/images/product-v1/150x150/962997/st_johns_industrial_first_aid_kit_stainless_steel_box_small_sjf_s2_0_0.jpg",
    name: "Treatment"
  },
  {
    Path: "/personalcare",
    image: "https://www.netmeds.com/images/product-v1/600x600/851495/sri_sri_tattva_jantughna_vati_500_mg_tablets_100s_0_1.jpg",
    name: "Wellness"
  },
  {
    Path: "/personalcare",
    image: "https://www.netmeds.com/images/product-v1/150x150/940230/loreal_paris_excellence_creme_hair_color_3_dark_brown_natural_darkest_brown_100gm70ml_185010_0_2.jpg",
    name: "Hair"
  }


];






const PersonalCare = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);
  const location = useLocation();
  const [range, setRange] = useState()
  const navigate = useNavigate()
  const [minvalue, setminvalue] = useState(245);
  const [maxvalue, setmaxvalue] = useState(1245)
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sortBy") || "")
  const [Brand, setBrand] = useState(searchParams.getAll("brand"));
  const [count, setCount] = useState(0)
  const isLoading = useSelector(store => store.isLoading)
  const catarray = ['Active_beaute', 'Arata', 'Aryanveda', 'Avene', 'Beardo', 'Agrawal', 'Aroma', 'Ayur', 'Alyuva', 'Atulya']
  const countarray = [3, 5, 3, 1, 1, 1, 1, 1, 1, 1]



  const hadleAddtoCart = (id) => {
    dispatch(EditCart(id, { quantity: 1 }))
      .then(() => {
        let queryparams
        if (location.search || products.length === 0) {
          let brand = searchParams.getAll("brand");
          queryparams = {
            params: {
              brand: brand,
              _sort: sort && "price",
              _order: searchParams.get("sortBy")

            }
          }

        }

        dispatch(getUrlData(queryparams, "PersonalCare", range));
      })

    setCount(prev => prev + 1)
  }

  const handleAddProduct = (id, quantity) => {
    let newquantity = quantity + 1;
    dispatch(EditCart(id, { quantity: newquantity }))
      .then(() => {
        let queryparams
        if (location.search || products.length === 0) {
          let brand = searchParams.getAll("brand");
          queryparams = {
            params: {
              brand: brand,
              _sort: sort && "price",
              _order: searchParams.get("sortBy")

            }
          }

        }

        dispatch(getUrlData(queryparams, "PersonalCare", range));
      })
    console.log(quantity, id)

    // setCount(prev=>prev+1)
  }



  const handleRemoveProduct = (id, quantity) => {
    let newquantity = quantity - 1;
    if (newquantity >= 0) {
      dispatch(EditCart(id, { quantity: newquantity }))
        .then(() => {
          let queryparams
          if (location.search || products.length === 0) {
            let brand = searchParams.getAll("brand");
            queryparams = {
              params: {
                brand: brand,
                _sort: sort && "price",
                _order: searchParams.get("sortBy")

              }
            }

          }

          dispatch(getUrlData(queryparams, "PersonalCare", range));
        })

      // setCount(prev=>prev+1)

    }


    setCount(prev => prev + 1)

  }



  useEffect(() => {
    let queryparams
    if (location.search || products.length === 0) {
      let brand = searchParams.getAll("brand");
      queryparams = {
        params: {
          brand: brand,
          _sort: sort && "price",
          _order: searchParams.get("sortBy")

        }
      }

    }


    dispatch(getUrlData(queryparams, "PersonalCare", range));

    console.log(range);
    



  }, [Brand, count, sort, range, location.search, searchParams, dispatch, location, products.length])

  const handleSortclick = (val) => {

    setSort(val)
  }
  const handleNavigate = (id) => {
    navigate(`/personalcare/${id}`)
    // console.log(id)
  }
  const handleScroll=()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



  return (
    <div className='categorypage'>

      <Navbar />
      { }

      <div className='categorypagebox'>
        <Sidebar props={{ setBrand, setRange, minvalue, maxvalue, catarray, countarray, setSort }} />
        <div className='productsbox'>

          <div className='categoryimagebox'>
            <img src="https://www.netmeds.com/images/category/v1/3902/face_personal_care.jpg" alt="" />
          </div>
          <div className='sortingbox'>
            <div>
              <label >Brands:-</label>

              {
                Brand && Brand.map((item, index) => (
                  <button key={index}>{item}</button>
                ))
              }

            </div>
            <div>
              <label htmlFor="">sort by:-</label>
              <button className={sort == "asc" ? "buttontrue" : "buttonfalse"} onClick={() => handleSortclick("asc")}>Price Low to High</button>
              <button className={sort == "desc" ? "buttontrue" : "buttonfalse"} onClick={() => handleSortclick("desc")}>Price High to low</button>
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
      <button style={{
        border: "none",
        width: "150px",
        display:"flex",
        alignItems:"center",
        backgroundColor: "black",
        color: "white",
        borderRadius: "9px",
        margin: "auto",
        padding: "5px 10px",
        marginTop: "20px"
      }}
      onClick={handleScroll}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-top" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        </svg>Scroll to Top</button>

      <Footer />
    </div>
  )
}

export default PersonalCare