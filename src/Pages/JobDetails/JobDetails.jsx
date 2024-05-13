import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    name,
    job_title,
    salary_range,
    applicants_number
  } = job || {};

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2>Job Title: {job_title}</h2>
        <h2>Name: {name}</h2>
        <h2>description:{}</h2>
        <h2>Salary-range:{salary_range}</h2>
        <h2>Number of Applicants{applicants_number}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
