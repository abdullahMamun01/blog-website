import React from 'react'
import useAxios from './useAxios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useBlogActions = (id) => {
  const {axiosPrivate} = useAxios()
  const queryClient = useQueryClient()
  
  const queryKey = ['blog', { id }]
  //post comment login
    const addCommentMutation = useMutation({
      mutationFn : async (commentInfo) => {
        const {id,...comment} = commentInfo
        const response  = await axiosPrivate.post(`blogs/${id}/comment` , comment)
        return response.data
      } ,
      onSuccess :  (data) =>{
        queryClient.setQueryData( queryKey , data)
      },

      onMutate : async () => {
       await queryClient.cancelQueries({queryKey})
        const prevData  = queryClient.getQueryData(queryKey)

        return {prevData}
      },

      onSettled : () => queryClient.invalidateQueries({queryKey: [queryKey] }),
      onError : (error , variables , context) => {

        queryClient.setQueryData(['blog' , {id}] , context.prevData)
      }
      
    })
    //delete comment logic
    const deleteCommentMutation = useMutation({
      mutationFn : async (commentInfo) => {
        const {blogId,commentId} = commentInfo
        const response  = await axiosPrivate.delete(`blogs/${blogId}/comment/${commentId}`)
        return response.data
      } ,
      onSuccess : (data) => {
 
        queryClient.setQueriesData(queryKey,data  )
      }
    })

    //toggle like 
    const toggleLikeMutation = useMutation({
      mutationFn : async () => {
        const response = await axiosPrivate.post(`/blogs/${id}/like`)
        return response.data
      },
      onSuccess : (data) => {
        
        queryClient.setQueryData(queryKey , (old) => old ? {...old , likes: data.likes} : old)

      }
    })

    //toggle favourite
    const toggleFavouriteMutation = useMutation({
      mutationFn : async () => {
        const response = await axiosPrivate.patch(`/blogs/${id}/favourite`)
        return response.data
      },
      onSuccess : (data) => {

        queryClient.setQueryData(queryKey , data)
      }
    })

  return {
    addCommentMutation ,
    deleteCommentMutation,
    toggleLikeMutation,
    toggleFavouriteMutation

  }
}

export default useBlogActions