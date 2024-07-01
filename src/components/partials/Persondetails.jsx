import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadperson } from '../store/actions/personActions';
import { removeperson } from '../store/reducers/personSlice';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import HorizontalCards from '../partials/HorizontalCards'
import Trailer from './Trailer';




const Persondetails = () => {




  const { id } = useParams();
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    }
  }, []);





  
  return info ? <div className="p-[15%] w-screen flex flex-col" >


    {/* part - 1 nav */}

    <nav className=' flex gap-10 divide-transparent text-2xl h-[10vh] items-center ' >
        <Link>
          <i onClick={() => navigate(-1)}
            className=" hover:text-[#6556CD] mr-3 ri-arrow-left-line "></i>

        </Link>

        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-line"></i>
        </a>
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
          <i class="ri-earth-fill"></i></a>
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
      </nav>

      
  </div> : <Loading/> ;
}

export default Persondetails