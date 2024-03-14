import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthContext from '../../hooks/useAuthContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../../api/login'
import Field from '../common/Field'
import axios from 'axios'

const LoginForm = () => {
    const { register, setError, handleSubmit, formState: { errors } } = useForm()
    const location = useLocation()
    const { auth, setAuth } = useAuthContext()
    const navigate = useNavigate()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: loginUser
    })

    const submitForm = async (formData) => {
        try {
            const {user,token} = await mutateAsync(formData)

            const accessToken = token.accessToken 
            const refreshToken = token.refreshToken 
        
            if(user){
                navigate('/')
            }
            setAuth({user ,accessToken , refreshToken })

        } catch (e) {

            setError("root.random", {
                type: "random",
                message: e.response.data.error === 'User not found' ? `User with email ${formData.email} is not found` : 'Invalid password',
            })
        }
    }

   
    return (
        <form action="" onSubmit={handleSubmit(submitForm)}>
            <h1>{auth?.user?.email}</h1>
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

                <span className="text-red-600 my-2">{errors?.root?.random?.message}</span>
            </div>
            <div className="mb-6">
                <button
                    type="submit"
                    disabled={isPending}
                    className={`w-full bg-indigo-600 text-white ${isPending && 'opacity-40'} p-3 rounded-md hover:bg-indigo-700 transition-all duration-200`}
                >
                    login
                </button>
            </div>
            <p className="text-center">
                Don t have an account? <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
            </p>
        </form>
    )
}

export default LoginForm