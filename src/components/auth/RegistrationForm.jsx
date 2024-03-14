import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { api } from '../../api/api'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Field from '../common/Field'
import { useForm } from 'react-hook-form'

const RegistrationForm = () => {
    const { register, setError, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    //user register logic
    const registerUser = useMutation({
        mutationFn: async (registerInfo) => {
            const response = await api.post('/auth/register', registerInfo)
            return response.data
        }
    })

    const submitForm = (formState) => {
        registerUser.mutate(formState)
    }

    if (registerUser.isSuccess) {
        toast.success('successfully register')
        return navigate('/login')
    }

    return (
        <form action="" autoComplete="off" onSubmit={handleSubmit(submitForm)}>
            <div className="mb-6">

                <Field label='FirstName' error={errors.firstName}>

                    <input
                        {...register("firstName", { required: 'Email is required' })}
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </Field>
            </div>
            <div className="mb-6">

                <Field labe="LastName" error={errors.lastName}>
                    <input
                        {...register("lastName", { required: 'Email is required' })}
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </Field>

            </div>
            <div className="mb-6">
                <Field label="Email" error={errors.email}>
                    <input
                        {...register("email", { required: 'Email is required' })}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </Field>
            </div>
            <div className="mb-6">
                <Field label="Password" error={errors.password}>

                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Your password must be at least 8 characters",
                            },
                        })}
                        type="password"
                        id="password"
                        name="password"
                        className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </Field>
            </div>
            <div className="mb-6">
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                    Create Account
                </button>
            </div>
            <p className="text-center">
                Already have account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
            </p>
        </form>
    )
}

export default RegistrationForm