import React from 'react'

import CommentIcon from '../../../assets/icons/comment.svg'
import { useQueryClient } from '@tanstack/react-query'
import useAuthContext from '../../../hooks/useAuthContext'
import LikeIcon from '../../icon/LikeIcon'
import useBlogActions from '../../../hooks/useBlogActions'
import FavouriteIcon from '../../icon/FavouriteIcon'

const FloatingAction = ({blogId}) => {
    const queryClient = useQueryClient()

    const {toggleLikeMutation,toggleFavouriteMutation} = useBlogActions(blogId)
    const {auth} = useAuthContext() 

    //single blog data
    const queryKey  = ['blog' , {id:blogId}]
    const  singleBlogQuery =  queryClient.getQueryData(queryKey)
   
    const singleBlogLikes  = singleBlogQuery.likes
    const findMyLikes = singleBlogLikes.find(like => like.id === auth?.user?.id)
    //toggle like post
    const handleToggleLike = () => {
      
        toggleLikeMutation.mutate(blogId)
    }


    //toggle favourite post
    const handleToggleFav = () => {

      toggleFavouriteMutation.mutate()
  
  }

  return (
    <div class="floating-action">
      <ul class="floating-action-menus">
        <li className=''>
          <button onClick={handleToggleLike} className=''>
                <LikeIcon isLiked={findMyLikes}/>
            </button>
          <span>{singleBlogLikes.length}</span>
        </li>

        <li>
          <button onClick={handleToggleFav}>
              <FavouriteIcon isFavourite={singleBlogQuery?.isFavourite}  /> 
          </button>
        </li>
        <a href="#comments">
          <li>
            <img src={CommentIcon} alt="Comments" />
            <span>{singleBlogQuery?.comments?.length}</span>
          </li>
        </a>
      </ul>
    </div>
  )
}

export default FloatingAction