import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    // const d = useSelector((state)=>{})
    // console.log(d)   
    return (
        <div style={{ display: "flex", padding: "0 10px", position: "relative" }}>
            <div className="navbar-title">
                <Link to='/admin'>
                    Product Dashboard
                </Link>
            </div>

            
            <div style={{ position: "absolute", right: "120px", top: "12px", display: 'flex', gap: '30px' }}>
               <Link to='/add'>   <button  className='navbar-add-product-btn'>
                     Add Product
                </button>
                </Link> 

              
            </div>
            <div style={{ position: "absolute", right: "30px", top: "12px", display: 'flex', gap: '30px' }}>
               <Link to='/'>   <button  className='navbar-log-product-btn '>
                    Logout
                </button>
                </Link> 

              
            </div>
        </div>
        // <>
        // jb</>
    );
};

export default Navbar;
