import React,{useState} from 'react'
import{Navigate} from "react-router-dom"


const PrivateRoute = () => {
    const[isAuth,setisAuth]=useState(true);
    if(!isAuth){
        <Navigate to="/login" />
    }

}

export default PrivateRoute