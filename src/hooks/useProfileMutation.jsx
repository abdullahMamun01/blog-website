import React from 'react'
import useAxios from './useAxios'
import {  useMutation, useQueryClient } from '@tanstack/react-query'
import useAuthContext from './useAuthContext'

const useProfileMutation = () => {
    const { axiosPrivate } = useAxios()
    const {auth} = useAuthContext()
    const {id} =  auth.user
    
    const queryClient = useQueryClient()

    const updateProfileMutation = useMutation({

        mutationFn: async (formData) => {
            const response = await axiosPrivate.patch('/profile', formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              } )
            return response.data
        },
        onSuccess :  (_data,newImage) => {
            //Updates via setQueryData must be performed immutable way
            queryClient.setQueryData(['user' , {id}] ,(oldData) => oldData ?  {...oldData , ...newImage} : oldData)
        },
    })

    const updateBioMutation = useMutation({
        
        mutationFn: async (updateBio) => {
            const response = await axiosPrivate.patch('/profile', updateBio)
            return response.data
        }, 
        onSuccess :  (data,updatedBio) => {
         
            //Updates via setQueryData must be performed immutable way
            queryClient.setQueryData(['user' , {id}] ,(oldData) => oldData ?  {...oldData , ...updatedBio} : oldData)
        }
        
    })

    const updateBio =  (bio) => {
       return  updateBioMutation.mutate(bio)
    } 

   

    return {
        updateBio,
        isBioUpdate : updateBioMutation.isPending ,
        updateProfileMutation 

    }
}

export default useProfileMutation