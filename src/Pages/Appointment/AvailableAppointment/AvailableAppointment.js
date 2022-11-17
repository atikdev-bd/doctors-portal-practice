import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate }) => {

  const date = format(selectedDate, 'PP')
  const [treatment, setTreatment] = useState(null)


  //** use query is soo useful for data fetch **/
  const {data : appointmentOption = [], refetch}= useQuery({
    queryKey : ['appointment', date],
    queryFn : ()=> fetch(`http://localhost:5000/appointment?date=${date}`)
    .then((res) => res.json())

  })

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
            setTreatment ={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
     {
        treatment && 
        <BookingModal
        refetch ={refetch}
        selectedDate ={selectedDate}
        treatment ={treatment}
        setTreatment = {setTreatment}
        ></BookingModal>
     }
    </div>
  );
};

export default AvailableAppointment;
