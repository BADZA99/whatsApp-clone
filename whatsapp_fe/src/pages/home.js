import React from 'react'
import { Sidebar } from '../components/sidebar'

export default function Home() {
  return (
    <div
    className='min-h-screen dark:bg-dark_bg_1 flex items-center justify-start py-[19px] overflow-hidden'
    >
      {/* container */}
      <div className="container min-h-screen flex">
        {/* sidebar */}
        <Sidebar/>
      </div>
    </div>
  )
}
