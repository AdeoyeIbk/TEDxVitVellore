import { motion, useInView } from "motion/react";
import { useRef } from "react";
import aboutImg from "../../assets/images/about_img.png";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={aboutRef}
      className="flex flex-col gap-32 justify-center items-center h-vh p-24"
      initial={{ opacity: 0 }}
      animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About us
      </motion.h2>
      <motion.div className="flex flex-col-reverse sm:flex-row  gap-16 justify-between">
        <motion.div className="flex gap-6 flex-col w-1/2">
          <motion.p
            className="font-thin"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br /> Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </motion.p>
          <motion.p
            className="font-thin"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat
          </motion.p>
        </motion.div>
        <motion.div>
          <motion.img
            src={aboutImg}
            alt="speaker"
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
