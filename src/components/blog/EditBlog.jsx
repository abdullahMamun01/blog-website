import React, { useState } from 'react'
import CloseIcon from '../../assets/icons/close.svg'
import useBlogContext from '../../hooks/useBlogContext';
import { useForm } from 'react-hook-form';
import Field from '../common/Field';
import useBlogMutation from '../../hooks/useBlogMutation';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useImageSrc from '../../hooks/useImageSrc';


const EditBlog = () => {
    const {state,dispatch} = useBlogContext()

    const thumbnail = `${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${state.editModal.selectedBlog.thumbnail}`
    const {imageSrc ,handleFileChange} = useImageSrc(thumbnail || null)
 
    const { onChange, formState: { errors }, register,watch, handleSubmit } = useForm({
        defaultValues : {
                title: state.editModal.selectedBlog.title || '',
                content:  state.editModal.selectedBlog.content || '',
                tags:  state.editModal.selectedBlog.tags || '' ,
        }
    })

    const onClose = () => {
        dispatch({ type: 'CLOSE_EDIT_MODAL' })
    }

    const queryClient = useQueryClient()
    //update mutation 
    const {updateBlogMutation} = useBlogMutation()
   
    const submitForm = (formData) => {
        const submitData  = {
            id:state.editModal.selectedBlog.id , 
            title:formData.title ,
            tags:formData.tags,
            content:formData.content
        }
        if(formData.thumbnail[0]){
            updateBlogMutation.mutate({...submitData , thumbnail:formData.thumbnail[0] })
        }else{
            updateBlogMutation.mutate(submitData)
        }
    
   
    }
    //invalidate blogs
    if(updateBlogMutation.isSuccess){
        queryClient.invalidateQueries(['blogs'])
        toast.success('blog successfully update')
        dispatch({type :'CLOSE_EDIT_MODAL'})
        return
    }

    

    return (

        <section className="fixed left-0 top-0  w-full flex justify-center items-center  bg-slate-800/50 backdrop-blur-sm z-50">
            <div
                className=" w-9/12 mx-auto relative  bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10"
            >
                <button onClick={onClose} className='absolute right-2 top-0 cursor-pointer w-8 h-8 mt-[20px]'>
                    <img alt="Close" src={CloseIcon} className="" />
                </button>
                <form className="createBlog "  onSubmit={handleSubmit(submitForm)}>
                    <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4 ">
                        {imageSrc && <img src={imageSrc} alt="" className='w-full  h-full overflow-hidden' />}
                        <label htmlFor='file' className=''>

                            <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                    />
                                </svg>
                                <input {...register("thumbnail", { onChange: handleFileChange })} type="file" id="file" className='hidden' />
                                <p className=''>Upload Your Image</p>

                            </div>
                        </label>

                    </div>
                    <Field error={errors.title}>

                        <input  {...register("title", { required: 'Title is required' })} type="text" id="title" name="title" placeholder="Enter your blog title"  />
                    </Field>

                    <div className="mb-6">
                        <Field error={errors.tags} >

                            <input
                                {...register("tags", { required: 'tags is required' })}
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
                            />
                        </Field>
                    </div>

                    <div className="mb-6">
                        <Field error={errors.content}>

                            <textarea  {...register("content", { required: 'content is required' })} id="content" name="content" placeholder="Write your blog content" rows="6"></textarea>
                        </Field>
                    </div>

                    <button
                        
                        className={`bg-indigo-600 text-white  px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200`}
                    >
                        update Blog
                    </button>
                </form>

            </div>
        </section>
    )
}

export default EditBlog