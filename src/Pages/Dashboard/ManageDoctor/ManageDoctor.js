import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Shared/Loader/Loader";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const { data: doctors, isLoading , refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("AccessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (doctor) => {
    fetch(`http://localhost:5000/doctor/${doctor?._id}`,{
        method : 'DELETE',
        headers : {
            authorization : `bearer ${localStorage.getItem('AccessToken')}`
        }
    })
      .then((res) => res.json())
      .then((data) => {
        refetch()
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={doctor.img} alt="doctor-img" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error hover:bg-red-600"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete ?`}
          message={`If you delete ${deletingDoctor.name}. It cannot be undone .`}
          setDeletingDoctor={setDeletingDoctor}
          doctorInfo={deletingDoctor}
          successAction={handleDelete}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctor;
