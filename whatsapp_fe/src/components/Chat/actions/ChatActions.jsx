import React from 'react'
import EmojiPickerApp from './EmojiPicker'
import Attachements from './Attachements'
import Input from './Input'
import { SendIcon } from '../../../svg'

export default function ChatActions() {
  return (
    <form className=' w-full dark:bg-dark_bg_2 h-[60px] flex items-center absolute bottom-0 py-2 px-4 select-none  '>
      {/* {conatier} */}
      <div className="w-full flex items-center gap-x-2">
        {/* emojies and attachement */}
        <ul className='flex gap-x-2'>
            <EmojiPickerApp/>
            <Attachements/>
        </ul>
        {/* input */}
        <Input/>
        {/* send button */}
        <button className='btn'>
            <SendIcon className="dark:fill-dark_svg_1"/>
        </button>
      </div>
    </form>
  )
}
