import React from "react";
import MoviesListCard from "../shared/MoviesListCard";
import { ApiErrorLoader } from "../shared/ApiErrorLoader";
import { useGetTopRatedMoviesDataQuery } from "../Services/MoviesApi";
export const TopRatedMovies = () => {
  const { data, error, isLoading } = useGetTopRatedMoviesDataQuery();

  return (
    <div className="w-6 small-view">
      <ApiErrorLoader error={error} isLoading={isLoading}>
      <MoviesListCard data={data?.results} title="Top Rated Movies"/>
      </ApiErrorLoader>
    </div>
  );
};
