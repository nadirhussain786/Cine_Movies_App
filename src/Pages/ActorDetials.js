import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../shared/Loader";
import { useGetSingleCastDetialDataQuery } from "../Services/MoviesApi";

export const ActorDetials = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetSingleCastDetialDataQuery(id);
  if (error) return <span>Oh no, there was an error</span>;
  if (isLoading) return <Loader />;

  return (
    <div className="h-19rem">
      <div className="flex justify-content-start align-items-end caste">
        <img
          className="w-12rem border-round-md"
          src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
          alt="cast img"
        />

        <div className="p-3 flex flex-column gap-3">
          <p>
            <strong>{data.name}</strong>
          </p>
          <p>
            <strong>Depertment : </strong>
            {data.known_for_department}
          </p>
          <p>
            <strong>Birthday : </strong>
            {data.birthday}
          </p>
          <p>
            <strong>Place of Birth : </strong>
            {data.place_of_birth}
          </p>
          <p>
            <strong>Also Known For : </strong>
          </p>
          <p>
            {data.also_known_as.map((currValue) => (
              <span className="px-1">{currValue},</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
