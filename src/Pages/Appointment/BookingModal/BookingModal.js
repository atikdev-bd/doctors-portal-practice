import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const date = format(selectedDate, "PP");

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
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              disabled
              value={date}
              className="input  border-none rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email"
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
