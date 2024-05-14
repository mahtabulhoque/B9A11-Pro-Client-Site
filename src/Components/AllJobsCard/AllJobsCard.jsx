
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
const AllJobsCard = ({dat}) => {
    const {
        _id,
        photoUrl,
        title,
        category,
        userName,
        salaryRange,
        postingDate,
        applicationDeadline,
        applicants
      } = dat || {};
    
      return (
        <motion.div
          className="bg-zinc-300 rounded-lg shadow-lg p-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="">
            <figure className="px-10 pt-10">
              <img
                src={photoUrl}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="justify-between items-center mb-2 text-gray-800">
              <h3 className="text-lg font-semibold"></h3>
              <span className="text-amber-700 text-md font-semibold">
                Posted by: {userName}{" "}
              </span>
            </div>
            <div className="justify-between items-center mb-2 text-gray-800">
              <h3 className="text-lg font-semibold"></h3>
              <span className="text-amber-700 text-md font-semibold">
                Posted by: {title}{" "}
              </span>
            </div>
            <div className="justify-between items-center mb-2">
              <h3 className="text-lg font-semibold"></h3>
              <span className="text-sky-700 text-md font-bold">
                Job Category: {category}{" "}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-green-700 text-md font-bold">
                Posting Date: {postingDate}{" "}
              </span>
              <span className="text-red-700 text-md font-semibold">
                Deadline: {applicationDeadline}{" "}
              </span>
            </div>
            <div className="flex justify-between items-center gap-4 mb-5">
              <span className="text-blue-800 text-md">
                Salary Range: {salaryRange}
              </span>
              <span className="text-amber-700 text-md">Applicants: {applicants} </span>
            </div>
          </div>
    
    
          <div className="flex gap-6">
    
    
          <Link to={`/job/${_id}`}>
        <motion.button 
          className="bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }} // Animation properties on hover
        >
          View Details
        </motion.button>
      </Link>
          </div>
        
        </motion.div>
      );
    };
    


export default AllJobsCard;