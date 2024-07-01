import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './TopNav';
import DropDown from './DropDown';
import axios from '../../utils/axios';
import Loading from './Loading';
import { Card } from 'react-bootstrap';
import Cards from './Cards';
import InfiniteScroll from 'react-infinite-scroll-component';










function Trending() {

    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    document.title = "SCSDB | Trending " + category.toLocaleUpperCase();

    
  const Gettrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      
      if(data.results.length > 0) {
          settrending((prevState) => [...prevState,...data.results]);
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
    if (trending.length === 0) {
        Gettrending();
    }
    else {
        setpage(1);
        settrending([]);
        Gettrending();
    }
  }


  useEffect(() => {
    refreshHandler();
  },[category,duration])


  return trending.length > 0 ?  (
    <div className='min-w-screen min-h-screen text-white p-[1%] '>
        <div className='w-full items-center flex '>

            <h1 className='text-zinc-400 text-2xl'>
            <i onClick={() => navigate(-1)}
             className=" hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>
            Trending</h1>

            <TopNav />

            <DropDown 
            title="Category"
            options={['movies' , 'tv', 'all']}
            func={(e) => setcategory(e.target.value)}
             />

             <div className='w-[2%]'></div>

            <DropDown 
            title="Duration"
            options={['week', 'day']}
            func={(e) => setduration(e.target.value)}
             />

        </div>

        <InfiniteScroll
        
        dataLength={trending.length}
        next={Gettrending}
        hasMore={hasMore}

        loader={<h1>Loading...</h1>}>

        <Cards data={trending} title={category}/>
        </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default Trending