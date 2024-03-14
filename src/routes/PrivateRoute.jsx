import React from 'react'
import useAuthContext from '../hooks/useAuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { auth } = useAuthContext()
    const location = useLocation()
    if(auth?.accessToken) {
        return <Outlet/>
    }


    return <Navigate to='/login' state={{from: location}} replace />
}

export default PrivateRoute