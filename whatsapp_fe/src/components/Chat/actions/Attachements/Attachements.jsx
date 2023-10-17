import React, { useState } from 'react'
import { AttachmentIcon } from '../../../../svg'
import Menu from './Menu'

export default function Attachements({showAttachments,setShowAttachments,setShowPicker}) {
  const [show,setShow]=useState(false);
  return (
    <li className='relative'>
      <button 
      type='button'
      onClick={()=>{
        setShowPicker(false);
        setShowAttachments(!show)}
      }
      className='btn'>
        <AttachmentIcon className="dark:fill-dark_svg_1"/>
      </button>
      {/* menu */}
      {
        showAttachments ? <Menu/> : null
      }
    </li>
  )
}
