import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import TopNav from './TopNav';
import DropDown from './DropDown';
import Cards from './Cards';



function People() {

    document.title = "SCSDB | people";

    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
  
  
     
    const GetPeople = async () => {
      try {
        const { data } = await axios.get(`/person/popular?page=${page}`);
        
  
        
        if(data.results.length > 0) {
            setpeople((prevState) => [...prevState,...data.results]);
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
      if (people.length === 0) {
          GetPeople();
      }
      else {
          setpage(1);
          setpeople([]);
          GetPeople();
      }
    }

    
  useEffect(() => {
    refreshHandler();
  },[category])



  return people.length > 0 ?  (
    <div className='w-screen h-screen text-white p-[1%] '>
        <div className='w-full items-center flex '>

            <h1 className='text-zinc-400 text-2xl'>
            <i onClick={() => navigate(-1)}
             className=" hover:text-[#6556CD] mr-3 ri-arrow-left-line"></i>
            people<small className='text-sm text-zinc-600 ml-2'>({category})</small></h1>

            <TopNav />

            
             <div className='w-[2%]'></div>

            

        </div>

        <InfiniteScroll
        
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}

        loader={<h1>Loading...</h1>}>

        <Cards data={people} title="person"/>
        </InfiniteScroll>


    </div>
  ) : <Loading />
}

export default People