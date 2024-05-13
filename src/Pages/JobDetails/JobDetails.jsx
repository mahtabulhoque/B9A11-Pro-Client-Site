import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const JobDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  // Fetch data using useQuery
  const { isLoading, isError } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        setData(response.data); // Set the fetched data to the state
        return response.data; // Return the fetched data
      } catch (error) {
        throw new Error("Error fetching data");
      }
    }
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  // Destructure data to get job details
  const { pictureUrl, title, description, salaryRange } = data[0] || {};

  // State to manage modal open/close
  

  // Function to handle opening and closing modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-gray-200 my-16 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={pictureUrl} alt="Job" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2>Job Title: {title}</h2>
          <h2>Description: {description}</h2>
          <h2>Salary Range: {salaryRange}</h2>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={toggleModal}>
              Apply
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Apply for Job</h2>
            <p>Modal content goes here...</p>
            <button
              className="btn btn-primary mt-4"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
