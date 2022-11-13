import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;

  return (
    <div>
      <div className="card shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{name}</h2>
          <p>{slots?.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>
            {slots?.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions justify-center">
            <label
            
              onClick={() => setTreatment(option)}
              disabled = {slots?.length === 0}
              htmlFor="booking-modal"
              className="cursor-pointer btn btn-primary bg-gradient-to-r from-primary to-secondary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
