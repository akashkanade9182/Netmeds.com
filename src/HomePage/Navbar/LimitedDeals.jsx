
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Countdown from 'react-countdown';



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



const LimitedTimeDeals = ()=>{

    const images = [
        "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558706_TrueHB_Mini_banner_web.jpg",
        "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667462507_Web_Home_Page_Mini_Banner-436X224__.png",
        "https://www.netmeds.com/images/cms/aw_rbslider/slides/1666259889_Truuth_web.jpg",
        "https://www.netmeds.com/images/cms/aw_rbslider/slides/1665742857_Dabur_Home.jpg",
        "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558258_Inlife_mini_banners_web.jpg",
        "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667558622_Ambitech_Mini_banner_web.jpg",
        "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667559169_Mendwell_mini_web.jpg"

    ];



    return (
        <div style={{background: "rgb(35,173,176)",color:"#ffffff"}}>
            <div style={{display:"flex",width:"90%",margin:"auto",justifyContent:"space-between"}}>
                <div style={{textAlign:"left"}}>
                    <h1>Limited Time Deals</h1>
                    <p style={{display:"flex", alignItems:"center"}}> <img src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/time.png" alt=""/> <Countdown date={Date.now() + 10000000} /> remaining</p>
                </div>
                <div>
                    <button style={{background: "rgb(35,173,176)",color:"#ffffff",border:"none",marginTop:"10px"}}>View All {">"}</button>
                </div>
            </div>
            <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings} style={{objectFit:"fill"}}>
                {/* children here */}
                <div className="each-slide-effect" style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundSize: "cover",objectFit:"fill"}}>
                    <div style={{ 'backgroundImage': `url(${images[0]})` ,height:"200px",width:"90%",margin:"10px",objectFit:"fill"}}>
                        {/* <span>Slide 1</span> */}
                    </div>
                </div>
                <div className="each-slide-effect" style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundSize: "cover",objectFit:"fill"}}>
                    <div style={{ 'backgroundImage': `url(${images[1]})` ,height:"200px",width:"90%",margin:"10px",objectFit:"fill" }}>
                        {/* <span>Slide 2</span> */}
                    </div>
                </div>
                <div className="each-slide-effect" style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundSize: "cover",objectFit:"fill"}}>
                    <div style={{ 'backgroundImage': `url(${images[2]})` ,height:"200px",width:"90%" ,margin:"10px" ,objectFit:"fill"}}>
                        {/* <span>Slide 3</span> */}
                    </div>
                </div>
                <div className="each-slide-effect" style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundSize: "cover",objectFit:"fill"}}>
                    <div style={{ 'backgroundImage': `url(${images[3]})` ,height:"200px",width:"90%" ,margin:"10px" ,objectFit:"fill"}}>
                        {/* <span>Slide 3</span> */}
                    </div>
                </div>
                <div className="each-slide-effect" style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundSize: "cover",objectFit:"fill"}}>
                    <div style={{ 'backgroundImage': `url(${images[4]})` ,height:"200px",width:"90%" ,margin:"10px" ,objectFit:"fill"}}>
                        {/* <span>Slide 3</span> */}
                    </div>
                </div>
                <div className="each-slide-effect" style={{display: "flex",alignItems: "center",justifyContent: "center",backgroundSize: "cover",objectFit:"fill"}}>
                    <div style={{ 'backgroundImage': `url(${images[5]})` ,height:"200px",width:"90%" ,margin:"10px" ,objectFit:"fill"}}>
                        {/* <span>Slide 3</span> */}
                    </div>
                </div>
                
            </Slide>
            </div>
        </div>
    )
}

export default LimitedTimeDeals