import { Slide } from 'react-slideshow-image';
import { Image,Box } from '@chakra-ui/react';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1667832066_Web_Home_Bannercabbb.jpg',
  },
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1667834207_Home-Page-Title-Banner-1680x320pxl.jpg',
  },
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362102_Home_Bannernmsnew.jpg',
  },
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362146_Home_Bannernms20.jpg',
  },
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1666355540_Home_Bannercold.jpg',
  },
];

const Slideshow = () => {
    return (
      <div style={{width:"100%",margin:"auto"}}>
        <Box width="90%" margin="auto">
            <Slide>
            {
              slideImages.map((item)=>(
                <Box key={Math.random()} >
                  <Image width="100%" src={item.url}/>
                </Box>
              ))
            }
            </Slide>

        </Box>
      </div>
    )
}

export default Slideshow