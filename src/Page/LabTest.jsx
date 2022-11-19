import React from 'react'
import Footer from '../HomePage/Navbar/Footer'
import Navbar from '../HomePage/Navbar/Navbar'
import { LabTestComponent } from './LabTestComponent'

export const LabTest = () => {
    return (
        <>
          <div className='bg-light'>
          <Navbar/>
          <LabTestComponent/>
          <Footer/>
          </div>
        </>
    )
}
