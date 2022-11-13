//Write the API calling functions here;
import * as types from "./actionTypes"
import axios from "axios"
export const Add = (payload)=>(dispatch)=>
{
 
dispatch({type:types.ADD_PRODUCT_REQUEST})

return axios
.post("http://localhost:8080/cart",payload)
.then(()=> { return dispatch({type:types.ADD_PRODUCT_SUCCESS})})
.catch((err)=>{return dispatch({type:types.ADD_PRODUCT_FAILURE,payload:err})})
}



export const Get = () => (dispatch) =>{
 dispatch({type:types.GET_PRODUCTS_REQUEST})
 return axios 
 .get("http://localhost:8080/cart")
 .then((r)=> { return dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})})
 .catch((err)=>{return dispatch({type:types.GET_PRODUCTS_FAILURE,payload:err})})
}


export const Del=(id)=>(dispatch)=> {
    dispatch({type:types.DELETE_PRODUCT_REQUEST})
    return fetch(`http://localhost:8080/cart/${id}`,{
      method:"DELETE",  
    })
    .then((r)=> { return dispatch({type:types.DELETE_PRODUCT_SUCCESS})})
    .catch((err)=>{return dispatch({type:types.DELETE_PRODUCT_FAILURE,payload:err})})
   }

