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

const ExploreBeauty = () => {
    const images = [
        {
            image: "https://www.netmeds.com/images/category/3505/thumb/facial_kits_1.jpg",
            name: "Facial Kits"
        },
        {
            image: "https://www.netmeds.com/images/category/v1/560/thumb/lip_care_2.jpg",
            name: "Lip Care"
        },
        {
            image: "https://www.netmeds.com/images/category/v1/525/thumb/body_care_1.jpg",
            name: "Body Care"
        },
        {
            image: "https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg",
            name: "Hair Care"
        },
        {
            image: "https://www.netmeds.com/images/category/v1/3784/thumb/skin_care_1.jpg",
            name: "Skin Care"
        },
    ];
    return (
        <Box backgroundColor="#ee4180">
            <Box style={{ width: "90%", margin: "auto" }}>
                <Text fontSize='4xl'>Explore Beauty</Text>
                <Box>

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

                </Box>
            </Box>

        </Box>
    );
};

export default ExploreBeauty;