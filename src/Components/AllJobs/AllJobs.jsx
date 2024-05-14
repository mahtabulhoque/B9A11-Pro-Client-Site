import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
        <div>
      <h2 className="text-[30px] lg:text-[40px] font-extrabold text-center text-rose-600 py-10">
        My Jobs
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {

               data.map(dat => <AllJobsCard key={dat.id} datas={dat}></AllJobsCard>)

            
        }
      </div>
    </div>
    );
};

export default AllJobs;