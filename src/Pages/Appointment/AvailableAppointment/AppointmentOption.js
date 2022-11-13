import React from "react";
import Button from "../../../components/Button/Button";

const AppointmentOption = ({ option }) => {

    const {name,slots} = option
  console.log(option);
  return (
    <div>
      <div className="card shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{name}</h2>
          <p>{slots?.length > 0 ? slots[0] : 'Try Another Day'}</p>
          <p>{slots?.length} {slots.length > 1 ? "spaces" : 'space'} available</p>
          <div className="card-actions justify-center">
           <Button>Book Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
