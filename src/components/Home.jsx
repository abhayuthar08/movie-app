import React from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import Loading from "./partials/Loading";

function Home() {
  document.title = "SCSDB | HomePage";

  const [wallpaper, setwallpaper] = useState("");

  const [trending, settrending] = useState([]);

  const [category, setcategory] = useState("all");



  const Gettrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      settrending(data.results);
      
      
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

 

   

  const GetHeaderwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };



  useEffect(() => {
    Gettrending();
    !wallpaper && GetHeaderwallpaper();
  }, [category]);






  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflowx-hidden">

        <TopNav />

        <Header data={wallpaper} />


        <div className="flex justify-between p-5">
          <h1 className="text-zinc-400 text-3xl  font-semibold">
            <i className="ri-fire-fill mr-2"></i>Trending
          </h1>

          <DropDown
            title="Filter"
            options={["tv", "movies", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
