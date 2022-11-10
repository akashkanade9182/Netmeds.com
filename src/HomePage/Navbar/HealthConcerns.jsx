import { Slide } from "react-slideshow-image"
import { Heading, Text } from "@chakra-ui/react";

const responsiveSettings = [
    {
        breakpoint: 400,
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
        breakpoint: 400,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }
];

const HealthConcern = () =>{


    return (
        <div style={{width:"90%",margin:"auto"}}>
            <Heading textAlign={"left"}>Health Concerns</Heading>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
                <div>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1" alt="" />
                    <Text>Lung Care</Text>
                </div>
                <div>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1" alt="" />
                    <Text>Weight Care</Text>
                </div>
                <div>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1" alt="" />
                    <Text>Women's Care</Text>
                </div>
                <div>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1" alt="" />
                    <Text>Bone And Joint Pain</Text>
                </div>
                <div>
                    <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg?v=1" alt="" />
                    <Text>Cold And Fever</Text>
                </div>
            </Slide>
        </div>
    )
}

export default HealthConcern