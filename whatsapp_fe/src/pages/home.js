import React from 'react'
import { Sidebar } from '../components/sidebar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConversations } from '../features/chatSlice';
import { WhatsappHome } from '../components/Chat';

export default function Home() {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  console.log("activeconv",activeConversation)
  // get conversations
  useEffect(()=>{
    if(user){
      dispatch(getConversations(user.token));
    }

  },[user]);
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-start py-[19px] overflow-hidden">
      {/* container */}
      <div className="container h-screen flex">
        {/* sidebar */}
        <Sidebar />
        {activeConversation._id ? "Home" : <WhatsappHome/>}
      </div>
    </div>
  );
}
