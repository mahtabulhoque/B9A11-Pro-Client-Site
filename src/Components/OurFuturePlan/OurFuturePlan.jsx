import { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const OurFuturePlan = () => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data));
  })

  return (
    <div>
        <div>
            <h2 className="capitalize text-2xl lg:text-4xl text-center py-7 ">Our Future Plans</h2>
        </div>

        <div  className="flex flex-col  lg:grid lg:grid-cols-3 gap-7">
            {
               services.map(service => <SingleService key={service.id} service={service}>

               </SingleService>)
            }
        </div>

    </div>
  );
};

export default OurFuturePlan;
