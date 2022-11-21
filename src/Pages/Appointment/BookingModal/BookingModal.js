import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate,refetch }) => {
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const slot = form.slot.value;
    const booking = {
      treatment: treatment.name,
      patient: name,
      email: email,
      phone: phone,
      appointmentDate: date,
      slot: slot,
      Price : treatment?.price
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          setTreatment(null);
          toast.success("successfully");
          refetch()
        }
      });
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center my-2">
            {treatment?.name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="date"
              disabled
              value={date}
              className="input  border-none rounded-md w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {treatment?.slots?.map((slot, index) => (
                <option name="slot" value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              defaultValue={user?.displayName}
              disabled
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />

            <input
              defaultValue={user?.email}
              disabled
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
       
      </div>
    </>
  );
};

export default BookingModal;
