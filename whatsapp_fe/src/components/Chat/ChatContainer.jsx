import React from 'react'
import Chatheader from './header/Chatheader'

export default function ChatContainer() {
  return (
    <div className='relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden'>
      {/* container */}
      <div>
        {/* chat header */}
        <Chatheader/>
        </div>
    </div>
  )
}
