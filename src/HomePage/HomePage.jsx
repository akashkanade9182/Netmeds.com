import Footer from "./Navbar/Footer"
import HealthConcern from "./Navbar/HealthConcerns"
import HealthLibrary from "./Navbar/HealthLibrary"
import LimitedTimeDeals from "./Navbar/LimitedDeals"
import Navbar from "./Navbar/Navbar"
import Offer from "./Navbar/Offer"
import PaymentPartners from "./Navbar/PaymentPartners"
// import PaymentPartners from "./Navbar/PaymentPartners"
import Slideshow from "./Navbar/SlideShow"
import Trending from "./Navbar/Trending"

const HomePage = ()=>{


    return (
        <div>
            <Navbar/>
            <Slideshow/>
            <Offer/>
            <PaymentPartners/>
            <Trending/>
            <LimitedTimeDeals/>
            <HealthConcern/>
            <HealthLibrary/>
            <Footer/>
            
        </div>
    )
}
export default HomePage