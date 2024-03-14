import React from 'react';
import ProfileImage from '../Profile/ProfileImage';
import useBlogContext from '../../hooks/useBlogContext';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Field from '../common/Field';
import useProfileMutation from '../../hooks/useProfileMutation';
import { toast } from 'react-toastify';

const UpdateProfileModal = () => {
    const { state, dispatch } = useBlogContext()

    const queryClient = useQueryClient()
    const profile = queryClient.getQueryData(['user', { id: state.updateProfileModal.userProfile }])

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: profile.firstName,
            lastName: profile.lastName,
            bio: profile.bio
        }
    })
    //profile mutation 
    const {updateProfileMutation} = useProfileMutation()

    const submitForm = (formData) =>{
        updateProfileMutation.mutate(formData)

    }
    const onClose = () => {
        // OPEN_UPDATE_PROFILE_MODAL
        dispatch({ type: 'CLOSE_UPDATE_PROFILE_MODAL' })
    }

    if(updateProfileMutation.isSuccess){
        onClose()
        toast.success('profile successfully update ')
        return
    }
    
    



    return (
        <section className="bg-gray-200 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-opacity-50">
            <div>
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16 bg-gray-900">
                    <h2 className="mb-4 text-xl font-bold text-gray-100 dark:text-gray-100 text-center">Update profile</h2>
                    <form action="#" onSubmit={handleSubmit(submitForm)}>
                        <ProfileImage firstName="Shakib" isMe={true} />
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="w-full">


                                <Field label="First Name" error={errors.firstName} >

                                <input
                                        {...register("firstName", { required: 'firstName is required' })}
                                        type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="last name" required />
                                </Field>

                            </div>
                            <div className="w-full">

                                <Field label="Last Name" error={errors.lastName} >

                                    <input
                                        {...register("lastName", { required: 'lastName is required' })}
                                        type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="last name" required />

                                </Field>


                            </div>
                            <div className="sm:col-span-2">
                                <Field label="Bio" error={errors.bio}>

                                    <textarea
                                    {...register("bio", { required: 'Bio is required' })}
                                    id="bio" rows="8" type="text" className="block p-2.5 text-gray-800 w-full text-sm  bg-gray-50 rounded-lg border border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a bio  here...">

                                    </textarea>
                                </Field>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button type="submit" className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Update profile
                            </button>
                            <button onClick={onClose} type="button" className="text-red-600 inline-flex items-center hover:text-gray-100 border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-gray-100 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateProfileModal;
