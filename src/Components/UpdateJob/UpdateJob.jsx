import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../Provider/AuthProvider';

const fetchJobById = async (id) => {
  const response = await axios.get(`http://localhost:5000/job/${id}`);
  return response.data;
};

const updateJob = async ({ id, jobData }) => {
  const response = await axios.put(`http://localhost:5000/updateJob/${id}`, jobData);
  return response.data;
};

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [postingDate, setPostingDate] = useState(null);
  const [applicationDeadline, setApplicationDeadline] = useState(null);

  const queryClient = useQueryClient();

  const { data: job, isLoading, isError } = useQuery({
    queryKey: ['job', id],
    queryFn: () => fetchJobById(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (job) {
      setPostingDate(new Date(job.postingDate));
      setApplicationDeadline(new Date(job.applicationDeadline));
    }
  }, [job]);

  const mutation = useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries(['job', id]);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Job updated successfully!',
      });
      navigate('/myJobs'); // Navigate to a different page after update
    },
    onError: (error) => {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const pictureUrl = e.target.elements.pictureUrl.value;
    const title = e.target.elements.title.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const category = e.target.elements.category.value;
    const salaryRange = e.target.elements.salaryRange.value;
    const description = e.target.elements.description.value;

    if (
      pictureUrl &&
      title &&
      category &&
      salaryRange &&
      description &&
      postingDate &&
      applicationDeadline
    ) {
      const jobData = {
        pictureUrl,
        title,
        userName,
        userEmail,
        category,
        salaryRange,
        description,
        postingDate: postingDate.toLocaleDateString(),
        applicationDeadline: applicationDeadline.toLocaleDateString(),
        applicants: job.applicants, // preserve the number of applicants
      };

      mutation.mutate({ id, jobData });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields!',
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading job data</div>;

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Update Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Picture URL of the Job Banner:</label>
          <input type="text" name="pictureUrl" defaultValue={job.pictureUrl} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Title:</label>
          <input type="text" name="title" defaultValue={job.title} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Logged In User Name:</label>
          <input type="text" name="userName" defaultValue={user?.displayName} readOnly className="w-full px-3 py-2 border rounded-md bg-gray-100" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">User Email:</label>
          <input type="email" name="userEmail" defaultValue={user?.email} readOnly className="w-full px-3 py-2 border rounded-md bg-gray-100" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Category:</label>
          <select name="category" defaultValue={job.category} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
            <option value="">Select Category</option>
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Salary range:</label>
          <input type="text" name="salaryRange" defaultValue={job.salaryRange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Description:</label>
          <textarea name="description" defaultValue={job.description} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" rows="4"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Job Posting Date:</label>
          <DatePicker selected={postingDate} onChange={(date) => setPostingDate(date)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Application Deadline:</label>
          <DatePicker selected={applicationDeadline} onChange={(date) => setApplicationDeadline(date)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateJob;
