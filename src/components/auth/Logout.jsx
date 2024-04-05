import React from 'react'
import useAuthContext from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {setAuth} = useAuthContext()
    const navigate = useNavigate()
    const handleLogOut  = () => {
        setAuth({})
        navigate('/login')
    }
  return (
    <button className="action-menu-item hover:text-red-500" onClick={handleLogOut}>Logout</button>
  )
}

export default Logout