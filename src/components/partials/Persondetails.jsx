import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadperson } from '../store/actions/personActions';
import { removeperson } from '../store/reducers/personSlice';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import HorizontalCards from '../partials/HorizontalCards'
import HoriShort from '../partials/HoriShort'
import Trailer from './Trailer';
import DropDown from '../partials/DropDown'





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







  return info ? <div className="px-[10%] min-h-[200vh] bg-[#1F1E24] w-screen flex flex-col text-white" >


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






    <div className='w-full flex'>

      {/* part - 2 left poster and details */}
      <div className='w-[20%]'>


        <img className='shadow-[8px_17px__38px_2px__rgba(0,0,0,0.5)] h-[50vh] w-[60vh] object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path || info.detail.profile_path
          }`} alt="" />

        <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-200' />


        {/* social media links */}
        <div className='text-2xl text-white flex gap-x-5'>


          <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
            <i class="ri-earth-fill"></i></a>

          <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
            <i class="ri-facebook-box-fill"></i></a>

          <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
            <i class="ri-instagram-fill"></i></a>

          <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
            <i class="ri-twitter-fill"></i></a>

        </div>

        {/* Person Info */}
        <div>

          <h1 className='text-2xl text-zinc-400 font-semibold my-5'>Person Info</h1>

          <h1 className='text-lg text-zinc-400 font-semibold '>Known For</h1>

          <h1 className='text-lg text-zinc-400 font-semibold '>{info.detail.known_for_department}</h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-5 '>Gender</h1>

          <h1 className='text-lg text-zinc-400 font-semibold '>{info.detail.gender === 2 ? "Male" : "Female"}</h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-5  '>Birthday</h1>

          <h1 className='text-lg text-zinc-400 font-semibold '>{info.detail.birthday}</h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-5  '>Deathday</h1>

          <h1 className='text-lg text-zinc-400 font-semibold '>{info.detail.deathday}  "Alive"</h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-5  '>Place Of Birth</h1>

          <h1 className='text-lg text-zinc-400 font-semibold '>{info.detail.place_of_birth}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold mt-5  '>Also Known As</h1>

          <h1 className='text-lg text-zinc-400 font-semibold '>{info.detail.also_known_as.join(",")}</h1>
        </div>

      </div>

      {/* part - 3 righr details and info */}
      <div className='w-[80%] ml-[5%]'>

        <h1 className='text-6xl text-zinc-400 font-black my-5'>Person Info</h1>

        <h1 className='text-lg text-zinc-400 font-semibold '>Biography</h1>

        <p className='text-zinc-400 mt-5'>{info.detail.biography}</p>

        <h1 className='text-lg text-zinc-400 font-semibold mt-5 '>Summary</h1>

        <HoriShort data={info.combinedCredits.cast} />

        <div className="flex justify-between mt-10">



          <h1 className='text-lg text-zinc-400 font-semibold mt-3 '>Action</h1>

          <DropDown  title="Category" options={["tv" , "movie"]} func={(e) => setCategory(e.target.value)} />

        </div>





      </div>

    </div>






  </div> : <Loading />;
}

export default Persondetails