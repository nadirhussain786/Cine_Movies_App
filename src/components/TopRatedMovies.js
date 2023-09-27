import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles/TopRatedSwiper.css";
// import { FreeMode } from "swiper/modules";
// import { Pagination } from "swiper/modules";
// import { Autoplay } from "swiper/modules";
import { useGetTopRatedMoviesDataQuery } from "../Services/MoviesApi";
import { Loader } from "../shared/Loader";
// import { Link } from "react-router-dom";
import ReuseableSwiper from "./ReuseableSwiper";
export const TopRatedMovies = () => {
  const { data, error, isLoading } = useGetTopRatedMoviesDataQuery();

  if (error) return <span>Oh no, there was an error</span>;
  if (isLoading) return <Loader />;

  return (
    <div>
      <ReuseableSwiper data={data.results} areMovies={true} />
    </div>
  );
};
