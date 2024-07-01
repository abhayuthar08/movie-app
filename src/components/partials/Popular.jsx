import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import TopNav from './TopNav';
import DropDown from './DropDown';
import Cards from './Cards';



function Popular()   {
  document.title = "SCSDB | Popular";

  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)


   
  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      

      
      if(data.results.length > 0) {
          setpopular((prevState) => [...prevState,...data.results]);
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
    if (popular.length === 0) {
        GetPopular();
    }
    else {
        setpage(1);
        setpopular([]);
        GetPopular();
    }
  }


  useEffect(() => {
    refreshHandler();
  },[category])




  return popular.length > 0 ?  (
    <div className='w-screen h-screen text-white p-[1%] '>
        <div className='w-full items-center flex '>

            <h1 className='text-zinc-400 text-2xl'>
            <i onClick={() => navigate(-1)}
             className=" hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>
            popular</h1>

            <TopNav />

            <DropDown 
            title="Category"
            options={['movies' , 'tv']}
            func={(e) => setcategory(e.target.value)}
             />

             <div className='w-[2%]'></div>

            

        </div>

        <InfiniteScroll
        
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}

        loader={<h1>Loading...</h1>}>

        <Cards data={popular} title={category}/>
        </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default Popular
