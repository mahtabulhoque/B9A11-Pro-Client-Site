import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const JobCards = ({ job }) => {
  const {
    category,
    _id,
    userName,
    salaryRange,
    postingDate,
    applicationDeadline,
    applicants
  } = job || {};

  return (
    <motion.div className="bg-zinc-300 rounded-lg shadow-lg p-4 mb-4" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
    >
      <div className="">
        <div className="justify-between items-center mb-2 text-gray-800">
          <h3 className="text-lg font-semibold"></h3>
          <span className="text-amber-700 text-md font-semibold">Posted by: {userName} </span>
        </div>
        <div className="justify-between items-center mb-2">
          <h3 className="text-lg font-semibold"></h3>
          <span className="text-sky-700 text-md font-bold">Job Category: {category} </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-700 text-md font-bold">Posting Date: {postingDate} </span>
          <span className="text-red-700 text-md font-semibold">Deadline: {applicationDeadline} </span>
        </div>
        <div className="flex justify-between items-center gap-4 mb-5">
          <span className="text-blue-800 text-md">Salary Range: {salaryRange}</span>
          <span className="text-amber-700 text-md">Applicants: {applicants} </span>
        </div>
      </div>

      <Link to={`/job/${_id}`}>
        <motion.button 
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }} // Animation properties on hover
        >
          View Details
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default JobCards;
