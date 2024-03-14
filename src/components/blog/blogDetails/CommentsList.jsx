import React from 'react'
import Comment from './Comment'
import CommentAction from './CommentAction'
import useAuthContext from '../../../hooks/useAuthContext'
import { Link } from 'react-router-dom'

const CommentList = ({ comments,id }) => {
  const { auth } = useAuthContext()

  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">Comments ({comments.length})</h2>
        {auth?.user ? <CommentAction id={id}  /> : <>
          <p className='text-red-600'>Please log in to view and leave comments.
            <span className='text-sky-600 mx-3'>
              <Link to="/login">Login</Link>
            </span>
          </p> </>}
        {/* comments */}
        {
          comments?.slice().reverse().map(comment => (<Comment key={comment.id} {...comment} blogId={id} />))
        }
      
      </div>
    </section>
  )
}

export default CommentList