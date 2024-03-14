import React, { useContext } from 'react'
import { BlogContext } from '../contexts'

const useBlogContext = () => {
  return  useContext(BlogContext)

}

export default useBlogContext