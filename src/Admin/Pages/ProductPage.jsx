import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { Get } from '../../Redux/action'
import './productpage.css'

const ProductPage = () => {
    const products = useSelector((state)=>state.products)
    const isLoading = useSelector((state)=>state.isLoading)
const dispatch = useDispatch();
const location = useLocation();
useEffect(()=>{
    if(location||products.length===0)
    {
        dispatch(Get())
    }
},[location.search]);
console.log("jn",products)
{if(isLoading){return <div>Loading...</div>} }

    return (
        <div >
            <div className='product-cards'>
                <table className='table table-striped'>
                    <thead >
                        <tr className='bg-secondary text-white'>
                        <th scope='col'>#</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Image</th>
                        <th scope='col'>SubCateg</th>
                        <th scope='col'>Brand</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>MRP</th>
                        <th scope='col'>Quatity</th>
                        <th scope='col'>Delete</th>
                        </tr>
                      
                    </thead>
             <tbody>
            {products.map((item)=>
                {
                    return (<tr><ProductCard key={item.id} item={item}/></tr>)
                   
                })}
                </tbody>
                  </table>
            </div>
        </div>
    );
}

export default ProductPage