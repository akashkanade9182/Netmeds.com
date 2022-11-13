import { reducer } from "../src/Redux/reducer";
import {legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
export const store   =legacy_createStore(reducer,applyMiddleware(thunk))
