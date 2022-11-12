import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Image,Text } from '@chakra-ui/react';

const responsiveSettings = [
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

const Trending = () => {
    const images = [
        {image : "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558706_TrueHB_Mini_banner_web.jpg"},
        {image :"https://www.netmeds.com/images/cms/aw_rbslider/slides/1667462507_Web_Home_Page_Mini_Banner-436X224__.png"},
        {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1666259889_Truuth_web.jpg"},
        {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1665742857_Dabur_Home.jpg"},
        {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558258_Inlife_mini_banners_web.jpg"},
        {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558622_Ambitech_Mini_banner_web.jpg"},
        {image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1667559169_Mendwell_mini_web.jpg"}

    ];
    return (
        <div style={{width : "90%", margin:"auto"}}>
            <Text fontSize='4xl' textAlign={"left"}>Trending Today</Text>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} style={{objectFit:"fill"}}>
                {
                    images.map((item)=>(
                        <Box key={Math.random()}  bg={"white"} color="#0b1219" lineHeight={"24px"} width={"90%"}  marginLeft="25px" padding="40px" display="flex" flexDirection={"column"} alignItems="center" borderRadius="10px" fontSize="17px" textAlign="left" >
                        <Image width='600px' borderRadius="10px" src={item.image}/>
                        </Box>
                    ))
                }
                
            </Slide>
        </div>
    );
};

export default Trending;