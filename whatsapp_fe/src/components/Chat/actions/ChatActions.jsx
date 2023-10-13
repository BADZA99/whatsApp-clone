import React from 'react'
import EmojiPickerApp from './EmojiPicker'
import Attachements from './Attachements'
import ClipLoader from "react-spinners/ClipLoader"
import Input from './Input'
import { SendIcon } from '../../../svg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../../features/chatSlice'
import { useRef } from 'react'

export default function ChatActions() {
    const dispatch=useDispatch();
    const [showPicker, setShowPicker] = useState(false);
    const [showAttachments, setShowAttachments] = useState(false);
    const textRef = useRef();
    const [loading, setLoading] = useState(false);
    const [message,setMessage]=useState("");
    const { activeConversation,status } = useSelector((state) => state.chat);
    const { user } = useSelector((state) => state.user);
    const {token}=user;
    const values={
        message,
        convo_id:activeConversation._id,
        token,
        files:[],
    }
    const SendMessageHandler= async (e)=>{
        e.preventDefault();
        await dispatch(sendMessage(values)); 
        setMessage(""); 
    }

  return (
    <form className=' w-full dark:bg-dark_bg_2 h-[60px] flex items-center absolute bottom-0 py-2 px-4 select-none  '
    onSubmit={(e)=>SendMessageHandler(e)}
    >
      {/* {conatier} */}
      <div className="w-full flex items-center gap-x-2">
        {/* emojies and attachement */}
        <ul className='flex gap-x-2'>
           <EmojiPickerApp
            textRef={textRef}
            message={message}
            setMessage={setMessage}
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            setShowAttachments={setShowAttachments}
          />
            <Attachements/>
        </ul>
        {/* input */}
        <Input message={message} setMessage={setMessage} textRef={textRef}/>
        {/* send button */}
        <button type='submit' className='btn'>
            {
                status==="loading" ? <ClipLoader color="#E9EDEF" size={25}/>: <SendIcon className="dark:fill-dark_svg_1"/>

            }
            
        </button>
      </div>
    </form>
  )
}
