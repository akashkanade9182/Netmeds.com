// NOTE: use this store variable to create a store.
import { legacy_createStore, applyMiddleware, compose,combineReducers} from "redux";
import {reducer } from "./reducer"
// import {reducer as AuthReducer} from "./AuthReducer/reducer"
import thunk from "redux-thunk"

// const rootReducer=combineReducers({AppReducer,AuthReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
    );
    export default store;

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks

