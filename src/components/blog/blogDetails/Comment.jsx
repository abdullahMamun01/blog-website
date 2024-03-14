import React from 'react'
import Avatar from '../../avatar/Avatar'
import CommentDeleteModal from '../../modal/CommentDeleteModal '
import useAuthContext from '../../../hooks/useAuthContext'

const Comment = ({ content,id, author,blogId }) => {

  const { firstName, lastName } = author
  const fullName = firstName + " " + lastName
  const {auth} = useAuthContext()
  const isShowing = author?.id === auth?.user?.id
  
  return (
    <div className="flex items-start space-x-4 my-8 relative">
     {isShowing &&  <CommentDeleteModal blogId={blogId} commentId={id}/>}
      <Avatar author={author} />
      <div className="w-full">
        <h5 className="text-slate -500 font-bold">{fullName}</h5>
        <p className="text-slate-300">
          {content}
        </p>
      </div>
    </div>
  )
}

export default Comment