import React from 'react';
import loader2 from '/404.gif';

function Notfound() {
    return (
        <div className=' bg-black h-screen w-screen items-center justify-center'>
            <img className='w-[40%] ml-[65vh]  h-[60%] mt-[20vh]' src={loader2} alt="" />
        </div>
      )
}

export default Notfound