import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import SingleJob from "../SingleJob/SingleJob";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'; // Import SweetAlert2

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobs", user?.email],
    queryFn: async () => {
      if (!user?.email) throw new Error("User email is not available");
      const response = await axios.get(`http://localhost:5000/jobs/${user.email}`,{ withCredentials : true });
      return response.data;
    },
    enabled: !!user?.email,
  });

  // delete a job function
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`http://localhost:5000/jobs/${id}`,{ withCredentials : true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["jobs", user?.email]);
      Swal.fire({
        title: 'Success!',
        text: 'Job has been deleted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    },
  });

  // delete Function
  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

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
        {data && data.length === 0 ? (
          <h1 className="text-center text-2xl m-10">No data added</h1>
        ) : (
          data?.map(job => (
            <SingleJob key={job._id} job={job} onDelete={() => handleDelete(job._id)} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyJobs;
