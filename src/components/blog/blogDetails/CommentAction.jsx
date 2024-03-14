import React, { useState } from 'react'

import Comment from './Comment'
import useAuthContext from '../../../hooks/useAuthContext'
import FloatingAction from './FloatingAction'
import useBlogActions from '../../../hooks/useBlogActions'


const CommentAction = ({ id }) => {
    const { addCommentMutation } = useBlogActions(id)

    const { auth } = useAuthContext()

    const { variables, isPending, mutate } = addCommentMutation
    const [comment, setComment] = useState("")

    const handleAddComment = () => {
        setComment("")
        mutate({
            id,
            content: comment
        })

    }



    return (
        <div>
            <div className="flex items -center space-x-4">
                <div className="avater-img bg-indigo-600 text-white">
                    <span className="">S</span>
                </div>
                <div className="w-full">
                    <textarea
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                        placeholder="Write a comment"
                        value={comment}
                    ></textarea>
                    <div className="flex justify-end mt-4">
                        <button
                            disabled={isPending}
                            onClick={handleAddComment}
                            className={`bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200 ${isPending && 'opacity-20'}`}
                        >
                            Comment
                        </button>
                    </div>
                </div>

            </div>
            {isPending &&
                <div className='opacity-40'>
                    <Comment content={variables?.content} author={auth?.user} />
                </div>
            }

            <FloatingAction blogId={id}/>
        </div>
    )
}

export default CommentAction