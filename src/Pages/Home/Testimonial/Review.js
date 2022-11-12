import React from "react";

const Review = ({ revInfo }) => {
  const { name, location, review, img } = revInfo;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review}</p>
          <div className="card-actions flex items-center">
            <div className="avatar mt-4 ">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="" src={img} />
              </div>
            </div>
            <div className="my-auto ml-6">
                <h2>{name}</h2>
                <h4>{location}</h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
