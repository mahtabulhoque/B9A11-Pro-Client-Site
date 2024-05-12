

const JobCards = ({job}) => {
  const {name, job_title, } = job || {}
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="justify-between items-center mb-2">
        <h3 className="text-lg font-semibold"></h3>
        <span className="text-gray-500">Posted by:{name} </span>
      </div>
      <div className="justify-between items-center mb-2">
        <h3 className="text-lg font-semibold"></h3>
        <span className="text-gray-500">Job Title:{job_title} </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500">Posting Date: </span>
        <span className="text-gray-500">Deadline: </span>
      </div>
      <div className="flex justify-between items-center gap-4 mb-5">
        <span className="text-gray-500">Salary Range:</span>
        <span className="text-gray-500">Applicants: </span>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
        View Details
      </button>
    </div>
  );
};

export default JobCards;
