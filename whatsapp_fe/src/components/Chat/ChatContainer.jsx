import React, { useEffect } from 'react'
import Chatheader from './header/Chatheader'
import ChatMessages from './messages/ChatMessages'
import { useDispatch, useSelector } from 'react-redux';
import { getConversationMessages } from '../../features/chatSlice';
import { ChatActions } from './actions';


export default function ChatContainer() {
    const dispatch=useDispatch();
    const { activeConversation } = useSelector((state) => state.chat);
    const { user } = useSelector((state) => state.user);
    const {token}=user;
    const values={
      token,
      convo_id:activeConversation?._id
    }
    useEffect(()=>{
      if (activeConversation?._id) {

        dispatch(getConversationMessages(values));
      }
    },[activeConversation]);
    // console.log(messages);
  return (
    <div className='relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden'>
      {/* container */}
      <div>
        {/* chat header */}
        <Chatheader/>
        {/* chat messages */}
        <ChatMessages className=""/>
        {/* chat actions */}
        <ChatActions/>
        </div>
    </div>
  )
}
