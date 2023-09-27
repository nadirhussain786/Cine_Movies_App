import React from "react";
import { SwiperContainer } from "../components/Swiper";
import { TopRatedMovies } from "../components/TopRatedMovies";

export const MainContainer = () => {
  return (
    <div className="flex flex-column w-6 mx-2 main-container">
      <div
        className="flex flex-row gap-3 text-lg my-2"
        style={{ color: "#0d253f" }}
      >
        <h4>Movie</h4>
        <h4>TV Show</h4>
      </div>

      {/** Rename something appropriate */}
      <SwiperContainer />
      <h3 className="my-2">Top Rated Movies</h3>
      <TopRatedMovies />
    </div>
  );
};
