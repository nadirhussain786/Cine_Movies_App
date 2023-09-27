import React from "react";
import MoviesListCard from "../shared/MoviesListCard";
import { Loader } from "../shared/Loader";
import { useGetTopRatedMoviesDataQuery } from "../Services/MoviesApi";
export const TopRatedMovies = () => {
  const { data, error, isLoading } = useGetTopRatedMoviesDataQuery();

  if (error) return <span>Oh no, there was an error</span>;
  if (isLoading) return <Loader />;

  return (
    <div className="w-6 small-view">
      <MoviesListCard data={data?.results} />
    </div>
  );
};
