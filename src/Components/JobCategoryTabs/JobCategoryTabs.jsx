import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCards from "../JobCards/JobCards";
import { useEffect, useState } from "react";
import axios from "axios";

const JobCategoryTabs = () => {

  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const getData = async () =>{
      const {data} = await axios('http://localhost:5000/jobs')
      setJobs(data)
    }
    getData()
  }, [])


  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="capitalize text-2xl lg:text-4xl text-center py-7 ">job by category</h1>
        <div className="flex items-center justify-center">
          <div className="text-xs lg:text-lg font-semibold">
            <TabList>
              <Tab>On-Site Job</Tab>
              <Tab>Remote Job</Tab>
              <Tab>Hybrid</Tab>
              <Tab>Part-Time</Tab>
            </TabList>
          </div>
        </div>
        
        <TabPanel>
         <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
         {jobs
            .filter(job => job.job_title === "On-Site Job")
            .map(job => (
              <JobCards key={job._id} job={job} />
            ))}
         </div>
        </TabPanel>
        
        <TabPanel>
           <div  className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
           {jobs
            .filter(job => job.job_title === "Remote Job")
            .map(job => (
              <JobCards key={job._id} job={job} />
            ))}
           </div>
        </TabPanel>
        
        <TabPanel>
         <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
         {jobs
            .filter(job => job.job_title === "Hybrid")
            .map(job => (
              <JobCards key={job._id} job={job} />
            ))}
         </div>
        </TabPanel>
        
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {jobs
            .filter(job => job.job_title === "Part-Time")
            .map(job => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
        
      </div>
    </Tabs>
  );
};

export default JobCategoryTabs;
