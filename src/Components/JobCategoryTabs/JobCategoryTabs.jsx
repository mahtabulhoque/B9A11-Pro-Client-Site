import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCards from "../JobCards/JobCards";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const JobCategoryTabs = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const response = await axios.get('https://b9-a11-assignment-server-site.vercel.app/jobs');
      return response.data;
    },
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  const filterJobsByCategory = (category) => {
    return data.filter(job => job.category === category).slice(0, 3);
  };

  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="capitalize text-2xl lg:text-4xl text-center py-7 ">Job by Category</h1>
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
            {filterJobsByCategory("On Site").map(job => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
        
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {filterJobsByCategory("Remote").map(job => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
         
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {filterJobsByCategory("Hybrid").map(job => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
        
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {filterJobsByCategory("Part-Time").map(job => (
              <JobCards key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>
        
      </div>
    </Tabs>
  );
};

export default JobCategoryTabs;
