import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";

import { motion } from "framer-motion";

import bg1 from "../../../public/banner1.jpg";
import bg2 from "../../../public/banner2.jpg";
import bg3 from "../../../public/banner3.jpg";
import bg4 from "../../../public/banner4.jpg";
import bg5 from "../../../public/alljob.jpg";

const Banner = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide className="p-2 lg:p-0">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
            borderRadius: "20px",
          }}
        >
          <motion.h1
            className="text-2xl lg:text-5xl text-gray-200 font-semibold py-16 mx-6"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to Your Career Quest: <br /> Unveil Opportunities with
            JobQuestHub!
          </motion.h1>

          <motion.p
            className="text-gray-200 text-xl lg:text-3xl font-medium mx-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We connect talent with opportunity,
            <br /> offering a diverse range of job opportunities across
            industries. <br /> With a commitment to excellence, innovation, and
            personalized service, <br /> we empower individuals to find their
            ideal roles and companies to discover top talent. <br />
            Join us and embark on a journey towards fulfilling career paths and
            organizational growth.
          </motion.p>
        </motion.div>
      </SwiperSlide>


      <SwiperSlide className="p-2 lg:p-0">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
            borderRadius: "20px",
          }}
        >
          <motion.h1
            className="text-2xl lg:text-5xl font-semibold py-16 text-center"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
           Explore Endless Opportunities...
          </motion.h1>

          <motion.p
            className="text-xl lg:text-3xl font-medium mx-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
           We are dedicated to connecting talented individuals with exciting opportunities, empowering you to take charge of your professional journey. Whether you are a seasoned professional or just starting out, JobQuestHub offers a platform to explore, grow, and thrive in your career. 
          </motion.p>
        </motion.div>
      </SwiperSlide>


      <SwiperSlide className="p-2 lg:p-0">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${bg5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
            borderRadius: "20px",
          }}
        >
          <motion.h1
            className="text-2xl lg:text-5xl text-slate-300 font-semibold py-16 mx-6"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            JobQuestHub: Where Every Career Story Begins
          </motion.h1>

          <motion.p
            className="text-white text-xl lg:text-3xl font-medium mx-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            From connecting aspiring professionals with their dream jobs to aiding seasoned experts in their next career move, we provide the platform and support necessary for every career story to unfold. Join us, and let your career story begin its remarkable journey at JobQuestHub.

          </motion.p>
        </motion.div>
      </SwiperSlide>


      <SwiperSlide className="p-2 lg:p-0">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
            borderRadius: "20px",
          }}
        >
          <motion.h1
            className="text-2xl lg:text-5xl text-gray-200 font-semibold py-16 mx-6"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
           You can apply for part-time jobs
          </motion.h1>

          <motion.p
            className="text-gray-200 text-xl lg:text-3xl font-medium mx-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            JobQuestHub serves as the bridge between ambition and achievement, empowering individuals to reach their fullest potential and realize their definition of success. Join us today.
          </motion.p>
        </motion.div>
      </SwiperSlide>


      <SwiperSlide className="p-2 lg:p-0">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${bg4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
            borderRadius: "20px",
          }}
        >
          <motion.h1
            className="text-2xl lg:text-5xl text-gray-200 font-semibold py-16 mx-6"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
           Unlocking Boundless Opportunities: Embrace Remote Work with JobQuestHub
          </motion.h1>

          <motion.p
            className="text-gray-200 text-xl lg:text-3xl font-medium mx-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
             we recognize the transformative potential of remote work, allowing individuals to break free from geographical constraints and embrace flexibility in their careers. Whether you are a digital nomad seeking global opportunities or someone looking to balance work and life from the comfort of your home.
          </motion.p>
        </motion.div>
      </SwiperSlide>


    </Swiper>
  );
};

export default Banner;
