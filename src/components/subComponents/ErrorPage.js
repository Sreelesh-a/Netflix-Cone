import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen py-28 sm:py-48 text-white'>
        <div className='flex flex-wrap justify-center'>
            <div><i class="fa-regular fa-face-frown text-9xl justify-center flex items-center w-full text-white"></i></div>
            

        </div>
        <div className='flex justify-center text-9xl mt-6'>404</div>
        <div className='flex justify-center  mt-6'>The page isn't available</div>
        <Link to={"/"}>
        <div className='flex justify-center bg-red-600   mx-auto w-44 py-4 rounded-full mt-6'>Got to Home</div>
        </Link>
      
    </div>
  )
}

export default ErrorPage
