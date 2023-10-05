import React from 'react'
import { SidebarHeader } from './header'

export default function Sidebar() {
  return (
    <div
    className='w-[40%] h-full select-none'
    >
        {/* Sidebar header */}
      <SidebarHeader/>
    </div>
  )
}
