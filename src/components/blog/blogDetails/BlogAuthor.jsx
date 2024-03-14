import React from 'react'
import Avatar from '../../avatar/Avatar'

const BlogAuthor = ({ author }) => {
  const { firstName, lastName } = author
  const fullName = firstName + ' ' + lastName
  return (
    <div className="flex items-center capitalize space-x-2">
      <Avatar author={author} />
      <h5 className="text-slate-500 text-sm"> {fullName}</h5>
    </div>
  )
}

export default BlogAuthor