import React, { useContext } from "react";
import { AiFillLock, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
const Login = () => {
  const axios = useAxios();
  const location = useLocation();
  const navigate = useNavigate();

  const { handleGooleLogin, handleLoginWithEmailPass, logOut, user } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");

    const password = form.get("password");

    handleLoginWithEmailPass(email, password)
      .then((res) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        logOut();
        toast.error(err.message);
      });
  };

  const googleLogin = () => {
    handleGooleLogin()
      .then((res) => {
        axios.post("/jwt", res.email).then((res) => {
          console.log(res);
        });

        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Logged In");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0  max-w-md shadow-2xl bg-base-100 md:w-[370px">
          <h2 className="tect-center mx-auto text-3xl">Login</h2>
          <form onSubmit={handleLogin} className="card-body mx-auto max-w-md -ml-5 ">
            <div className="form-control max-w-md ">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <span className="relative">
                <GoPeople className="absolute left-2 top-1/3"></GoPeople>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your email"
                  className="input border border-b-slate-400 border-t-0 border-x-0  md:w-[300px] px-7"
                  required
                />
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>

              <span className="relative">
                <AiFillLock className="absolute top-1/3 left-2"></AiFillLock>
                <input
                  type="password"
                  name="password"
                  placeholder="type your password"
                  className="input  px-7 border border-b-slate-400 border-t-0 md:w-[300px] border-x-0 "
                  required
                />
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control  mt-6">
              <input
                type="submit"
                className="btn btn-primary   bg-gradient-to-r from-[#22c3d8] via-purple-500 md:w-[300px] to-pink-500"
                value={"Login"}
                name=""
                id=""
              />
            </div>
            <p>Or Sign In with</p>
            <div className="form-control">
              <span className=" flex gap-4 justify-center text-3xl">
                <FcGoogle onClick={() => googleLogin()}></FcGoogle>
                <AiFillFacebook className="text-blue-700 rounded-full"></AiFillFacebook>
                <AiOutlineTwitter className="text-blue-700"></AiOutlineTwitter>
              </span>
            </div>
            <p>
              Have not Account ? <Link to={"/register"}>Sign Up</Link>
            </p>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
