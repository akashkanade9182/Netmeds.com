import React from 'react'
import '../Style/Beauty.css';
export const Slider = () => {
    return (
        <>
               <div id="carouselExampleIndicators"  className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.ibb.co/xhN1RPX/slideshow1.jpg" alt="Los Angeles" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/WKGw6mR/slideshow2.jpg" alt="Chicago" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/3CZFh38/slideshow3.jpg" alt="New York" className="d-block w-100"/>
                        </div>
                    </div>
                    <div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
               
                
           
        
    </>
    )
}
