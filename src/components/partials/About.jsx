import React from 'react'
import abhi2 from '/abhii.jpg';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>


function About() {
  return (
   <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
     <div className=' w-full h-full flex '>
       

       <div className=''>
       <h2 className='relative text-5xl font-bold text-zinc-200 mt-[15vh] mx-[20vh]'>I am a Software Engineer</h2>
        <h1 className='text-9xl text-zinc-200 mt-5 mx-[20vh]'>ABHAY</h1>
        <h1 className='text-9xl text-zinc-200 mt-5 mx-[20vh]'>SUTHAR</h1>

        <hr className='mt-5' />

        <div className='text-3xl ml-[20vh] mt-10 text-zinc-200'>
        <h3 className='mt-1'>Date Of Birth : 8/8/2004</h3>
        <h3 className='mt-1'>Email : abhaysuthar6355@gmail.com</h3>
        <h3 className='mt-1'>Address : Gandhinagar , Gujarat</h3>
        <h3 className='mt-1'>Mobile No : 6354326242</h3>
    </div>
       </div>

       <div className='bg-gradient-to-r from-slate-900 to-slate-700'>  <img className=' rounded absolute h-[70vh] w-[70vh] mt-[20vh] ml-[15vh] border-2 border-zinc-700 shadow-2xl shadow-[rgba(255,255,255,.5)] ' src={abhi2} alt="" /></div>

    </div>

    
   </div>
      
  )
}

export default About

