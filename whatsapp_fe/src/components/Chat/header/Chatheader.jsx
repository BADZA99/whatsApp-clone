import React from 'react'
import { useSelector } from 'react-redux'
import { DotsIcon, SearchLargeIcon } from '../../../svg';
import { capitalize } from '../../../utils/strings';


export default function Chatheader() {
    const {activeConversation}=useSelector((state)=>state.chat);
    const {name,picture}=activeConversation;

  return (
    <div className='h-[59px] dark:bg-dark_bg_2 flex items-center p16 select-none'>
        {/* container */}
        <div className="w-full flex items-center justify-between">
            {/* left  */}
            <div className="flex items-center gap-x-4">
                {/* conversation image */}
                <button className='btn'>
                    <img src={picture} alt={`${name} picture`} className='w-full h-full rounded-full object-cover' />
                </button>
                {/* conversation name and online status */}
                <div className="flex flex-col">
                    <h1 className='dark:text-white text-md font-bold'>{capitalize(name.split(" ")[0])}</h1>
                    <span className='dark:text-dark_svg_2 text-xs'>online</span>
                </div>
            </div>
            {/* right */}
            <ul className='flex items-center gap-x-2.5'>
                <li>
                    <button className='btn'>
                        <SearchLargeIcon className="dark:fill-dark_svg_1"/>
                    </button>
                </li>
                <li>
                    <button className='btn'>
                        <DotsIcon className="dark:fill-dark_svg_1"/>
                    </button>
                </li>
            </ul>
        </div>
      
    </div>
  )
}
