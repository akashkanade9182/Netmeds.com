import { Slide } from "react-slideshow-image"
import { Box, Heading, Image, Text } from "@chakra-ui/react";
// import { useEffect } from "react";

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
            slidesToShow: 4,
            slidesToScroll: 4
        }
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }
];

const HealthConcern = () =>{

    const images = [
        {
            image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1",
            description : "Lung Care"
        },
        {
            image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1",
            description : "Weight Care"
        },
        {
            image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1",
            description : "Women's Care"
        },
        {
            image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1",
            description : "Bone And Joint Pain"
        },
        {
            image:"https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1",
            description : "Cold And Fever"
        }
    ]

    

    return (
        <div style={{width:"90%",margin:"auto"}}>
            <Heading textAlign={"left"}>Health Concerns</Heading>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} display={"flex"} gap="40px">
                {
                    images.map((item=>(
                        <Box key={Math.random()} bg={"white"} color="#0b1219" lineHeight={"24px"} width={"90%"} marginLeft="25px" padding="40px" display="flex" flexDirection={"column"} alignItems="center" borderRadius="10px" fontSize="17px" textAlign="left" >
                            <Image boxSize='150px' src={item.image} alt=""/>
                            <Text>{item.description}</Text>
                        </Box>
                    )))
                }
            </Slide>
        </div>
    )
}

export default HealthConcern