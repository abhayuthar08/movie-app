import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Notfound from './Notfound';



function Trailer() {
  const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);
    
  return ytvideo ?  (
    <div className='bg-[rgba(0,0,0,.9)] absolute top-0 left-0 flex w-screen items-center justify-center h-screen '>
      
         <Link>
          <i onClick={() => navigate(-1)}
            className="text-3xl absolute text-white right-[5%] top-[5%] hover:text-[#6556CD] mr-3 ri-close-fill "></i>

        </Link>
        <ReactPlayer controls height={600} width={1600} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>
         </div>
  ) : <Notfound/>
}

export default Trailer