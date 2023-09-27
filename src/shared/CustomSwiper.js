import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/styles/TopRatedSwiper.css";
import { FreeMode } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const ReuseableSwiper = ({ data, areMovies }) => {
  return (
    <div className="reuseableswiper">
      <Swiper
        slidesPerView={8}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          
        }}
        
        loop={false}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper my-2 h-15rem"
        breakpoints={{
          "@0.00": {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
      >
        {data?.map((currValue, i) => (
          <div key={i + "b"}>
            <SwiperSlide className="w-7rem">
              <Link
                to={
                  areMovies
                    ? `/movie/details/${currValue.id}`
                    : `/cast/details/${currValue.id}`
                }
                key={i}
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      areMovies ? currValue.poster_path : currValue.profile_path
                    }`}
                    alt="sample img"
                  />
                  <div className="p-1">
                    <h5 className="my-1">{areMovies ? currValue.title : currValue.name}</h5>
                    <p className="text-xs my-2">
                      {areMovies ? currValue.release_date : currValue.character}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default ReuseableSwiper;
