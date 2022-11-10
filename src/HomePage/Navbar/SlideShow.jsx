import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1667832066_Web_Home_Bannercabbb.jpg',
    caption: ''
  },
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1667834207_Home-Page-Title-Banner-1680x320pxl.jpg',
    caption: ''
  },
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362102_Home_Bannernmsnew.jpg',
    caption: ''
  },
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362146_Home_Bannernms20.jpg',
    caption: ''
  },
  {
    url: 'https://www.netmeds.com/images/cms/aw_rbslider/slides/1666355540_Home_Bannercold.jpg',
    caption: ''
  },
];

const Slideshow = () => {
    return (
      <div style={{width:"100%",margin:"auto"}}>
          <div className="slide-container" style={{width :"100%",margin:"auto", height:"320px"}}>
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div style={{'backgroundImage': `url(${slideImage.url})`,height:"300px", width:"100%"}}>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))} 
            </Slide>
          </div>
      </div>
    )
}

export default Slideshow