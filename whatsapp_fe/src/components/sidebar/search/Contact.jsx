import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { open_create_conversation } from '../../../features/chatSlice';

export default function Contact({contact,setSearchResults}) {
    const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.user);
    const {token}=user;
    const values = {
        receiver_id: contact._id,
        token,

    }
    const openConversation = async () => {
       await dispatch(open_create_conversation(values)) ;
         setSearchResults([]);
    }
  return (
    <li onClick={()=>openConversation()} className='list-none h-[72px] hover:dark:bg-dark_bg-2 cursor-pointer dark:text-dark_text_1 px-[10px]'>
        {/* conatiner */}
        <div className="flex items-center gap-x-3 py-[10px]"></div>
        {/* contact */}
          <div className="flex items-center gap-x-3">
                {/* conversation user picture */}
                <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src={contact.picture} alt={contact.name} className='w-full h-full object-cover' />
                </div>
                {/* conversation name and message */}
                <div className="flex flex-col">
                    {/* conversation name */}
                    <h1 className="text-sm font-bold">{contact.name}</h1>
                    {/* conversation status */}
                    <div>
                        <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                            <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2 ">
                                <p>{contact.status}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="text-xs textSecondary">{contact.status}</div> */}
                </div>
            </div>
        <div className='ml-16 border-b dark:border-b-dark_border_1'></div>
        
    </li>
  )
}
