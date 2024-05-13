import { Link } from "react-router-dom";


const JobCards = ({job}) => {
  

  
  const {category, _id,  userName,salaryRange,postingDate,
    applicationDeadline } = job || {}
 console.log(job);
  
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="justify-between items-center mb-2">
        <h3 className="text-lg font-semibold"></h3>
        <span className="text-gray-500">Posted by:{userName} </span>
      </div>
      <div className="justify-between items-center mb-2">
        <h3 className="text-lg font-semibold"></h3>
        <span className="text-gray-500">Job Category :{category} </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500">Posting Date: {postingDate} </span>
        <span className="text-gray-500">Deadline: {applicationDeadline} </span>
      </div>
      <div className="flex justify-between items-center gap-4 mb-5">
        <span className="text-gray-500">Salary Range:{salaryRange}</span>
        <span className="text-gray-500">Applicants: {} </span>
      </div>
       <Link to={`/job/${_id}`}>

       <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
        View Details
      </button>
       
       
       </Link>
    </div>
  );
};

export default JobCards;
