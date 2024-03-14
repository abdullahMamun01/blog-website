import React from 'react'
import { Link } from 'react-router-dom'
import ProfileLink from '../../common/ProfileLink'

const PopularBlogCard = ({ title, id, author, likes }) => {
    const { firstName, lastName } = author
    const fullName = firstName + " " + lastName
  
    return (

        <li>
            <Link to={`/blog/${id}`} >
                <h3
                    className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
                >
                    {title}
                </h3>
            </Link>
            <p className="text-slate-600 text-sm">
                
                <ProfileLink author={author}>
                by  {fullName}
                </ProfileLink>
                <span>·</span> {likes.length} Likes
            </p>
        </li>


    )
}

export default PopularBlogCard