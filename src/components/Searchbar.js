import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { useGetSearchMoviesQuery } from "../Services/MoviesApi";
import { Loader } from "../shared/Loader";
import { Link } from "react-router-dom";
export const Searchbar = () => {
  const [value, setValue] = useState("");
  const { data, error, isLoading } = useGetSearchMoviesQuery(value);
  const [items, setItems] = useState([]);
  if (error) return <span>Oh no, there was an error</span>;
  if (isLoading) return <Loader />;

  const search = () => {
    setItems(
      data.results.map((currValue, i) => (
        <div>
          <Link
            to={`/movie/details/${currValue.id}`}
            className="suggestions"
            key={`suggestion${i}`}
            onClick={() => {
              setValue(currValue.title);
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${currValue.poster_path}`}
              alt="suggestion img"
            />
            <div className="px-2">
              <h4>{currValue.title}</h4>
              <span>{currValue.release_date}</span>
            </div>
          </Link>
        </div>
      ))
    );
  };

  const search_keyword = (e) => {
    if (typeof e.target.value === "string") {
      setValue(e.target.value);
    }
  };

  return (
    <div className="card flex justify-content-center h-2rem">
      <AutoComplete
        value={value}
        suggestions={items}
        completeMethod={search}
        onChange={(e) => search_keyword(e)}
        inputId="search"
      />

      <label
        htmlFor="search"
        className="flex align-items-center p-2 search-label"
      >
        <span className="pi pi-search"></span>
      </label>
    </div>
  );
};
