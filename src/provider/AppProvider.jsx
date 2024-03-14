import React from 'react'
import BlogProvider from './BlogProvider'

const AppProvider = ({children}) => {
  return (
    <BlogProvider>
        {children}
    </BlogProvider>
  )
}

export default AppProvider