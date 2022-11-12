import React from "react";
import chair from '../../../assets/images/chair.png'
import backgroundImg from '../../../assets/images/bg.png'
import Button from "../../../components/Button/Button";

const Banner = () => {
  return (
    <section className="mt-12"
        style={{ background: `url(${backgroundImg})`}}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className=" lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
                    <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
