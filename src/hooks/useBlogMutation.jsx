import { useMutation, useQueryClient } from '@tanstack/react-query'

import useAxios from './useAxios'
import useAuthContext from './useAuthContext'
import { useLocation } from 'react-router-dom'

const useBlogMutation = () => {
    const {axiosPrivate} = useAxios()
    const queryClient = useQueryClient()
    const location = useLocation()
    //auth user
    const {auth} = useAuthContext()
    const queryKey = ['user' , {id:auth.user.id}]

    const createBlogMutation = useMutation ({
        mutationFn : async (blogData) => {
            const response = await axiosPrivate.post('/blogs' , blogData ,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
            return response.data
        },
        onSuccess :  ()=> {
             queryClient.invalidateQueries({queryKey : ['blogs']})
        }
    })

    const updateBlogMutation =  useMutation ({
        mutationFn : async (blogData) => {
            const {id , ...formData} = blogData
            const response = await axiosPrivate.patch(`/blogs/${id}` ,formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            return response.data
        }
    })

    const deleteBlogMutation = useMutation ({
        mutationFn : async (blogId) => {
         
            const response = await axiosPrivate.delete(`/blogs/${blogId}`)
            return response.data
        }
    })


   

  return {
    createBlogMutation ,
    updateBlogMutation ,
    deleteBlogMutation
  }
}

export default useBlogMutation