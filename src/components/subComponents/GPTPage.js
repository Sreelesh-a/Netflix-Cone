import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const GPTPage = () => {
    const [toggleChatScreen,setToggleChatScreen]=useState(false)
    console.log(toggleChatScreen)
  return (
    <div>
        {toggleChatScreen && (
            <div className='fixed z-100 w-full'>
            <div className='bg-red-600 bg-opacity-90 w-1/2 h-96 ml-auto  mr-[4.5rem] mt-[14.5rem] rounded-2xl '>

            <div className=''>
            <form className='text-center py-10 '>
            <input type='text' className='py-3 px-32 rounded-full text-lg ' placeholder='Whats you looking for today?'/>
            
            </form>
            </div>

           

            

            </div>
        </div>
        )}
        <div className=' fixed z-100 text-2xl right-16 bottom-28'  >
            
            <button className='bg-red-600 rounded-full p-4 hover:scale-105 drop-shadow-2xl' onClick={()=>{
                setToggleChatScreen(!toggleChatScreen)
            }}>
            <i class="fa-solid fa-robot text-white"></i>
            </button>
            
            
        </div>
        
      
    </div>
  )
}

export default GPTPage
