import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadmovie } from '../store/actions/movieActions';
import { removemovie } from '../store/reducers/movieSlice';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import HorizontalCards from '../partials/HorizontalCards'
import Trailer from './Trailer';




function Moviedetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    }
  }, []);


  return info ? (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)) , url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
      backgroundPosition: 'top 20% left 40%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} className='relative w-screen min-h-[180vh] px-[10%] text-zinc-100'>

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




      <div className='flex'>


        <div className=' '>


          <img className='shadow-[8px_17px__38px_2px__rgba(0,0,0,0.5)] h-[50vh] w-[80vh] object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path
            }`} alt="" />

        </div>



        {/* this part is for content part */}

        <div className='ml-[5%] '>
          <h1 className='text-5xl text-white font-black'>   {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}

            <small className='text-xl text-zinc-300 font-bold'>({info.detail.release_date.split("-")[0]})</small> </h1>



          <div className='text-white gap-x-10 mr-[50%] flex items-center justify-center mt-3 mb-5'>

            <span className='rounded-full  bg-yellow-600 text-white text-xl w-[5vh] h-[5vh] flex justify-center items-center'>{(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className='w-[40px] leading-6 text-2xl font-semibold '>User Score</h1>
            <h1 className=''>{info.detail.release_date}</h1>
            <h1>
              {info.detail.genres.map((g) => g.name).join(",")}
            </h1>
            <h1>{info.detail.runtime}min</h1>

          </div>

          <h1 className='text-zinc-100 italic font-semibold text-xl'>{info.detail.tagline}</h1>

          <h1 className='text-zinc-100  text-xl mt-5 mb-3'>Overview</h1>

          <p className='mb-3'>
            {info.detail.overview}
          </p>

          <h1 className='text-zinc-100  text-xl mt-5 mb-3'>Movie Translated</h1>
          <p className='mb-7'>{info.translations.join(",")}</p>


          <Link className='py-4 rounded-md px-10 bg-[#6556CD]' to={`${pathname}/trailer`}>
            Play Trailer
          </Link>







        </div>


      </div>



      { /* part-3 starting from here... this is ffor platform and rent and download */}

      <div className='mt-20 mb-8   w-[80%] flex flex-col gap-y-5 '>


        {info.watchproviders && info.watchproviders.flatrate && (
          <div className='flex text-white gap-x-5 items-center'>
            <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w) => (


              <img
                title={w.provider_name} className='w-[5vh] h-[5vh] object-cover  rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
            ))}

          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className='flex text-white gap-x-5 items-center'>
            <h1>Available on rent</h1>
            {info.watchproviders.rent.map((w) => (


              <img title={w.provider_name} className='w-[5vh] h-[5vh] object-cover  rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
            ))}

          </div>
        )}




        {info.watchproviders && info.watchproviders.buy && (
          <div className='flex text-white gap-x-5 items-center'>
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w) => (


              <img title={w.provider_name} className='w-[5vh] h-[5vh] object-cover  rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
            ))}

          </div>
        )}


      </div>
      <hr className='mt-5  h-[1px] border-zinc-300' />

      { /* this path is for similar product */}
      <div>
        <h1 className='text-3xl font-bbold mt-5'>Recommandations & Similar Stuff</h1>

        <HorizontalCards

          data={
            info.recommendations.length > 0 ?
              info.recommendations
              : info.similar
          }
        />

      </div>
      <Outlet />

    </div>


  ) : <Loading />
}

export default Moviedetails


















