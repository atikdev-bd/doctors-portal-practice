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
            className="max-w-sm  lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
            <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
            </p>
                    <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
