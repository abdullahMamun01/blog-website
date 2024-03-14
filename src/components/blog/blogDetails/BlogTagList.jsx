import React from 'react'

const BlogTagList = ({tags}) => {
  const tagList = tags.split(",")
  return (
    <ul className="tags">
      {
        tagList?.map((tag,i) => <li key={i}>{tag}</li>)
      }
  
    </ul>
  )
}

export default BlogTagList