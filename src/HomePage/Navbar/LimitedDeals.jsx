
import React, { useEffect, useState } from 'react';
import { Image,Text,Box, Button } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Countdown from 'react-countdown';
import axios from 'axios';



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



const LimitedTimeDeals = ()=>{

   const [products, setProducts] = useState([])

   const getData = ()=>{
    axios.get("http://localhost:8080/products?_limit=10")
    .then((r)=>{
        setProducts(r.data)
    })
   }

   useEffect(()=>{
    getData()
   },[])

   console.log(products)

    return (
        <div style={{background: "rgb(35,173,176)",color:"#ffffff", margin:"auto"}}>
            <div style={{display:"flex",margin:"auto",width:"90%",justifyContent:"space-between"}}>
                <div style={{textAlign:"left"}}>
                    <Text fontSize='3xl'>Limited Time Deals</Text>
                    <p style={{display:"flex", alignItems:"center"}}> <img src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/time.png" alt=""/> <Countdown date={Date.now() + 10000000} /> remaining</p>
                </div>
                <div>
                    <button style={{background: "rgb(35,173,176)",color:"#ffffff",border:"none",marginTop:"10px"}}>View All {">"}</button>
                </div>
            </div>
            <div style={{width:"90%",margin:"auto",marginTop:"20px"}}>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
                
                    {
                       products.length > 0 && products.map((item)=>(
                            <Box key={item.id} bg={"white"} color="#0b1219" lineHeight={"24px"} width={"90%"} height="400px" marginLeft="25px" padding="40px" display="flex" flexDirection={"column"} alignItems="center" borderRadius="10px" fontSize="17px" textAlign="left" >
                                <Image src={item.image} objectFit="fill" height="250px" width="150px"/>
                                <Text noOfLines={1} width={"100px"}>{item.title}</Text>
                                <Box display={"flex"} gap="10px">
                                    <Text >₹{item.price}</Text>
                                    <Text as='s'>₹{item.MRP}</Text>
                                </Box>
                                <Text color="#5ba41c">{`UPTO ${Math.ceil(100 - (item.price/item.MRP)*100)}% off`}</Text>
                                <Button width="100%" color="white" backgroundColor="#24aeb1">Add to Cart</Button>
                            </Box>
                        ))
                    }

                
                
            </Slide>
            </div>
        </div>
    )
}

export default LimitedTimeDeals