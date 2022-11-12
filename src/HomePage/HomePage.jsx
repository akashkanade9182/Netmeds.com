import BrandsDay from "./Navbar/BrandsDay"
import ExploreBeauty from "./Navbar/ExpolreBeauty"
import Footer from "./Navbar/Footer"
import HealthConcern from "./Navbar/HealthConcerns"
import HealthLibrary from "./Navbar/HealthLibrary"
import LimitedTimeDeals from "./Navbar/LimitedDeals"
import Navbar from "./Navbar/Navbar"
import Offer from "./Navbar/Offer"
import PaymentPartners from "./Navbar/PaymentPartners"
// import PaymentPartners from "./Navbar/PaymentPartners"
import Slideshow from "./Navbar/SlideShow"
import TopBrands from "./Navbar/TopBrands"
import Trending from "./Navbar/Trending"

const HomePage = ()=>{


    return (
        <div style={{backgroundColor:"rgb(242,246,250)", display:"flex", flexDirection:"column" ,gap:"20px"}}>
            <Navbar/>
            <Slideshow/>
            <Offer/>
            <PaymentPartners/>
            <Trending/>
            <LimitedTimeDeals/>
            <BrandsDay/>
            <TopBrands/>
            <ExploreBeauty/>
            <HealthConcern/>
            <HealthLibrary/>
            <Footer/>
            
        </div>
    )
}
export default HomePage