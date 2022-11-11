import * as types from "./actionTypes"


const initialState = {
    products: [],
    cart:[],
    isLoading: false,
    isError: false,
  };
  
export const reducer = (state = initialState,action) => {
  const{type,payload}=action;
  switch(type)
  { case types.GET_PRODUCTS_REQUEST:
    return {
      ...state,isLoading:true
    }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,isLoading:false,
        isError:false,
        products:payload
      }
      case types.GET_PRODUCTS_FAILURE:
        return {
          ...state,isLoading:false,
          products:[],
          isError:true
        }
       case types.ADD_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading:true
        }
        case types.ADD_PRODUCT_SUCCESS:
          return {
            ...state,
            isLoading:false,
            cart:[...state.cart,payload]
          }
          case types.ADD_PRODUCT_FAILURE:
            return {
              ...state,
              isError:true,
             
            }
         
          
    default:return state;
  }

};

  
