import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser,setUser,updateUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password.length < 6 || !/[A-Z]/.test(data.password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 characters long and contain at least one uppercase letter!",
      });
      return;
    }

    try {
      const result = await createUser(data.email, data.password);
      const user = result.user;
      console.log(user);

      updateUser({ name: data.name, photoUrl: data.photoUrl }); 



      setUser({ name: data.name, photoUrl: data.photoUrl });


        Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Registration successful!",
      });
      reset();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="m-2 lg:m-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover rounded-lg bg-center min-h-svh my-10"
        style={{
          backgroundImage: "url('bg2.jpg')",
        }}
      >
        <div className="max-w-xl mx-auto mt-8 my-16">
          <div className="text-4xl text-center font-extrabold text-white py-10">
            <h1>Register Here</h1>
          </div>

          <div className="p-10">
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ duration: 1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-violet-100 shadow-xl bg-opacity-75 rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-md font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Name"
                  type="text"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    Name is required.
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-md font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="shadow appearance-none bg-gray-100  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-md font-bold mb-2"
                  htmlFor="photoUrl"
                >
                  Photo URL
                </label>
                <input
                  {...register("photoUrl")}
                  className="shadow appearance-none border bg-gray-100  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="photoUrl"
                  type="text"
                  placeholder="Photo URL"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-md font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true, minLength: 6 })}
                  className="shadow appearance-none bg-gray-100  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    Password must be at least 6 characters long.
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-md focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
                <div className="flex">
                  <p className="text-gray-700">Already have an account?</p>
                  <Link className="font-semibold text-blue-700" to="/logIn">
                    LogIn
                  </Link>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
