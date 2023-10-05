import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { signInSchema } from '../../utils/validation';
import AuthInput from './AuthInput';
import { useDispatch, useSelector } from 'react-redux';
import   PulseLoader  from 'react-spinners/PulseLoader';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/userSlice';
// import { changeStatus, loginUser, registerUser } from '../../features/userSlice';
// import { useState } from 'react';
// import axios from 'axios';


export default function RegisterForm() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {status,error}=useSelector((state)=>state.user);
    const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit=async (values)=>{
    let res=await dispatch(loginUser({...values}));
    if(res?.payload?.user){
        navigate('/');
      }
  };
  

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* container */}
        <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/* heading */}
            <div className="text-center dark:text-dark_text_1">
                <h2 className="mt-6 text-3xl font-bold">Welcome Back</h2>
                <p className="mt-2 text-sm">Sign in</p>
            </div>
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          
            <AuthInput
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            errors={errors?.email?.message}
            />
         
            <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            errors={errors?.password?.message}
            />
          
            {/* if we have an error  */}
            {
              error ? (
                <div>
                  <p className="text-red-400">{error}</p>
                </div>
              ):null
            }
          {/* sunbmit button */}
            <button 
            className="w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
            type='submit'>
              {status ==="loading" ? <PulseLoader color="#fff" size={16} /> :"Sign in"}
            </button>
            {/* sign in link */}
            <p className='flex flex-col items-center justify-center mt-0 text-center text-md dark:text-dark_text_1'>
                <span>you do not have an account?</span>
                <Link to="/register" className='hover:underline cursor-pointer'>
                    Sign up
                </Link>
            </p>
        </form>
        </div>
    </div>
  )
}
