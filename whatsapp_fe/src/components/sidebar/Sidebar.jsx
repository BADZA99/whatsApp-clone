import React from 'react'
import { SidebarHeader } from './header'
import Notification from './notifications/Notifications'

export default function Sidebar() {
  return (
    <div
    className='w-[40%] h-full select-none'
    >
        {/* Sidebar header */}
      <SidebarHeader/>
      {/*notifications */}
      <Notification/>
    </div>
  )
}
