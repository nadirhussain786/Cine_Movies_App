import React from "react";
import { Rating } from "primereact/rating";
import { Avatar } from "primereact/avatar";

export const MovieReviews = ({ movieReviewData }) => {
  return (
    <div>
      {movieReviewData.slice(0, 3).map((currValue) => (
        <div className="reviews flex flex-column p-2 my-2 border-round-lg">
          <div className="flex flex-row justify-content-between align-items-center	py-2">
            <Avatar
              image={`https://image.tmdb.org/t/p/original/${currValue.author_details.avatar_path}`}
              className="mr-2"
              shape="circle"
            />

            <p className="date">
              <strong>created_at:</strong> {currValue.created_at}
            </p>
          </div>
          {/* <div className="flex flex-column justify-content-center"> */}
            <p className="my-2 reviews-detials">{currValue.content.slice(0, 250)}</p>
          {/* </div> */}
          {/* <div className="card flex justify-content-center "> */}
            <Rating
              value={currValue.author_details.rating / 2}
              readOnly
              cancel={false}
              className="flex justify-content-center my-1"
            />
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};
