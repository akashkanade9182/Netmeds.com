import React ,{useState,useEffect}from 'react'
import "./Cart.css"
import { getCart,EditCart } from '../Redux/action'
import {useDispatch,useSelector} from "react-redux"
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../HomePage/Navbar/Navbar'
import Footer from '../HomePage/Navbar/Footer'


const TotalPrice=(cart,setTotalPrice,setTotalMrp)=>{
  let totalp=0;
  let totalm=0;
  cart.forEach((item)=>{
    totalp=totalp+(item.price*item.quantity);
    totalm=totalm+(item.MRP*item.quantity);

  })
  setTotalMrp(totalm);
  setTotalPrice(totalp);

}


const Cart = () => {
  const dispatch=useDispatch();
  const cart=useSelector(store=>store.cart);
  const[totalMrp,setTotalMrp]=useState("");
  const [count,setCount]=useState(0)
  const[totalprice,setTotalPrice]=useState("");
  const location=useLocation();
  const navigate=useNavigate();
  const cartItem=cart.filter((item)=>item.quantity>0)

  const handleAddProduct=(id,quantity,price,MRP)=>{
    const newquantity=quantity+1;
    dispatch(EditCart(id,{quantity:newquantity}))
    .then(()=>{
        dispatch(getCart)
    
    }).then(()=>{
      TotalPrice(cart,setTotalPrice,setTotalMrp);
    }) 
 
   setCount(prev=>prev+1)
}


const handleRemoveProduct=(id,quantity,price,MRP)=>{
    const newquantity=quantity-1;
    if(newquantity>0){
        dispatch(EditCart(id,{quantity:newquantity}))
        .then(()=>{
            dispatch(getCart);
        }).then(()=>{
          TotalPrice(cart,setTotalPrice,setTotalMrp);
        })
    }
   
  
    setCount(prev=>prev+1)
  
}


  useEffect(()=>{
dispatch(getCart()).then(()=>{
  TotalPrice(cart,setTotalPrice,setTotalMrp);
});
console.log(count)

  },[dispatch,cart.length,location.search,count])

const handleNavigate=()=>{
  navigate("/checkout")
}


  return (
    <div className='cart'>
      <Navbar/>
      <div className='cartbox'>
        <h1>Order Summery</h1>
        <div>
         <div className='cartproductsbox'>
          <h4>PRODUCTS</h4>
         {
          cartItem.map((item)=>(
            <div className='productcard'>
                <div>
                  <h1>{item.title}</h1>
                  <p>Mfr: TNW International Ltd</p>
                  <h2><span>Rs.{item.price}</span><span>{item.MRP}</span></h2>
                  <h4>Delivery between NOVEMBER 17-NOVEMBER 18</h4>
        
                </div>
                <div>
                  <img src={item.image} alt="err" />
                  <div className='countingbox'>
                  <button onClick={()=>handleAddProduct(item.id,item.quantity)}>+</button>
                   <div>{item.quantity}</div>
                 <button onClick={()=>handleRemoveProduct(item.id,item.quantity)}>-</button>
                  </div>
                </div>

              </div>
          ))
         }
         </div>
         <div className='pricesbox'>
              <h4>PRICE DETAILS</h4>
              <div className='promocodebox'>
                <h1>Apply Propmo code</h1>
                <div>
                  <button></button>
                  <div>Apply code</div>
                </div>
                <p><span>Get flat discount! Vouchers applicable in payment options.</span></p>


              </div>
              <div className='totalpricebox'>
                <h1>PAYMENT DETAILS</h1>
                <div className='calculatebox'>
                  <div><span>Mrp total:-</span><span>-{totalMrp}</span></div>
                  <div><span>Netmed Discount:-</span><span>-{totalMrp-totalprice}</span></div>
                  <div><span>Total Amount:-</span><span>-{totalprice}</span></div>
                </div>
                <div className='totalsave'>
                TOTAL SAVINGS RS.{totalMrp-totalprice}
                </div>
                <div className='finalprice'>
                  <div>
                    <p>TOTAL AMOUNT</p>
                    <h1>Rs.{totalprice}</h1>

                  </div>
                  <button onClick={handleNavigate}>PROCEED</button>
          

                </div>

              </div>
              


         </div>

        </div>

      </div>
      <Footer/>
    
      
    </div>
  )
}

export default Cart