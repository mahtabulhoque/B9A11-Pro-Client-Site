import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../Provider/AuthProvider';

const AddJobs = () => {

    const {user} = useContext(AuthContext)

  const [jobData, setJobData] = useState({
    pictureUrl: '',
    title: '',
    userName:user?.displayName,
    userEmail:user?.email,
    category: '',
    salaryRange: '',
    description: '',
    postingDate: new Date(),
    applicationDeadline: new Date(),
    applicantsNumber: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleDateChange = (date, name) => {
    setJobData({ ...jobData, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pictureUrl, title, category, salaryRange, description } = jobData;
    if (pictureUrl && title && category && salaryRange && description) {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Job added successfully!',
        });
        console.log(jobData);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all required fields!',
        });
    }
};
  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Add A Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Picture URL of the Job Banner:</label>
          <input
            type="text"
            name="pictureUrl"
            value={jobData.pictureUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Title:</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Logged In User Name:</label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">User Email:</label>
          <input
            type="email"
            name="userEmail"
            defaultValue={user?.email}
            readOnly
            className="w-full px-3 py-2 border rounded-md bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Category:</label>
          <select
            name="category"
            value={jobData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Salary range:</label>
          <input
            type="text"
            name="salaryRange"
            value={jobData.salaryRange}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Description:</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Posting Date:</label>
          <DatePicker
            selected={jobData.postingDate}
            onChange={(date) => handleDateChange(date, 'postingDate')}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Application Deadline:</label>
          <DatePicker
            selected={jobData.applicationDeadline}
            onChange={(date) => handleDateChange(date, 'applicationDeadline')}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
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
