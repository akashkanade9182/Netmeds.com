import * as types from "./actionTypes"
const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    data:[]
  };
  
export const reducer = (state = initialState,action) => {
const {type,payload} = action;
switch(type)
{ case types.ADD_PRODUCT_REQUEST:return {...state,isLoading:true}
  case types.ADD_PRODUCT_SUCCESS:return {...state,isLoading:false}
  case types.ADD_PRODUCT_FAILURE:return {...state,isLoading:false,products:[],isError:true}
  case types.GET_PRODUCTS_REQUEST:return {...state,isLoading:true}
  case types.GET_PRODUCTS_SUCCESS:return {...state,isLoading:false,products:payload}
  case types.GET_PRODUCTS_FAILURE:return {...state,isLoading:false,products:[],isError:true}
  case types.DELETE_PRODUCT_REQUEST:return {...state,isLoading:true}
  case types.DELETE_PRODUCT_SUCCESS:return {...state,isLoading:false}
  case types.DELETE_PRODUCT_FAILURE:return {...state,isLoading:false,products:[],isError:true}
 
  // case types.DELETE_PRODUCT_FAILURE:return {...state,isLoading:false,products:[],isError:true}

default :return state
}
};
  