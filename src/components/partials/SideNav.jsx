import axios from '../../utils/axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function SideNav() {

 
  return (
   <>

   <div className='min-w-[20%] h-full  border-r-2 border-zinc-400 p-7'>
    <h1 className='text-2xl text-white font-bold'> <i className='text-[#6556CD] mr-2  ri-tv-fill '></i>
     <span className=''>SCSDB.</span> 
     </h1>


<nav className='flex flex-col text-zinc-400 text-xl gap-2'>
  
<h1 className='text-white font-semibold text-xl mt-10 mb-2  '>New Feeds
      
      </h1>

      <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 '><i className="ri-fire-fill mr-2"></i>Trending</Link>
      <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 '><i className="ri-bard-fill mr-2"></i>Popular</Link>
      <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 '><i className="ri-movie-2-fill mr-2"></i>Movies</Link>
      <Link to="/tvshow" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 '><i className="ri-tv-2-line mr-2"></i>Tv Shows</Link>
      <Link to="/people" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 '><i className="ri-user-heart-line mr-2"></i>People</Link>

      </nav>

      <hr className='border-none bg-zinc-400 h-[1px]'></hr>

<nav className='text-zinc-400 text-semibold text-xl flex flex-col gap-3'>
<h1 className='mt-5 text-white text-xl mb-2 font-semibold'>Website Information  </h1>

<Link to="/aboutus" className='hover:bg-[#6556CD] text-zinc-400  rounded-md p-4 duration-300 '><i className="ri-contacts-fill mr-2"></i>About</Link>

<Link to="/contactus" className='hover:bg-[#6556CD] text-zinc-400 rounded-md p-4 duration-300 '><i className="ri-phone-fill mr-2"></i>Contact Us</Link>
</nav>


   </div>
   </>
  )
}

export default SideNav