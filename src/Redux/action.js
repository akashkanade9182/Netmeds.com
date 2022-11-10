//Write the API calling functions here;
import * as types from "./actionTypes"
import axios from "axios"

const datasuccess=(val)=>{
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload:val
    }
}
const getdata=(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST});
    return axios.get(` http://localhost:8080/products`)
    .then((r)=>{
      dispatch(datasuccess(r.data))
    })
    .catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE})
    })
}


const  addProduct=(payload)=>(dispatch)=>{
     dispatch({type:types.ADD_PRODUCT_REQUEST});
     return axios({
        method:"post",
        url:`  http://localhost:8080/products`,
        data:payload
     })
     .then((r)=>{
       dispatch({type:types.ADD_PRODUCT_SUCCESS,payload:payload})
     }).catch((e)=>{
        dispatch({type:types.ADD_PRODUCT_FAILURE})
     })
}


const deletedata=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_PRODUCT_REQUEST})
    return axios.delete(`http://localhost:8080/products/${id}`)
    .then((r)=>{
        dispatch({type:types.DELETE_PRODUCT_SUCCESS})
        .console.log(r.data) 

        
    })
    .catch((e)=>{
        dispatch({type:types.DELETE_PRODUCT_FAILURE})
    })
   
  
}
export {getdata,addProduct,deletedata};
