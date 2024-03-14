import React, { useContext } from 'react'
import { BlogContext } from '../contexts'

const useBlogContext = () => {
    const blogContext = useContext(BlogContext)
  return  blogContext

}

export default useBlogContext