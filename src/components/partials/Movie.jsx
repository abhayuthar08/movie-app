import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import TopNav from './TopNav';
import DropDown from './DropDown';
import Cards from './Cards';



function Movie() {

    document.title = "SCSDB | movie";

  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)


   
  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      

      
      if(data.results.length > 0) {
          setmovie((prevState) => [...prevState,...data.results]);
          setpage(page+1)

      }
      else {
        sethasMore(false);
      }
     
    } catch (error) {
      console.log("ERROR:", error);
    }
  };
  
  const refreshHandler = async () => {
    if (movie.length === 0) {
        GetMovie();
    }
    else {
        setpage(1);
        setmovie([]);
        GetMovie();
    }
  }


  useEffect(() => {
    refreshHandler();
  },[category])

  

  return movie.length > 0 ?  (
    <div className='w-screen h-screen text-white p-[1%] '>
        <div className='w-full items-center flex '>

            <h1 className='text-zinc-400 text-2xl'>
            <i onClick={() => navigate(-1)}
             className=" hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>
            movie<small className='text-sm text-zinc-600 ml-2'>({category})</small></h1>

            <TopNav />

            <DropDown 
            title="Category"
            options={['now_playing' , 'upcoming','top_rated','popular']}
            func={(e) => setcategory(e.target.value)}
             />

             <div className='w-[2%]'></div>

            

        </div>

        <InfiniteScroll
        
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}

        loader={<h1>Loading...</h1>}>

        <Cards data={movie} title="movie"/>
        </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default Movie