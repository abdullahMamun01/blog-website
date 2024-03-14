import React from 'react'

const BlogDescription = ({description}) => {
  return (
    <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
      {description}
    </div>
  )
}

export default BlogDescription