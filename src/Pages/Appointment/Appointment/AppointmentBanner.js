import React from "react";
import { DayPicker } from "react-day-picker";

import bgImg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className=""
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="  lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="mr-12 rounded-sm p-4 shadow-lg">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
