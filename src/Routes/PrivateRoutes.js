import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user && user.uid ){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;