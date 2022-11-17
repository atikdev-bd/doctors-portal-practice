import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/Svg/icons8-google.svg";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const navigate = useNavigate()
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const registerInfo = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const userInfo = {
      displayName: name,
    };

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(userInfo)
          .then((result) => {
            usersInfo(email, userInfo?.displayName)
            
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const usersInfo = (email, name) => {
    const user = {
      email,
      name,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      navigate ("/")
    })
   
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Here !</h1>
          </div>

          <form
            onSubmit={handleSubmit(registerInfo)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  placeholder="full name"
                  className="input input-bordered"
                  required
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
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  {...register("password")}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Register</button>
              </div>
              <p>
                Already have an account :
                <button className="btn text-emerald-500 btn-active btn-link">
                  <Link to="/login">Login Here</Link>
                </button>
              </p>
              <div
                onClick={googleLogin}
                className="flex justify-center items-center cursor-pointer border bg-emerald-200 hover:bg-emerald-300 rounded-full"
              >
                <img className="w-12 " src={GoogleIcon} alt="" />
                <p className="px-4">continue with google</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
