import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/Svg/icons8-google.svg";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../Hooks/UseToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const from = location.state?.from?.pathname || "/";
  const { emailAndPasswordLogin, googleLogin } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const [token] = useToken(loginUserEmail);
  if (token) {
    navigate(from, { replace: true });
  }

  const loginInfo = (data) => {
    const email = data.email;
    const password = data.password;
    emailAndPasswordLogin(email, password)
      .then((result) => {
        setLoginUserEmail(email);
        navigate(from, { replace: true });
      })
      .catch((error) =>{

      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <form onSubmit={handleSubmit(loginInfo)}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>
              <div>
                <h1>
                  New to Doctors Portal?{" "}
                  <Link className="text-secondary" to="/register">
                    Create new account
                  </Link>
                </h1>
              </div>
              <div className="divider text-slate-900">OR</div>
              <div
                onClick={handleGoogle}
                id="login-id"
                className="flex mt-4 justify-center items-center border cursor-pointer bg-emerald-200 hover:bg-emerald-300  rounded-full"
              >
                <img className="w-12 " src={GoogleIcon} alt="" />
                <p className="px-4">continue with google</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
