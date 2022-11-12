import React from "react";

const Service = ({ data }) => {
  const { serviceName, description, icon } = data;
  return (
    <section>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-2 pt-10">
          <img
            src={icon}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{serviceName}</h2>
          <p>{description}</p>
         
        </div>
      </div>
    </section>
  );
};

export default Service;
