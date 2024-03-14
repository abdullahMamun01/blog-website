import React from 'react'
import Avatar from '../avatar/Avatar'
import dateFormate from '../../utils/dateFormate'
import { Link } from 'react-router-dom'

const YourBlog = ({ id, title, content, author, createdAt, likes,thumbnail }) => {
  return (
    <div class="blog-card w-full">
      <img class="blog-thumb" src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${thumbnail}`} alt="" />
      <div class="mt-2">
        <h3 class="text-slate-300 text-xl lg:text-2xl text-left">{title}</h3>
        <p class="mb-6 text-base text-slate-500 mt-1 line-clamp-3 text-left">
          {content}
        </p>

        <div class="flex justify-between items-center">
          <div class="flex items-center capitalize space-x-2">
            <div class="avater-img bg-indigo-600 text-white">
              <span class="">S</span>
            </div>

            <div>
              <h5 class="text-slate-500 text-sm">Saad Hasan</h5>
              <div class="flex items-center text-xs text-slate-700">
                <span>June 28, 2018</span>
              </div>
            </div>
          </div>

          <div class="text-sm px-2 py-1 text-slate-700">
            <span>100 Likes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourBlog