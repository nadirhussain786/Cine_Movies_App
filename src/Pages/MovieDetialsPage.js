import React from "react";
import { useParams } from "react-router-dom";
import ReuseableSwiper from "../components/ReuseableSwiper";
import { useGetSingleMovieDetailQuery } from "../Services/MoviesApi";
import { useGetKeywordsRelatedMovieQuery } from "../Services/MoviesApi";
import { useGetMovieCasteQuery } from "../Services/MoviesApi";
import { useGetSimilarMoviesQuery } from "../Services/MoviesApi";
import { useGetMovieReviewsQuery } from "../Services/MoviesApi";
import { MovieReviews } from "../components/MovieReviews";
import { ApiErrorLoader } from "../shared/ApiErrorLoader";
import { MovieKeywords } from "../components/MovieKeywords";
import { MovieDetialPoster } from "../components/MovieDetialPoster";

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

  return (
    <div className=" flex flex-column detials w-6 px-4">
      <ApiErrorLoader error={error} isLoading={isLoading}>
        <MovieDetialPoster data={data} />
      </ApiErrorLoader>
      <div>
        <ApiErrorLoader error={keywordError} isLoading={keywordIsLoading}>
          <MovieKeywords data={keywordData} />
        </ApiErrorLoader>
        <h2 className="my-2 text-3xl cast">Cast</h2>
        <ApiErrorLoader error={casteError} isLoading={casteIsLoading}>
          <ReuseableSwiper data={casteData?.cast} />
        </ApiErrorLoader>
        {movieReviewData?.results !== 0 ? (
          <div>
            <h2 className="my-2 text-3xl cast">Reviews</h2>
            <ApiErrorLoader
              error={movieReviewError}
              isLoading={movieReviewIsLoading}
            >
              <MovieReviews movieReviewData={movieReviewData?.results} />
            </ApiErrorLoader>
          </div>
        ) : null}
        {similarMovieData?.results.length !== 0 ? (
          <div>
            <h2 className="my-2 text-3xl cast">Similar Movies</h2>
            <ApiErrorLoader
              error={similarMovieError}
              isLoading={similarMovieIsLoading}
            >
              <ReuseableSwiper
                data={similarMovieData?.results}
                areMovies={true}
              />
            </ApiErrorLoader>
          </div>
        ) : null}
      </div>
    </div>
  );
};
