import React from 'react'
import { Sidebar } from '../components/sidebar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConversations } from '../features/chatSlice';

export default function Home() {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.user)
  // get conversations
  useEffect(()=>{
    if(user){
      dispatch(getConversations(user.token));
    }

  },[user]);
  return (
    <div
    className='h-screen dark:bg-dark_bg_1 flex items-center justify-start py-[19px] overflow-hidden'
    >
      {/* container */}
      <div className="container h-screen flex">
        {/* sidebar */}
        <Sidebar/>
      </div>
    </div>
  )
}
