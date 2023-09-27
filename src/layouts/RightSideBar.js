import React from "react";
import { MoviesInfoCard } from "../shared/MoviesInfoCard";
import { useGetPopularMoviesDataQuery } from "../Services/MoviesApi";
import { useGetUpcommingMoviesDataQuery } from "../Services/MoviesApi";
import { Loader } from "../shared/Loader";
import { useScreenWidth } from "../Hooks/ScreenWidthHook";

export const RightSideBar = () => {
  const { data, error, isLoading } = useGetPopularMoviesDataQuery();
  const width = useScreenWidth();
  const {
    data: upcommingMoviesData,
    error: upcommingMoviesError,
    isLoading: upcommingMoviesIsLoading,
  } = useGetUpcommingMoviesDataQuery();

  if (error || upcommingMoviesError)
    return <span>Oh no, there was an error</span>;
  if (isLoading || upcommingMoviesIsLoading) return <Loader />;

  return width === 630 ? null : (
    <div className="flex flex-column align-items-center w-3">
      <MoviesInfoCard title="Popular Movies" data={data} />
      <MoviesInfoCard title="Upcoming Movies" data={upcommingMoviesData} />
    </div>
  );
};
