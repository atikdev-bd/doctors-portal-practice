import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

import bgImg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = () => {
  const [selectDate, setSelectDate] = useState(new Date());

  return (
    <header
      className="p-12"
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className=" w-3/4 lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="mr-12 rounded-sm p-4">
            <DayPicker
              mode="single"
              selected={selectDate}
              onSelect={setSelectDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      <h1 className="text-xl ml-14">selected date : {format(selectDate, 'PP')}</h1>
    </header>
  );
};

export default AppointmentBanner;
