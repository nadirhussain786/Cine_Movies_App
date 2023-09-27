import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles/TopRatedSwiper.css";
import { useGetTopRatedMoviesDataQuery } from "../Services/MoviesApi";
import ReuseableSwiper from "../shared/CustomSwiper";
import { ApiErrorLoader } from "../shared/ApiErrorLoader";
export const TopRatedMoviesSwiper = () => {
  const { data, error, isLoading } = useGetTopRatedMoviesDataQuery();

  return (
    <div>
      <ApiErrorLoader error={error} isLoading={isLoading}>
        <ReuseableSwiper data={data.results} areMovies={true} />
      </ApiErrorLoader>
    </div>
  );
};
