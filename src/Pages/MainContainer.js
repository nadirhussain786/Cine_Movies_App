import React from "react";
import { SwiperContainer } from "../components/Swiper";
import { TopRatedMoviesSwiper } from "../components/TopRatedMoviesSwiper";

export const MainContainer = () => {
  
  return (
    <div className="flex flex-column w-6 mx-2 main-container">
      <div
        className="flex flex-row gap-3 text-lg my-2 main-container"
        
      >
        <h4>Movie</h4>
        <h4>TV Show</h4>
      </div>

      {/** Rename something appropriate */}
      <SwiperContainer />
      <h3 className="my-2">Top Rated Movies</h3>
      <TopRatedMoviesSwiper />
    </div>
  );
};
