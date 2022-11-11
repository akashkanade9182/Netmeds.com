import {useState,useEffect} from "react"
import{Routes,Route,Link} from "react-router-dom"
import Wellness from "./Wellness"
import CategoryPage from "./CategoryPage"
import PersonalCare from "./PersonalCare"
import Fitness from "./Fitness"
import Treatment from "./Treatment"



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<CategoryPage/>}></Route>
        <Route path="/personalcare" element={<PersonalCare/>}></Route>

        <Route path="/fitness" element={<Fitness/>}></Route>
        <Route path="/treatment" element={<Treatment/>}></Route>

    </Routes>
  )
}

export default AllRoutes