import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOption, setAppointmentOption] = useState([]);

  useEffect(() => {
    fetch("AppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);
  return (
    <div className="mt-28">
      <h1 className="text-center text-xl text-secondary">
        Available Appointments on {format(selectedDate, "PP")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 ">
        {appointmentOption.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
          ></AppointmentOption>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
