import React, { useState } from 'react'
import DeleteIcon from '../../assets/icons/delete.svg'
import DotsIcon from '../../assets/icons/3dots.svg'

import { toast } from 'react-toastify'
import useBlogActions from '../../hooks/useBlogActions'


const CommentDeleteModal = ({blogId, commentId}) => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const {deleteCommentMutation} = useBlogActions(blogId)
  //delete comment 
  const onDeleteComment = () => {
    deleteCommentMutation.mutate({blogId,commentId})
    toast.success('comment delete successfully')
    setToggle(false)
  }
  return (
    <div className="absolute right-0 top-0  py-3">
      <button onClick={handleToggle}>
        <img
          src={DotsIcon}
          alt="3dots of Action"
        />
      </button>

      {toggle && <div className="action-modal-container">
        <button onClick={onDeleteComment} className="action-menu-item hover:text-red-500">
          <img src={DeleteIcon} alt="Delete" />
          Delete
        </button>
      </div>}
    </div>
  )
}

export default CommentDeleteModal 