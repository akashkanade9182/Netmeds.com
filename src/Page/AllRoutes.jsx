import {useState,useEffect} from "react"
import{Routes,Route,Link} from "react-router-dom"
import Wellness from "./Wellness"
import CategoryPage from "./CategoryPage"
import PersonalCare from "./PersonalCare"
import Fitness from "./Fitness"
import Treatment from "./Treatment"
import PrivateRoute from "./PrivateRoutes"
import SingalPage from "./SingalPage"

import { Beauty } from "./Beauty"
import { LabTest } from "./LabTest"
import AdminLogin from "./AdminLogin"
import { Admin } from "./Admin"
import AddProduct from "./AddProduct"


const AllRoutes = () => {
  return (
    <Routes>
              <Route path="/" element={<CategoryPage/>}></Route>
              <Route path="/personalcare" element={<PersonalCare/>}></Route>
              <Route path="/fitness" element={<Fitness/>}></Route>
              <Route path="/treatment" element={<Treatment/>}></Route>
              <Route path="/personalcare/:id" element={<SingalPage/>}></Route>
              <Route path="/fitness/:id" element={<SingalPage/>}></Route>
              <Route path="/treatment/:id" element={<SingalPage/>}></Route>

              <Route path="/beauty" element={<Beauty />}></Route>
              <Route path="/labtest" element={<LabTest/>}></Route>
              <Route path="/upload" element={<Admin/>}></Route>
              <Route path="/adminlogin" element={<AdminLogin/>}></Route>
              <Route path="/addproduct" element={<AddProduct/>}></Route>







        {/* <Route path="/" element={<CategoryPage/>}></Route> */}
        {/* <Route path="/personalcare" element={<PersonalCare/>}></Route>

        <Route path="/fitness" element={<Fitness/>}></Route>
        <Route path="/treatment" element={<Treatment/>}></Route>
        <Route path="/personalcare/:id" element={<PersonalCare/>}></Route>
        <Route path="/fitness/:id" element={<Fitness/>}></Route>
        <Route path="/treatment/:id" element={<Treatment/>}></Route> */}

    </Routes>
  )
}

export default AllRoutes