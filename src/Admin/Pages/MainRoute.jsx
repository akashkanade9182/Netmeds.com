import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import ProductPage from './ProductPage';

const MainRoute= () => {
    return (
        <Routes>
            <Route path="/" element={<ProductPage/>} />
            <Route path="/add" element={<AddProduct />} />
        </Routes>
    );
}

export default MainRoute