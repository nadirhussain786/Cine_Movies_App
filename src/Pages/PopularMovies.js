import React from "react";
import MoviesListCard from "../shared/MoviesListCard";
import { useGetPopularMoviesDataQuery } from "../Services/MoviesApi";
import { ApiErrorLoader } from "../shared/ApiErrorLoader";
export const PopularMovies = () => {
  const { data, error, isLoading } = useGetPopularMoviesDataQuery();

  
  return (
    <div className="w-6 small-view">
      <ApiErrorLoader error={error} isLoading={isLoading}>
      <MoviesListCard data={data?.results} title="Popular Movies"/>
      </ApiErrorLoader>
    </div>
  );
};
