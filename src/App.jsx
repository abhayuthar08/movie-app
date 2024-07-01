import React from 'react'
import {Route , Routes } from "react-router-dom";
import Home from './components/Home'
import Loading from './components/partials/Loading';
import Trending from './components/partials/Trending';
import Popular from './components/partials/Popular';
import Movie from './components/partials/Movie';
import Tvshow from './components/partials/Tvshow';
import People from './components/partials/People';
import About from './components/partials/About';
import Contact from './components/partials/Contact';
import Moviedetails from './components/partials/Moviedetails';
import Tvdetails from './components/partials/Tvdetails';
import Persondetails from './components/partials/Persondetails';
import Trailer from './components/partials/Trailer';
import Notfound from './components/partials/Notfound';




function App() {
  return (
    <div className=" bg-[#1F1E24] w-screen h-screen flex  ">
      
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/trending' element={<Trending />} />
        <Route path = '/popular' element={<Popular />} />
        <Route path = '/movie' element={<Movie />} />
          <Route path = '/movie/details/:id' element={<Moviedetails />} >
           <Route path = '/movie/details/:id/trailer' element={<Trailer />} />
          </Route>
    
        
        <Route path = '/tvshow' element={<Tvshow />} >
        <Route path = '/tvshow/details/:id' element={<Tvdetails />} />
        {/* <Route path = '/tv/details/:id/trailer' element={<Trailer />} /> */}
        </Route>



      
       
       
        <Route path = '/people' element={<People />} />
        <Route path = '/person/details/:id' element={<Persondetails />} />
     
        <Route path = '/aboutus' element={<About />} />
        <Route path = '/contactus' element={<Contact />} />
        <Route path = '*' element={<Notfound />} />
      </Routes>

      
      
      </div>
  )
}

export default App