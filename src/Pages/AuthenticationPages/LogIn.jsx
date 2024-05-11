import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

import backgroundImage from "../../../public/bg3.jpg";


const LogIn = () => {



    const { signInUser, signInWithGoogle} =
    useContext(AuthContext); // Import signInWithGoogle
  const location = useLocation();
  const navigate = useNavigate();


    // Email & password Login

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const result = await signInUser(email, password);
      console.log(result);
      e.target.reset();

      navigate(location?.state?.from ? location.state.from : "/");

      Swal.fire({
        title: "Success!",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Invalid email or password.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

    // Google Login

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "You have successfully signed in with Google.",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(location?.state?.from ? location.state.from : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to sign in with Google.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };






  return (
    <div className="hero min-h-screen my-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="hero-content flex-col relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl font-bold">Login now</h1>
          <p className="py-6 text-2xl">Please fill out this form</p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="card shrink-0 max-w-md shadow-2xl bg-opacity-50 rounded px-10 pt-6 pb-10 mb-4 bg-slate-300"
        >
          <form onSubmit={handleLogin} className="card-body">

            <div className="form-control ">
            <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="input input-bordered bg-slate-100"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-slate-100"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>


            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center text-[18px] p-2 m-3">
            Do not have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </p>
          <div className="">
            <h1 className="text-center font-bold text-slate-500 text-[18px]">
              You can also Login with
            </h1>
            <div className="flex justify-evenly pb-6">
              <div>
                <p>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn font-bold text-[20px] text-green-500 "
                  >
                    Google
                  </button>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LogIn;