import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Box, Image, Text } from '@chakra-ui/react';

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

const TopBrands = () => {
    const images = [
        {
            image: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/himalaya.jpg?v=14",
            name: "Himalaya"
        },
        {
            image: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/accu-chek.jpg?v=14",
            name: "Accu-Chek"
        },
        {
            image: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg?v=14",
            name: "Dabur"
        },
        {
            image: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/manforce.jpg?v=14",
            name: "Manforce"
        },
        {
            image: "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/revital.jpg?v=14",
            name: "Revital"
        },
    ];
    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <Text fontSize='4xl' textAlign={"left"}>Top Brands</Text>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} style={{ objectFit: "fill" }}>
                {
                    images.map((item) => (
                        <Box key={Math.random()} bg={"white"} color="#0b1219" lineHeight={"24px"} width={"90%"} marginLeft="25px" padding="40px" display="flex" flexDirection={"column"} alignItems="center" borderRadius="10px" fontSize="17px" textAlign="left" >
                            <Image width='300px' borderRadius="10px" src={item.image} />
                            <Text>{item.name}</Text>
                        </Box>
                    ))
                }

            </Slide>
        </div>
    );
};

export default TopBrands;