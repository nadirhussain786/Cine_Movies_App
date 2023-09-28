import React from "react";
import { MoviesInfoCard } from "../shared/MoviesInfoCard";
import { useGetPopularMoviesDataQuery } from "../Services/MoviesApi";
import { useGetUpcommingMoviesDataQuery } from "../Services/MoviesApi";
import { useScreenWidth } from "../Hooks/ScreenWidthHook";
import { ApiErrorLoader } from "../shared/ApiErrorLoader";

export const RightSideBar = () => {
  const { data, error, isLoading } = useGetPopularMoviesDataQuery();
  const width = useScreenWidth(630);
  const {
    data: upcommingMoviesData,
    error: upcommingMoviesError,
    isLoading: upcommingMoviesIsLoading,
  } = useGetUpcommingMoviesDataQuery();

  return width ? null : (
    <div className="flex flex-column align-items-center w-3">
      <ApiErrorLoader error={error} isLoading={isLoading}>
        <MoviesInfoCard title="Popular Movies" data={data} />
      </ApiErrorLoader>
      <ApiErrorLoader
        error={upcommingMoviesError}
        isLoading={upcommingMoviesIsLoading}
      >
        <MoviesInfoCard title="Upcoming Movies" data={upcommingMoviesData} />
      </ApiErrorLoader>
    </div>
  );
};
