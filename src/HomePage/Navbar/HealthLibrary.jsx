import React from 'react';
import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
import { Heading } from '@chakra-ui/react'
import { Text, Box,Image } from '@chakra-ui/react';


const responsiveSettings = [
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
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
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
const HealthLibrary = () => {

    const images = [
        "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667984179_Indian-Diet-Chart_480x180.jpg",
        "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667987909_Itchy_scalp_480x180.jpg",
        "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667984470_World-Immunization-Day_480x180.jpg",
        "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667922361_Kumaryasava_480x180.jpg",
        "https://www.netmeds.com/images/cms/magefan_blog/nmslite/1667922821_Skin-Healing-Benefits_480x180.jpg",
    ];


    return (
        <div style={{backgroundColor:"#ee4180",padding:"20px 0px" }}>
            <div style={{ width: "90%", margin: "auto"}}>
                <Heading textAlign={"left"}>Health Library</Heading>
                <div>
                    <div style={{textAlign:"left"}}>
                        <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} style={{ objectFit: "fill" }} >
                            <Box border={"0.1px solid"} borderRadius={"6px"} padding="10px">
                                <img src={images[0]} alt="" />
                                <Text backgroundColor={"white"}>How To Lose Weight? This Is What You Should Eat And Here’s Sample Indian Diet Chart</Text>
                            </Box>
                            <Box>
                                <img src={images[1]} alt="" />
                                <Text>Scalp Pruritus: 5 Proven Home Remedies For Itchy Scalp – Infographics</Text>
                            </Box>
                            <Box>
                                <img src={images[2]} alt="" />
                                <Text>World Immunization Day 2022: Significance, Purpose, Theme and Here's Why You Should Get Vaccinated</Text>
                            </Box>
                            <Box>
                                <img src={images[3]} alt="" />
                                <Text>Kumaryasava: Uses, Indications, Method, Dosage, Side Effects And Precautions</Text>
                            </Box>
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Image src={images[4]} alt="" />
                                <Text>Peptides: Discover The Uses, Skin Healing Benefits And Side Effects Of this Beauty Component</Text>
                            </Box>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthLibrary