import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDhkZWI2ZmY4NzFjYjc4NzNkNTc5YmQ3YTAyZjE0OCIsInN1YiI6IjY1MDJmZTgxMWJmMjY2MDExYzc5M2UzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sN6coDIjqGmOjysRNjdGp2Rrc-mIYkf_V6WOhI4SuZE";

const headersData = {
  Authorization: `Bearer ${token}`,
};

export const MoviesApi = createApi({
  reducerPath: "MoviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),

  endpoints: (builder) => ({
    getAllMoviesData: builder.query({
      query: () => ({
        url: "/movie/now_playing?language=en-US&page=1",
        method: "GET",
        headers: headersData,
      }),
    }),
    getTopRatedMoviesData: builder.query({
      query: () => ({
        url: "/movie/top_rated?language=en-US",
        method: "GET",
        headers: headersData,
      }),
    }),
    getPopularMoviesData: builder.query({
      query: () => ({
        url: "/movie/popular?language=en-US&page=1",
        method: "GET",
        headers: headersData,
      }),
    }),
    getUpcommingMoviesData: builder.query({
      query: () => ({
        url: "/movie/upcoming?language=en-US&page=1",
        method: "GET",
        headers: headersData,
      }),
    }),
    getSingleMovieDetail: builder.query({
      query: (id) => ({
        url: `/movie/${id}?language=en-US`,
        method: "GET",
        headers: headersData,
      }),
    }),
    getKeywordsRelatedMovie: builder.query({
      query: (id) => ({
        url: `/movie/${id}/keywords`,
        method: "GET",
        headers: headersData,
      }),
    }),
    getMovieCaste: builder.query({
      query: (id) => ({
        url: `/movie/${id}/credits?language=en-US`,
        method: "GET",
        headers: headersData,
      }),
    }),
    getSimilarMovies: builder.query({
      query: (id) => ({
        url: `/movie/${id}/similar?language=en-US&page=1`,
        method: "GET",
        headers: headersData,
      }),
    }),
    getMovieReviews: builder.query({
      query: (id) => ({
        url: `/movie/${id}/reviews?language=en-US&page=1`,
        method: "GET",
        headers: headersData,
      }),
    }),
    getSingleCastDetialData: builder.query({
      query: (id) => ({
        url: `/person/${id}?language=en-US`,
        method: "GET",
        headers: headersData,
      }),
    }),
    getSearchMovies: builder.query({
      query: (search_key) => ({
        url: `/search/movie?query=${search_key}&include_adult=false&language=en-US&page=1`,
        method: "GET",
        headers: headersData,
      }),
    }),
  }),
});

export const {
  useGetAllMoviesDataQuery,
  useGetTopRatedMoviesDataQuery,
  useGetPopularMoviesDataQuery,
  useGetUpcommingMoviesDataQuery,
  useGetSingleMovieDetailQuery,
  useGetKeywordsRelatedMovieQuery,
  useGetMovieCasteQuery,
  useGetSimilarMoviesQuery,
  useGetMovieReviewsQuery,
  useGetSingleCastDetialDataQuery,
  useGetSearchMoviesQuery,
} = MoviesApi;
