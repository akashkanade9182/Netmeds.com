import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Account from "../Pages/Account";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CategoryPage from "../Page/CategoryPage"
import SingalPage from "../Page/SingalPage"
import PersonalCare from "../Page/PersonalCare"
import Fitness from "../Page/Fitness"
import Treatment from "../Page/Treatment"
import Cart from "../Page/Cart"
import Checkout from "../Page/Checkout"

import { Beauty } from "../Page/Beauty";
import { LabTest } from "../Page/LabTest";
import AdminLogin from "../Page/AdminLogin";
import { Admin } from "../Page/Admin";
import AddProduct from "../Page/AddProduct";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categorypage" element={<CategoryPage/>}></Route>
        <Route path="/personalcare" element={<PersonalCare/>}></Route>

      <Route path="/fitness" element={<Fitness/>}></Route>
      <Route path="/treatment" element={<Treatment/>}></Route>
      <Route path="/personalcare/:id" element={<SingalPage/>}></Route>
      <Route path="/fitness/:id" element={<SingalPage/>}></Route>
      <Route path="/treatment/:id" element={<SingalPage/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>    
      <Route path="/checkout" element={<Checkout/>}></Route> 

        <Route path="/beauty" element={<Beauty />}></Route>
              <Route path="/labtest" element={<LabTest/>}></Route>
              <Route path="/upload" element={<Admin/>}></Route>
              <Route path="/adminlogin" element={<AdminLogin/>}></Route>
              <Route path="/addproduct" element={<AddProduct/>}></Route>  
        </Routes>
      

    </div>
  );
};

export default AllRoutes;
