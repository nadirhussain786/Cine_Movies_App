import React from "react";
import { Button } from "primereact/button";

export const MovieDetialPoster = ({ data }) => {
  const background_1_Poster = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
  };
  const background_2_Poster = {
    background: "rgba(0,0,0,0.7)",
  };
  const postImage = `https://image.tmdb.org/t/p/original${data?.poster_path}`;
  return (
    <div
      className="description border-round-2xl details-card"
      style={background_1_Poster}
    >
      <div
        className="flex align-items-end p-2 border-round-2xl"
        style={background_2_Poster}
      >
        <img
          className="w-5 border-round-xl "
          src={postImage}
          alt="description img"
        />

        <div className="p-2">
          <h3 className="uppercase">{data?.title}</h3>
          <p className="detail-breakpoint-ellipse detail-breakpoint detail-breakpoint-ellipse">
            {data?.overview}
          </p>
          <a href={data?.homepage}>
            <Button className="dialog-btn h-2rem my-2" label="Watch" />
          </a>
        </div>
      </div>
    </div>
  );
};
