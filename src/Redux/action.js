//Write the API calling functions here;
import * as types from "./actionTypes"
import axios from "axios"

const getRequest=()=>{
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}





const datasuccess=(val)=>{
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload:val
    }
}
const getdata=(queryparams)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.get(`  http://localhost:8081/products`,queryparams).then((r)=>{
       dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
    })
}
const getUrlData=(queryparams,data,range=10000)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.get(`http://localhost:8081/products?category=${data}&&price_lte=${range}`,queryparams).then((r)=>{
       dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
    })
}

const getOneProduct=(id)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.get(`http://localhost:8081/products/${id}`).then((r)=>{
       dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
    })
}

const  addProduct=(payload)=>(dispatch)=>{
     dispatch({type:types.ADD_PRODUCT_REQUEST});
   return axios.post(`http://localhost:8080/cart`,payload)
     .then((r)=>{
       dispatch({type:types.ADD_PRODUCT_SUCCESS,payload:payload})
     }).catch((e)=>{
        dispatch({type:types.ADD_PRODUCT_FAILURE})
     })
}


const deletedata=(id)=>(dispatch)=>{
    // dispatch({type:types.DELETE_PRODUCT_REQUEST})
    // return axios.delete(`http://localhost:8080/products/${id}`)
    // .then((r)=>{
    //     dispatch({type:types.DELETE_PRODUCT_SUCCESS})
    //     .console.log(r.data) 

        
    // })
    // .catch((e)=>{
    //     dispatch({type:types.DELETE_PRODUCT_FAILURE})
    // })
   
  
}
export {getdata,getOneProduct,getUrlData,addProduct,deletedata};
