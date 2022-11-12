import React from "react";

import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import Button from "../../../components/Button/Button";

const MakeAppointment = () => {
  return (
    <section className="mt-48"
    style={{
        background : `url(${appointment})`
    }}
    
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="w-1/2 rounded-lg hidden -mt-36 -mb-4 lg:block "
            alt=""
          />
          <div>
            <h1 className="text-2xl text-primary font-bold">Appointment</h1>
            <h4 className="text-4xl text-stone-300">Make an appointment Today</h4>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <Button>Appointment</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
