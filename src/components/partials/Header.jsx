import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
    
  return (
    <div
    style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)) , url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path
        })`, 
        backgroundPosition : 'top 10%',
        backgroundSize : 'cover'
    }} className='w-full h-[50vh] flex flex-col justify-end items-start p-[5%]'>

        <h1 className='text-5xl font-black text-white'>{
            data.name
            || data.title
            || data.original_name 
            || data.original_title
            }
            </h1>
            <p className='w-[70%] mt-3  text-white text-xs'>{data.overview.slice(0,200)}...
            <Link to={`/${data.media_type}/details/${data.id}`} className="  text-blue-500">more</Link>
            </p>

            <p className='text-white flex gap-10'>
            <i className="text-yellow-500 ri-megaphone-fill">{""}{data.release_date || "No Information"}</i>
            <i className="text-yellow-500 ri-album-fill">{data.media_type.toUpperCase()}</i>
            </p>

            <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='bg-[#6556CD] p-2 text-xl font-semibold rounded text-white mt-3'>Watch Trailer</Link>
            
     




    </div>
  )
}

export default Header