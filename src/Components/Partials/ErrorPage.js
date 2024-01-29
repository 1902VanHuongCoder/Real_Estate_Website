import React from 'react'
import error_404 from '../../assets/images/404+Error.jpg';
import { IoIosArrowBack } from "react-icons/io";
const ErrorPage = () => {
  return (
    <div className='w-full h-screen bg-[#cde2ff] flex justify-center flex-col items-center gap-y-3'>
            <img src={error_404} alt='error' className='w-[400px] h-fit'/>
            <button className='group px-4 py-2 bg-[#0B60B0] text-white rounded-sm font-medium flex gap-x-1 items-center'><span className='group-hover:-translate-x-1 transition-transform'><IoIosArrowBack /></span><span>Back To Home</span></button>
    </div>
  )
}

export default ErrorPage