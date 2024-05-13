import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const AllJobs = () => {
    const {data:allJobs, isLoading, isError} = useQuery({
        queryKey:['jobs'],
        queryFn:() => axios.get('http://localhost:5000/jobs')
            
        
    })
    console.log(allJobs?.data);
    if(isLoading){
        return <p>Loading.....</p>
    }
    return (
        <div>
            <h1 className="text-6xl">all jobs</h1>
        </div>
    );
};

export default AllJobs;