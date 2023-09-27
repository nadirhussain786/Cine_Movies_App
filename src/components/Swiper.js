import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../assets/styles/Swiper.css";
import { Pagination } from "swiper/modules";

import { Autoplay } from "swiper/modules";
import { useGetAllMoviesDataQuery } from "../Services/MoviesApi";
import { Loader } from "../shared/Loader";
import { Link } from "react-router-dom";

export const SwiperContainer = () => {
  const { data, error, isLoading } = useGetAllMoviesDataQuery();

  if (error) return <span>Oh no, there was an error</span>;
  if (isLoading) return <Loader />;

  return (
    <div className="mySwiper">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="h-15rem border-round-md"
        autoplay
      >
        {data.results.map((currValue, i) => (
          <div key={i + "swiper"}>
            <SwiperSlide>
              <Link to={`/movie/details/${currValue.id}`} key={i}>
                <div className="absolute  left-0  bottom-0 border-round-sm m-2 p-1 w-7 swiper-info">
                  <h3>{currValue.title}</h3>
                  <span className="detail-breakpoint">
                    {currValue.overview}
                  </span>
                </div>

                <img
                  src={`https://image.tmdb.org/t/p/original${currValue.poster_path}`}
                  alt="sample img"
                />
              </Link>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
