import React from 'react'
import { useSelector } from 'react-redux';
import Message from './Message';

export default function ChatMessages() {
  const { messages } = useSelector((state) => state.chat);
  const {user}=useSelector((state)=>state.user);


  return (
    // bg-[url('https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png')]
    <div className="mb-[60px] bg-dark_bg_1 bg-cover bg-no-repeat">
      {/* container */}
      <div className='scrollbar overflow_scrollbar overflow-auto py-2 px-[6%]'>
        {/* messages */}

        {
          messages && messages.map((message)=>(
            <Message message={message} key={message?._id} me={user?._id===message.sender?._id}/>
          ))
        }
        
      </div>
    </div>
  )
}
