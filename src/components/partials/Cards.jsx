import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.png';



function Cards({data,title}) {

  return (
    <div className='flex flex-wrap max-w-screen min-h-screen   px-[5%] bg-[#1F1E24]'>
        {
            data.map((c,i) => 
            <Link 
            to={`/${c.media_type || title}/details/${c.id}`}
             className=' relative w-[25vh] mr-[5%] mb-[2%] ' key={i}>
              <img className='shadow-[8px_17px__38px_2px__rgba(0,0,0,0.5)] h-[40vh] object-cover' src={  c.poster_path || c.backdrop_path || c.profile_path ?
                `https://image.tmdb.org/t/p/original/${
            c.poster_path || c.backdrop_path || c.profile_path
        }` : noimage} alt="" />
        
        <h1 className='text-2xl text-zinc-400 font-semibold mt-3'>
        {
          
          c.name
          || c.title
          || c.original_name 
          || c.original_title

        } 
          </h1>

          {c.vote_average &&  <div className='absolute right-[-10%] bottom-[30%] rounded-full bg-yellow-600 text-white text-xl w-[5vh] h-[5vh] flex justify-center items-center'>{(c.vote_average * 10) . toFixed()} <sup>%</sup>
          </div>
                 }

         
            </Link>)
        }
    </div>
  )
}

export default Cards