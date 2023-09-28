import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Knob } from "primereact/knob";

export const MoviesInfoCard = ({ title, data }) => {
  const header = (
    <div className="text-center py-3">
      <h3 className="text-lg font-semibold ">{title}</h3>
    </div>
  );
  const footer = (
    <Link
      to={title === "Popular Movies" ? "/movie/popular" : "/movie/upcomming"}
      className="flex  justify-content-center"
    >
      <Button className="card-btn mb-1" label="More" />
    </Link>
  );

  return (
    <div>
      <div className="pb-3 infoCard">
        <Card footer={footer} header={header} className="border-round-3xl">
          <div className="flex justify-content-center flex-column align-items-center">
            {data?.results.slice(0, 3).map((currValue, i) => (
              <Link to={`/movie/details/${currValue.id}`} key={i}>
                <div className="flex justify-content-between align-items-center p-1  border-round-3xl mb-1 movieCard">
                  <div className="flex align-items-center gap-2">
                    <img
                      className="card-img w-2rem h-2rem border-circle"
                      src={`https://image.tmdb.org/t/p/original${currValue.poster_path}`}
                      alt="movies sample"
                    />
                    <div className=" flex  flex-column align-items-start ">
                      <h5 className="text-sm font-medium w-3rem overflow-hidden text-overflow-ellipsis infoCardTitle">
                        {currValue.title}
                      </h5>
                      {title === "Popular Movies" ? (
                        <span className="text-xs">
                          {currValue.release_date}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="Knob">
                    {title === "Popular Movies" ? (
                      <Knob
                        className="w-2rem h-2rem"
                        value={
                          Math.trunc((currValue.popularity / 2500) * 100) > 100
                            ? 100
                            : Math.trunc((currValue.popularity / 2500) * 100)
                        }
                        valueColor="#0d253f"
                        rangeColor="lightgray"
                      />
                    ) : (
                      <span className="text-xs releaseDate flex flex-column">
                        <b className="removeOnResponsive"> Release Date:</b>
                        <span>{currValue.release_date}</span>
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
