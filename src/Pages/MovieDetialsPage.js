import React from "react";
import { useParams } from "react-router-dom";
import ReuseableSwiper from "../shared/CustomSwiper";
import { useGetSingleMovieDetailQuery } from "../Services/MoviesApi";
import { useGetKeywordsRelatedMovieQuery } from "../Services/MoviesApi";
import { useGetMovieCasteQuery } from "../Services/MoviesApi";
import { useGetSimilarMoviesQuery } from "../Services/MoviesApi";
import { Button } from "primereact/button";
import { Loader } from "../shared/Loader";
import { useGetMovieReviewsQuery } from "../Services/MoviesApi";
import { MovieReviews } from "../components/MovieReviews";
import { ApiErrorLoader } from "../shared/ApiErrorLoader";

export const MovieDetialsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSingleMovieDetailQuery(id);
  const {
    data: keywordData,
    error: keywordError,
    isLoading: keywordIsLoading,
  } = useGetKeywordsRelatedMovieQuery(id);
  const {
    data: casteData,
    error: casteError,
    isLoading: casteIsLoading,
  } = useGetMovieCasteQuery(id);
  const {
    data: similarMovieData,
    error: similarMovieError,
    isLoading: similarMovieIsLoading,
  } = useGetSimilarMoviesQuery(id);

  const {
    data: movieReviewData,
    error: movieReviewError,
    isLoading: movieReviewIsLoading,
  } = useGetMovieReviewsQuery(id);

  if (
    error ||
    keywordError
  )
    return <span>Oh no, there was an error</span>;
  if (
    isLoading ||
    keywordIsLoading 
  )
    return <Loader />;

  const background_1_Poster = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
  };
  const background_2_Poster = {
    background: "rgba(0,0,0,0.7)",
  };
  const postImage = `https://image.tmdb.org/t/p/original${data?.poster_path}`;

  return (
    <div className=" flex flex-column detials w-6 px-4">
      <div className="description border-round-2xl details-card" style={background_1_Poster}>
        <div
          className="flex align-items-end p-2 border-round-2xl"
          style={background_2_Poster}
        >
          <img
            className="w-5  border-round-xl "
            src={postImage}
            alt="description img"
          />

          <div className="p-2">
            <h3 className="uppercase">{data.title}</h3>
            <p className="detail-breakpoint-ellipse detail-breakpoint removeOnResponsive">
              {data.overview}
            </p>
            <a href={data.homepage}>
              <Button className="dialog-btn h-2rem my-2" label="Watch" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="keywords">
          {keywordData.keywords.slice(0, 5).map((currValue) => (
            <span>{currValue.name}</span>
          ))}
        </div>
        <h2 className="my-2 text-3xl cast">Cast</h2>
        <ApiErrorLoader error={casteError} isLoading={casteIsLoading}>
        <ReuseableSwiper data={casteData.cast} />
        </ApiErrorLoader>
        {movieReviewData.results !== 0 ? (
          <div>
            <h2 className="my-2 text-3xl cast">Reviews</h2>
            <ApiErrorLoader error={movieReviewError} isLoading={movieReviewIsLoading}>
            <MovieReviews movieReviewData={movieReviewData.results} />
            </ApiErrorLoader>
          </div>
        ) : null}
        {similarMovieData.results.length !== 0 ? (
          <div>
            <h2 className="my-2 text-3xl cast">Similar Movies</h2>
            <ApiErrorLoader error={similarMovieError} isLoading={similarMovieIsLoading}>
            <ReuseableSwiper data={similarMovieData.results} areMovies={true} />
            </ApiErrorLoader>
          </div>
        ) : null}
      </div>
    </div>
  );
};
