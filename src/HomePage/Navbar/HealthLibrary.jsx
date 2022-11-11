import React from 'react';
import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
import { Heading } from '@chakra-ui/react'
import { Text, Box,Image } from '@chakra-ui/react';


const responsiveSettings = [
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
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
const HealthLibrary = () => {

    const images = [
        {image :"https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667984179_Indian-Diet-Chart_480x180.jpg",
        description : "How To Lose Weight? This Is What You Should Eat And Here’s Sample Indian Diet Chart"
    },
        {image : "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667987909_Itchy_scalp_480x180.jpg",
        description : "Scalp Pruritus: 5 Proven Home Remedies For Itchy Scalp – Infographics"
    },
        {image : "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667984470_World-Immunization-Day_480x180.jpg",
        description : "World Immunization Day 2022: Significance, Purpose, Theme and Here's Why You Should Get Vaccinated"
    },
        {image : "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667922361_Kumaryasava_480x180.jpg",
        description : "Kumaryasava: Uses, Indications, Method, Dosage, Side Effects And Precautions"
    },
        {image : "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667922821_Skin-Healing-Benefits_480x180.jpg",
        description : "Peptides: Discover The Uses, Skin Healing Benefits And Side Effects Of this Beauty Component"
    },
    ];


    return (
        <div style={{backgroundColor:"#ee4180",padding:"20px 0px" , marginTop : "50px"}}>
            <div style={{ width: "90%", margin: "auto"}}>
                <Heading color="white" textAlign={"left"}>Health Library</Heading>
                <div style={{marginTop:"50px"}}>
                    <div style={{textAlign:"left" }}>
                        <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}  >
                        {
                    images.map((item=>(
                        <Box key={Math.random()}  bg={"white"} color="#0b1219" lineHeight={"24px"} width={"90%"}  marginLeft="25px"  display="flex" flexDirection={"column"} alignItems="center" borderRadius="10px" fontSize="17px" textAlign="left" gap="10px">
                        <Image borderRadius="10px 10px 0px 0px" boxSize='200px' width="100%" src={item.image} alt=""/>
                            <Text padding="5px 20px" noOfLines={2}>{item.description}</Text>
                        </Box>
                    )))
                }
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthLibrary