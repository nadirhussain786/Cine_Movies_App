import React from "react";
import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";
const MoviesListCard = ({ data,title }) => {
  return (
    <div>
      <div>
        <h2 className="px-3">{title}</h2>
      </div>
      <div className="flex flex-wrap justify-content-evenly align-content-center md:justify-content-evenly sm:justify-content-evenly p-1">
        {data.map((currValue, i) => (
          <Link to={`/movie/details/${currValue.id}`} key={"popular" + i}>
            <div className="w-10rem h-22rem overflow-hidden border-round-lg  my-2 movieListCard">
              <img
                className="w-12 border-round-lg"
                src={`https://image.tmdb.org/t/p/original${currValue.poster_path}`}
                alt="popular movie"
              />
              <div className="py-2  flex flex-column align-items-center justify-content-center">
                <p className="p-2 text-base">{currValue.title}</p>

                <Rating
                  value={currValue.vote_average / 2}
                  readOnly
                  cancel={false}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesListCard;
