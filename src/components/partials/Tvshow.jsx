import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import TopNav from './TopNav';
import DropDown from './DropDown';
import Cards from './Cards';

function Tvshow() {

    document.title = "SCSDB | Tv Shows";

    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
  
  
     
    const GetTv = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`);
        
  
        
        if(data.results.length > 0) {
            settv((prevState) => [...prevState,...data.results]);
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
      if (tv.length === 0) {
          GetTv();
      }
      else {
          setpage(1);
          settv([]);
          GetTv();
      }
    }
  
  
    useEffect(() => {
      refreshHandler();
    },[category])
  




    
  return tv.length > 0 ?  (
    <div className='w-screen h-screen text-white p-[1%] '>
        <div className='w-full items-center flex '>

            <h1 className='text-zinc-400 text-2xl'>
            <i onClick={() => navigate(-1)}
             className=" hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>
            tv<small className='text-sm text-zinc-600 ml-2'>({category})</small></h1>

            <TopNav />

            <DropDown 
            title="Category"
            options={['popular' , 'on_the_air','top_rated','airing_today']}
            func={(e) => setcategory(e.target.value)}
             />

             <div className='w-[2%]'></div>

            

        </div>

        <InfiniteScroll
        
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}

        loader={<h1>Loading...</h1>}>

        <Cards data={tv} title="tv"/>
        </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default Tvshow