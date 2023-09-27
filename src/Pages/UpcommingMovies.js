import React from "react";
import MoviesListCard from "../shared/MoviesListCard";
import { ApiErrorLoader } from "../shared/ApiErrorLoader";
import { useGetUpcommingMoviesDataQuery } from "../Services/MoviesApi";

export const UpcommingMovies = () => {
  const { data, error, isLoading } = useGetUpcommingMoviesDataQuery();

  

  return (
    <div className="w-6 small-view">
      <ApiErrorLoader  error={error} isLoading={isLoading}>
      <MoviesListCard data={data?.results} title="Upcomming Movies" />
      </ApiErrorLoader>
    </div>
  );
};
