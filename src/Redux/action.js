//Write the API calling functions here;
import * as types from "./actionTypes"
import axios from "axios"

const getRequest=()=>{
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}
const getCartRequst=()=>{
    return {
        type:types.EDIT_PRODUCT_REQUEST
    }
}





const datasuccess=(val)=>{
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload:val
    }
}
const getFinal=(queryparams)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.get(` https://netmeddata.onrender.com/products`,queryparams).then((r)=>{
       dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
    })
}

const getdata=(queryparams)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.get(` https://netmeddata.onrender.com/products`,queryparams).then((r)=>{
       dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
    })
}
const getUrlData=(queryparams,data,range=10000)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.get(`https://netmeddata.onrender.com/products?category=${data}&&price_lte=${range}`,queryparams).then((r)=>{
       dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
    })
}

const getOneProduct=(id)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.get(`https://netmeddata.onrender.com/products/${id}`).then((r)=>{
       dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
    })
}


export const addOneProduct=(id,params)=>(dispatch)=>{
    dispatch(getRequest());
    return axios.post(`https://netmeddata.onrender.com/products/${id}`,params).then((r)=>{
       dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
    })
}


const getCart=(queryparams)=>(dispatch)=>{

    dispatch(getCartRequst());
    return axios.get(`https://netmeddata.onrender.com/products`,queryparams).then((r)=>{
        dispatch({type:types.EDIT_PRODUCT_SUCCESS,payload:r.data})
     }).catch((e)=>{
         dispatch({type:types.EDIT_PRODUCT_FAILURE,payload:e})
     })
  
}

const  addCart=(payload)=>(dispatch)=>{
     dispatch({type:types.ADD_PRODUCT_REQUEST});
   axios.post(`https://netmeddata.onrender.com`,payload)
     .then((r)=>{
       dispatch({type:types.ADD_PRODUCT_SUCCESS,payload:payload})
     }).catch((e)=>{
        dispatch({type:types.ADD_PRODUCT_FAILURE})
     })
}

const EditCart=(id,payload)=>(dispatch)=>{
    dispatch({type:types.PATCH_PRODUCT_REQUEST});
        return axios.patch(`https://netmeddata.onrender.com/products/${id}`,payload)
        .then((r)=>{
            // dispatch({type:types.PATCH_PRODUCT_SUCCESS,payload:r.data})

            console.log(r.data)

        })
        .catch((e)=>{
            dispatch({type:types.PATCH_PRODUCT_FAILURE,payload:e})
        })
}




/*******************************Admin Data*************************** */






export const Add = (payload)=>(dispatch)=>
{
 
dispatch({type:types.ADD_PRODUCT_REQUEST1})

return axios
.post("https://netmeddata.onrender.com/products",payload)
.then(()=> { return dispatch({type:types.ADD_PRODUCT_SUCCESS1})})
.catch((err)=>{return dispatch({type:types.ADD_PRODUCT_FAILURE1,payload:err})})
}

export const Get = () => (dispatch) =>{
    dispatch({type:types.GET_PRODUCTS_REQUEST1})
    return axios 
    .get("https://netmeddata.onrender.com/products")
    .then((r)=> { return dispatch({type:types.GET_PRODUCTS_SUCCESS1,payload:r.data})})
    .catch((err)=>{return dispatch({type:types.GET_PRODUCTS_FAILURE1,payload:err})})
   }



   export const Del=(id)=>(dispatch)=> {
    dispatch({type:types.DELETE_PRODUCT_REQUEST1})
    return fetch(`https://netmeddata.onrender.com/products/${id}`,{
      method:"DELETE",  
    })
    .then((r)=> { return dispatch({type:types.DELETE_PRODUCT_SUCCESS1})})
    .catch((err)=>{return dispatch({type:types.DELETE_PRODUCT_FAILURE1,payload:err})})
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
export {getdata,getFinal,getOneProduct,getUrlData,addCart,getCart,EditCart};
