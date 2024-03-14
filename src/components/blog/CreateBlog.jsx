import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Field from '../common/Field'
import useBlogMutation from '../../hooks/useBlogMutation'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useImageSrc from '../../hooks/useImageSrc'

const CreateBlog = () => {
    const {imageSrc,handleFileChange}= useImageSrc(null)

    const { onChange, formState: { errors }, register, handleSubmit } = useForm()
    const { createBlogMutation } = useBlogMutation()
    const navigate = useNavigate()
    
    //submit form data
    const submitForm = (formState) => {
        createBlogMutation.mutate({ ...formState, thumbnail: formState.thumbnail[0] })
  
    }

   


    //after successfully post redirect home page and success message
    if(createBlogMutation.isSuccess){
        toast.success("Blog create successfully", {
            position: "top-right",
          });
        return navigate('/')
    }

    return (
        <div>
            {createBlogMutation.isPending && <span>posting...</span>}
            <form  className="createBlog" onSubmit={handleSubmit(submitForm)}>
                <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4 ">
                   {imageSrc &&  <img src={imageSrc} alt="" className='w-full  h-full overflow-hidden' />}

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
                            <input  {...register("thumbnail", { required: 'Image is required' , onChange: handleFileChange })}  type="file" id="file" className='hidden' />
                            <p className=''>Upload Your Image</p>

                        </div>
                    </label>
                    <span className='text-red-600 my-2'>{errors?.thumbnail?.message}</span>
                </div>
                <div className="mb-6">
                    <Field error={errors.title}>

                        <input  {...register("title", { required: 'Title is required' })} type="text" id="title" name="title" placeholder="Enter your blog title" />
                    </Field>
                </div>

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

                        <textarea  {...register("content", { required: 'content is required' })} id="content" name="content" placeholder="Write your blog content" rows="8"></textarea>
                    </Field>
                </div>

                <button
                    disabled={createBlogMutation.isPending}
                    className={`bg-indigo-600 text-white ${createBlogMutation.isPending && 'opacity-30'} px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200`}
                >
                    Create Blog
                </button>
            </form>
        </div>
    )
}

export default CreateBlog