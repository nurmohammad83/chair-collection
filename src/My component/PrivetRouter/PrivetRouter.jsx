import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProductContext } from '../AuthContext';

const PrivetRouter = ({children}) => {
    const {user,loading}= useContext(ProductContext)
    const location = useLocation()

    if(loading){
        <div>Loading</div>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRouter;