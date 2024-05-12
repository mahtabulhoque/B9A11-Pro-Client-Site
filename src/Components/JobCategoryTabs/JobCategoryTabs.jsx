import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCards from "../JobCards/JobCards";

const JobCategoryTabs = () => {
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
        
        <div className="">
            
        <TabPanel>
         
        <div className="lg:flex gap-5 py-5">
        <h2><JobCards></JobCards></h2>
         <h2><JobCards></JobCards></h2>
        </div>
     
       </TabPanel>
        </div>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default JobCategoryTabs;
