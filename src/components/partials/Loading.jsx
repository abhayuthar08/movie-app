import React from 'react'
import loader2 from '/loader.gif';

function Loading() {
  return (
    <div className=' bg-black h-screen w-screen items-center justify-center'>
        <img className='w-[40%] ml-[55vh]  h-[60%] mt-[20vh]' src={loader2} alt="" />
    </div>
  )
}

export default Loading