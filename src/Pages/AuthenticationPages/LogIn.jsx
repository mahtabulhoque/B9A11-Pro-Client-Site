import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

import backgroundImage from "../../../public/bg3.jpg";
import googleLogo from "../../../public/google.png"


const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state || '/'




    const { signInUser, signInWithGoogle,user, loading} =
    useContext(AuthContext);

    useEffect(()=>{
      if(user){
        navigate('/')
      }
    },[navigate,user])
  

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

      navigate(from, {replace:true});

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
        navigate(from, {replace:true});
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

 if(user || loading) return
  
 




  return (
    <div className="hero min-h-screen my-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-cover bg-center rounded-2xl m-2 lg:m-0 "
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
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-lg">
                    Forgot password?
                  </a>
                </label>
              </div>


            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg">Login</button>
            </div>
          </form>
          <p className="text-center text-[18px] p-2 m-3">
            Do not have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </p>
          <div className="">
            <h1 className="text-center font-bold text-gray-200 text-[18px]">
              You can also Login with
            </h1>
            <div className="flex justify-center items-center pb-6">
             
                  <img className="w-8 h-10" src={googleLogo} alt="" />
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn font-bold text-[20px] bg-gray-200  text-amber-700 "
                  >
                    Google
                  </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LogIn;