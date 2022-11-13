// import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage/HomePage";
import "./App.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";

import Account from "./Pages/Account";
import { Beauty } from './BeaytyPage/Beauty';
import { LabTest } from './LabTest/LabTest';
import { Admin } from './Admin/Admin';
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/beauty' element={<Beauty/>}  />
        <Route path='/health-packages' element={<LabTest/>}  />
      </Routes> */}
      <Admin/>
    </>

  );
}

export default App;
