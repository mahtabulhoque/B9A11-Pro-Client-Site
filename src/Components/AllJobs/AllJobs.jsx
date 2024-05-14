import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import banner2 from '../../../public/alljob2.jpg'

import AllJobsCard from "../AllJobsCard/AllJobsCard";
import { useState } from "react";

const AllJobs = () => {
  const [data, setData] = useState([]);

  // Fetch data using useQuery
  const { isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:5000/jobs");
        setData(response.data);
        return response.data;
      } catch (error) {
        throw new Error("Error fetching data");
      }
    },
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div
      className="bg-cover bg-center my-10 p-10 bg-no-repeat rounded-xl min-h-screen"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <div className="bg-black bg-opacity-20 rounded-xl min-h-screen">
        <h2 className="text-[30px] lg:text-[50px] font-extrabold text-center text-lime-400 py-10">
          All Jobs
        </h2>

        <div className="grid md:grid-cols-3 gap-4 p-4">
          {data.map((dat) => (
            <AllJobsCard key={dat.id} datas={dat}></AllJobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
