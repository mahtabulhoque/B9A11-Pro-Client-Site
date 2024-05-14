import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";
import { AuthContext } from "../../Provider/AuthProvider";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  // Fetch data using useQuery
  const { isLoading, isError } = useQuery({
    queryKey: ["jobs", user?.email], // Include user email in queryKey to refetch if it changes
    queryFn: async () => {
      try {
        if (!user?.email) throw new Error("User email is not available");
        const response = await axios.get(`http://localhost:5000/jobs?userEmail=${user.email}`);
        setData(response.data); 
        return response.data;
      } catch (error) {
        throw new Error("Error fetching data");
      }
    },
    enabled: !!user?.email, // Only run the query if user email is available
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
          data.length <= 0 ? (
            <h1 className="text-center text-2xl m-10">No data added</h1>
          ) : (
            data.map(datas => <SingleJob key={datas._id} datas={datas}></SingleJob>)
          )
        }
      </div>
    </div>
  );
};

export default MyJobs;
