import { motion, useInView } from "motion/react";
import { useRef } from "react";
import aboutImg from "../../assets/images/about_img.png";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={aboutRef}
      className="flex flex-col gap-16 lg:gap-32 justify-center items-center min-h-screen lg:h-vh px-4 sm:px-8 lg:px-24 py-8 sm:py-16"
      initial={{ opacity: 0 }}
      animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About us
      </motion.h2>
      <motion.div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between w-full max-w-6xl">
        <motion.div className="flex gap-4 lg:gap-6 flex-col w-full lg:w-1/2 order-2 lg:order-1">
          <motion.p
            className="font-thin text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br className="hidden sm:block" /> Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </motion.p>
          <motion.p
            className="font-thin text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat
          </motion.p>
        </motion.div>
        <motion.div className="flex justify-center w-full lg:w-1/2 order-1 lg:order-2">
          <motion.img
            src={aboutImg}
            alt="speaker"
            className="w-full sm:w-3/4 lg:w-full h-auto object-cover max-w-md lg:max-w-none"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={
              isAboutInView
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 50, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
