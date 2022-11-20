import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";

const AddDoctor = () => {
  const navigate = useNavigate()
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/treatment/specialty");
      const data = await res.json();
      return data;
    },
  });
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const { register, handleSubmit } = useForm();

  const doctorInfo = (data) => {
    const photo = data.photo[0];

    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const img = imgData.data.url;
          const doctor = {
            name: data.name,
            img: img,
            specialty: data.specialty,
          };
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("AccessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
             toast.success('Doctor added successfully')
             navigate('/dashboard/manageDoctor')
            });
        }
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4 ">Add a Doctor</h1>
      <div className="">
        <div className="">
          <div className="card w-full max-w-sm shadow-2xl bg-base-300">
            <form onSubmit={handleSubmit(doctorInfo)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Specialty</span>
                </label>
                <select
                  {...register("specialty")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Please pick a specialty
                  </option>

                  {specialties.map((specialty) => (
                    <option key={specialty._id} value={specialty.name}>
                      {specialty.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photo")}
                  type="file"
                  placeholder=""
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
