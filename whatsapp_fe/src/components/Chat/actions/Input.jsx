import React from 'react'
import { useState } from 'react'

export default function Input({message,setMessage,textRef}) {
    const onChangeHandler=(e)=>{
        setMessage(e.target.value);
    }
    console.log("message",message)
  return (
    <div className='w-full'>
      <input type='text' className='dark:bg-dark_hover_1 outline-none h-[45px] w-full flex-1 rounded-lg pl-4 text-white ' placeholder='Type a message' value={message}
      onChange={onChangeHandler}  ref={textRef}
      />
    </div>
  )
}


