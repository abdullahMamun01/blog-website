import React from 'react'

const BlogBanner = ({thumbnail}) => {
  return (
    <img className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96" src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${thumbnail}`} alt="" />

  )
}

export default BlogBanner