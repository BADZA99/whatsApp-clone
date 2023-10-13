import moment from 'moment'
import React from 'react'
import TraingleIcon from "../../../svg/triangle";

export default function Message({message,me}) {
  return (
    <div className={`w-full flex mt-2 space-x-3 ${me ? "max-w-xs ml-auto justify-end" :"" } `}>
      {/* message container */}
      <div>
        <div className={`relative h-full dark:text-dark_text_1 p-2 rounded-lg ${me ? "bg-green_3" :"dark:bg-dark_bg_2"}`}>
            {/* message */}
            <p className="float-left h-full text-sm pb-5 text-dark_text_5">{message.message}</p>
            {/* message time */}
            <span className=''>{moment(message.createdAt).format("HH:mm")}</span>
            {/* triangle */}
            {
                !me ? ( <span>
                <TraingleIcon className="dark:fill-dark_bg_2 rotate-[60deg] absolute top-[-5px] -left-1.5"/>
            </span>) :null
            }
           
        </div>
      </div>
    </div>
  )
}
