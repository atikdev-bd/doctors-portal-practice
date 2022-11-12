import React from "react";

const InfoCard = ({ info }) => {
  const { Icon, description, name, bgClass } = info;

  return (
    <div>
      <div className={`card card-side shadow-xl ${bgClass} text-white py-8 px-4`}>
        <figure className="">
          <img src={Icon} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
