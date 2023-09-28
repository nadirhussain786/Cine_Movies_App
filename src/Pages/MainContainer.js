import React from "react";
import { SwiperContainer } from "../components/Swiper";
import { TopRatedMoviesSwiper } from "../components/TopRatedMoviesSwiper";
import { useGetAllMoviesDataQuery } from "../Services/MoviesApi";
import { ApiErrorLoader } from "../shared/ApiErrorLoader";
export const MainContainer = () => {
  const { data, error, isLoading } = useGetAllMoviesDataQuery();

  return (
    <div className="flex flex-column w-6 mx-2 main-container">
      <div className="flex flex-row gap-3 text-lg my-2 main-container">
        <h4>Movie</h4>
        <h4>TV Show</h4>
      </div>

      {/** Rename something appropriate */}
      <ApiErrorLoader error={error} isLoading={isLoading}>
        <SwiperContainer data={data} />
      </ApiErrorLoader>
      <h3 className="my-2">Top Rated Movies</h3>
      <TopRatedMoviesSwiper />
    </div>
  );
};
