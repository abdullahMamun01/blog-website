import React from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext'

const ProfileLink = ({children,author}) => {
    const {auth} = useAuthContext()
    const path = author?.id === auth?.user?.id ? '/me' : `/profile/${author?.id}`
    
  return (
    <Link to={path}>
     {children}
    </Link>
  )
}

export default ProfileLink