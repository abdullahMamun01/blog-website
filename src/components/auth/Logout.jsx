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
    <button onClick={handleLogOut}>Logout</button>
  )
}

export default Logout