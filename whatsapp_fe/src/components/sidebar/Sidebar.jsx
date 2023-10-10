import React from 'react'
import { SidebarHeader } from './header'
import Notifications from './notifications/Notifications'
import { Search, SearchResults } from './search'
import { useState } from 'react'
import { Conversations } from './conversations'

export default function Sidebar() {
    const [searchResults,setSearchResults]=useState([]);
    // console.log(searchResults);
  return (
    <div
    className='w-[40%] h-full select-none'
    >
        {/* Sidebar header */}
      <SidebarHeader/>
      {/*notifications */}
      <Notifications/>
      {/* search */}
      <Search searchLength={searchResults.length} setSearchResults={setSearchResults} />

      {
        searchResults.length > 0  ? (
          <SearchResults searchResults={searchResults}/>  

        ) :(
          <Conversations/>
        )
        
      }

    </div>
  )
}
