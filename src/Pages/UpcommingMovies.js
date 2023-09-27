import React from "react";
import MoviesListCard from "../shared/MoviesListCard";
import { Loader } from "../shared/Loader";
import { useGetUpcommingMoviesDataQuery } from "../Services/MoviesApi";

export const UpcommingMovies = () => {
  const { data, error, isLoading } = useGetUpcommingMoviesDataQuery();

  if (error) return <span>Oh no, there was an error</span>;
  if (isLoading) return <Loader />;

  return (
    <div className="w-6 small-view">
      <MoviesListCard data={data?.results} />
    </div>
  );
};
