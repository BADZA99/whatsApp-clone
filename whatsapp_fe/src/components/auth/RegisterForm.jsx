import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { signUpSchema } from '../../utils/validation';
import AuthInput from './AuthInput';
import { useDispatch, useSelector } from 'react-redux';
import   PulseLoader  from 'react-spinners/PulseLoader';
import { Link, useNavigate } from 'react-router-dom';
import { changeStatus, registerUser } from '../../features/userSlice';
import { useState } from 'react';
import Picture from '../Picture';
import axios from 'axios';
const cloud_secret =process.env.REACT_APP_CLOUD_SECRET
const cloud_name =process.env.REACT_APP_CLOUD_NAME


export default function RegisterForm() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {status,error}=useSelector((state)=>state.user);
  const [picture,setPicture]=useState();
  const [readablePicture,setReadablePicture]=useState();
    const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit= async(data) => {
    let res;
    dispatch(changeStatus('loading'));
    if(picture){
      // upload to cloudnary and then register user
      await uploadImage().then(async (response)=>{
        let res=await dispatch(registerUser({...data,picture:response.secure_url}));
        if(res?.payload?.user){
            navigate('/');
          }
      });
    }else{

      let res=await dispatch(registerUser({...data,picture:""}));
      // console.log(res);
      if(res?.payload?.user){
        navigate('/');
      }
    }
  };
  const uploadImage=async ()=>{
    let formData=new FormData();
    formData.append('upload_preset',cloud_secret)
    formData.append('file',picture);
    const {data}=await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formData);
    console.log(data);
    return data;
  }
  // console.log(picture,readablePicture)
//   console.log("values",watch());
//   console.log("errors",errors);
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* container */}
        <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/* heading */}
            <div className="text-center dark:text-dark_text_1">
                <h2 className="mt-6 text-3xl font-bold">Welcome</h2>
                <p className="mt-2 text-sm">Sign up</p>
            </div>
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
            <AuthInput
            name="name"
            type="text"
            placeholder="Name"
            register={register}
            errors={errors?.name?.message}
            />
            <AuthInput
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            errors={errors?.email?.message}
            />
            <AuthInput
            name="status"
            type="text"
            placeholder="status (optional)"
            register={register}
            errors={errors?.status?.message}
            />
            <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            errors={errors?.password?.message}
            />
            {/* picture */}
            <Picture 
            readablePicture={readablePicture}
            setReadablePicture={setReadablePicture}
            setPicture={setPicture}
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
              {status ==="loading" ? <PulseLoader color="#fff" size={16} /> :"Sign up"}
            </button>
            {/* sign in link */}
            <p className='flex flex-col items-center justify-center mt-0 text-center text-md dark:text-dark_text_1'>
                <span>Already have an account?</span>
                <Link to="/login" className='hover:underline cursor-pointer'>
                    Sign in
                </Link>
            </p>
        </form>
        </div>
    </div>
  )
}
