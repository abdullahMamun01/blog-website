import React, { useReducer } from 'react'
import { BlogContext } from '../contexts'
import { blogReducer, initialState } from '../reducers/BlogReducers';


const BlogProvider = ({children}) => {
  
    
    const [state,dispatch] = useReducer(blogReducer , initialState)

  return <BlogContext.Provider value={{state,dispatch}}>
    {children}
  </BlogContext.Provider>
}

export default BlogProvider