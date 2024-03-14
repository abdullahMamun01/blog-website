import React from 'react'
import { Link } from 'react-router-dom'

const FavouriteBlogCard = ({ title ,id,tags}) => {
    const tagList = tags.split(",").reduce((acc, tag) => acc + "#" + tag + ",", "")

    return (


        <li>
            <Link to={`/blog/${id}`}>
            <h3
                className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
            >
                {title}
            </h3>
            <p className="text-slate-600 text-sm">
              
                {tagList}
            </p>
            </Link>
        </li>


    )
}

export default FavouriteBlogCard