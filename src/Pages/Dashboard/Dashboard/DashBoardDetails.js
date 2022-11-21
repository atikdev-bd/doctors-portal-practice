import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const DashBoardDetails = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("AccessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h1 className="text-3xl">My Appointment</h1>
      <div className="overflow-x-auto mt-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr key={booking?._id} className="hover">
                <th>{index + 1}</th>
                <td>{booking?.patient}</td>
                <td>{booking?.treatment}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>
                <td>
                  {booking?.Price && !booking?.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-sm btn-primary">Pay</button>
                    </Link>
                  )}
                  {booking?.Price && booking?.paid && (
                    <button className="btn btn-sm btn-primary">Paid</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardDetails;
