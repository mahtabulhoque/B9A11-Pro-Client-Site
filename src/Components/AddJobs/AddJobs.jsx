import  { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker"; // Import DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const AddJobs = () => {
  const { user } = useContext(AuthContext);
  const [postingDate, setPostingDate] = useState(null); // State for posting date
  const [applicationDeadline, setApplicationDeadline] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve form values directly from the form elements
    const pictureUrl = e.target.elements.pictureUrl.value;
    const title = e.target.elements.title.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const category = e.target.elements.category.value;
    const salaryRange = e.target.elements.salaryRange.value;
    const description = e.target.elements.description.value;
   

    // Check if all required fields are filled
    if (
      pictureUrl &&
      title &&
      category &&
      salaryRange &&
      description &&
      postingDate &&
      applicationDeadline
    ) {
      try {
        // Prepare data for the POST request
        const jobData = {
          pictureUrl,
          title,
          userName,
          userEmail,
          category,
          salaryRange,
          description,
          postingDate:postingDate.toLocaleDateString(),
          applicationDeadline : applicationDeadline.toLocaleDateString(),
          applicants:0,
        };

        //  POST request to the server
        await axios.post("https://b9-a11-assignment-server-site.vercel.app/addJobs", jobData,{withCredentials:true});

        // success message to the user
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Job added successfully!",
        });

        // Reset form fields after successful submission (if needed)
        e.target.reset();
      } catch (err) {
        // Handle errors
        console.error("Error:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
        });
      }
    } else {
      // Show error message if any required field is missing
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields!",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add A Job</h1>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        {/* Picture URL */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Picture URL of the Job Banner:
          </label>
          <input
            type="text"
            name="pictureUrl"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Job Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Title:
          </label>
          <input
            type="text"
            name="title"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Logged In User Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Logged In User Name:
          </label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-100"
          />
        </div>
        {/* User Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            User Email:
          </label>
          <input
            type="email"
            name="userEmail"
            defaultValue={user?.email}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-100"
          />
        </div>
        {/* Job Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Category:
          </label>
          <select
            name="category"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        {/* Salary range */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Salary range:
          </label>
          <input
            type="text"
            name="salaryRange"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Job Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Description:
          </label>
          <textarea
            name="description"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Posting Date:
          </label>
          <DatePicker
            selected={postingDate} 
            onChange={(date) => setPostingDate(date)} 
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Application Deadline */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Application Deadline:
          </label>
          <DatePicker
            selected={applicationDeadline} 
            onChange={(date) => setApplicationDeadline(date)}
            changes
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJobs;
