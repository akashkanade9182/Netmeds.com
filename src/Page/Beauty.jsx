import React from 'react'
import { BeautyComponent } from "./BeautyComponent"
import Footer from '../HomePage/Navbar/Footer'
import Navbar from '../HomePage/Navbar/Navbar'

export const Beauty = () => {
    return (
        <div>
            <Navbar/>
            <BeautyComponent/>
            <Footer/>
        </div>
    )
}
