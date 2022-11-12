
// import React, { useEffect, useState } from 'react';
import { Image, Text, Box, Button } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Countdown from 'react-countdown';
// import axios from 'axios';
import { cart } from '../utils/products';



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



const LimitedTimeDeals = () => {


    return (
        <Box style={{ background: "rgb(35,173,176)", color: "#ffffff" }}>
            <Box style={{ display: "flex", margin: "auto", width: "90%", justifyContent: "space-between", flexDirection :"column" }}>

                <Box display="flex" justifyContent="space-between" marginBottom="20px">
                    <Box style={{ textAlign: "left" }}>
                        <Text fontSize='3xl'>Limited Time Deals</Text>
                        <Text style={{ display: "flex", alignItems: "center" }}> <Image src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/time.png" alt="" /> <Countdown date={Date.now() + 10000000} /> remaining</Text>
                    </Box>
                    <Box>
                        <button style={{ background: "rgb(35,173,176)", color: "#ffffff", border: "none", marginTop: "10px" }}>View All {">"}</button>
                    </Box>
                </Box>
                <Box >
                    <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>

                        {
                            cart.length > 0 && cart.map((item) => (
                                <Box key={Math.random()} bg={"white"} color="#0b1219" lineHeight={"24px"} width={"90%"} marginLeft="25px" padding="40px" display="flex" flexDirection={"column"} alignItems="center" borderRadius="10px" fontSize="17px" textAlign="left" >
                                <Image src={item.image} />
                                    <Text noOfLines={1} >{item.title}</Text>
                                    <Box >
                                        <Text >₹{item.price}</Text>
                                        <Text as='s'>₹{item.MRP}</Text>
                                    </Box>
                                    <Text color="#5ba41c">{`UPTO ${Math.ceil(100 - (item.price / item.MRP) * 100)}% off`}</Text>
                                    <Button color="white" backgroundColor="rgb(36,172,175)" >Add to Cart</Button>
                                </Box>
                            ))
                        }



                    </Slide>
                </Box>
            </Box>
        </Box>
    )
}

export default LimitedTimeDeals