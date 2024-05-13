import { motion } from "framer-motion";

const SingleService = ({ service }) => {
  const { image, service_name, short_description } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      className="card w-full bg-[#FFFCE6] shadow-2xl"
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-black font-bold">{service_name}</h2>
        <p className="text-lg font-medium text-amber-600">
          {short_description}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleService;
