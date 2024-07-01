import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios';
import noimage from '/noimage.png';





const TopNav = () => {
    const [query, setquery] = useState([]);
    const [searches, setsearches] = useState([]);

    const GetSearches = async() => {
      try{
            const {data} = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
      }
      catch(error){
        console.log("ERROR:",error);
  
      }
    }
  
    useEffect(() => {
      GetSearches();
    }, [query])


  return (


    <div className='w-full h-[10vh] relative flex justify-start left-[20%]   items-center'>


        <i className=" text-3xl text-zinc-400 ri-search-line"></i>

        <input 

        onChange={(e) => setquery(e.target.value)}
        value={query}
        
        className='z-[100] w-[50%] mx-10 p-3 text-zinc-500 border-none bg-transparent  outline-none text-xl' type="text" placeholder='search anything...' />


        {query.length > 0 && <i
        onClick={() => setquery("")} className="text-3xl text-zinc-400 ri-close-fill"></i>} 

        <div className='z-[100] w-[60%] max-h-[50vh] rounded bg-zinc-200 absolute top-[90%] overflow-auto '>

          {searches.map((searches, index) => (
                   
                   <Link to={`/${searches.media_type}/details/${searches.id}`} key={index}
                   className='hover:text-black hover:bg-zinc-500 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100'>


                  <img
                  className='w-[10vh] h=[10vh] object-cover rounded mr-5 shadow-large' src=
                  {  searches.backdrop_path || searches.profile_path ? 
                    
                    `https://image.tmdb.org/t/p/original/${
                      
                    searches.backdrop_path || searches.profile_path}` : noimage
                  }
                    />

                  
                  <span>{searches.name
                   || searches.title
                   || searches.original_name 
                   || searches.original_title}</span>
                  </Link> 
          ))}

            
            

            


        </div>
    </div>
  )
}

export default TopNav