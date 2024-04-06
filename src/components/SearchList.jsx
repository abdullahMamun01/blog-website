import React from 'react'
import { Link } from 'react-router-dom'

const SearchList = ({ id, title, thumbnail, content }) => {
    return (
        <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain ">
            <Link to={`/blog/${id}`}>
                {/* search list */}
                <div className="flex gap-6 py-2">
                    <img className="h-28 object-contain" src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${thumbnail}`} alt="" />
                    <div className="mt-2">
                        <h3 className="text-slate-300 text-xl font-bold line-clamp-2">{title}</h3>

                        <p className="mb-6 text-sm text-slate-500 mt-1">
                            {content.slice(0, 200)}...
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SearchList