import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import SingleJob from "../SingleJob/SingleJob";

const MyJobs = () => {
  const [data, setData] = useState([]);

  // Fetch data using useQuery
  const { isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:5000/jobs");
        setData(response.data); // Set the fetched data to the state
        return response.data; // Return the fetched data
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
            data.length <= 0? (
                <h1 className="text-center text-2xl m-10">No data added</h1>
            ) : (

                data.map(datas => <SingleJob key={datas.id} datas={datas}></SingleJob>)

            )
        }
      </div>
    </div>
  );
};

export default MyJobs;
