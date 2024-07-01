import map from 'map'
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'
import noimage from '/noimage.png';





const HorizontalCards = ({data}      ) => {


  return (
    <div className='w-full    p-5  '>



        <div className='w-full flex  overflow-x-auto gap-1'>

            { data.length > 0 ? data.map((d,index) =>  <Link to={`/${d.media_type}/details/${d.id}`} key={index} className='min-w-[20%]  h-[50vh] text-white'>

                <div className='bg-zinc-800 h-[40vh] w-[30vh]'>
                <img className='w-[30vh] h-[20vh] mb-1 object-cover'
                 src={  d.backdrop_path || d.profile_path ?
                    `https://image.tmdb.org/t/p/original/${
            d.backdrop_path || d.profile_path 
            
        })` : noimage} />
                
                 <h1 className='text-xl mt-2  font-black text-white overflow-y-auto'>{
                    d.name
                    || d.title
                    || d.original_name 
                    || d.original_title
                    }
                    </h1>
                    <p className='w-[100%] mt-5  text-white text-xs'>{d.overview.slice(0,100)}
                        /
                    ){'}'}...
                    <span className="text-zinc-500">more</span>
                    </p>
            
                </div>

            </Link>) : 
            <h1 className='text-3xl text-white text-center mt-5'>
                Nothing to say
                </h1>
                }
        </div>
    </div>
  )
}

export default HorizontalCards