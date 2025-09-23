import heroImg from "../assets/images/hero_img.png";
import aboutImg from "../assets/images/about_img.png";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Index() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });

  return (
    <>
      <motion.section
        className="flex items-center justify-around text-left p-24 mt-20 gap-16 h-lvh"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col gap-16 w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ideas worth spreading.
          </motion.h1>
          <div className="flex flex-col gap-8 justify-start">
            <motion.p
              className="font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </motion.p>
            <div className="flex justify-start">
              <motion.button
                className="mt-4 rounded-full border-2 border-red-500 py-3 px-4 text-sm text-red-500 hover:cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Upcoming events
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.img
          src={heroImg}
          alt="hero image"
          className="w-1/2 h-auto object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.section>

      {/* about section */}
      <motion.section
        ref={aboutRef}
        className="flex flex-col gap-32 justify-center items-center h-lvh p-24"
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
        <motion.div
          className="flex gap-16 justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="flex gap-6 flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={
              isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p
              className="font-thin"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
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
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat
            </motion.p>
          </motion.div>
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
      </motion.section>

      {/* team section */}
      <motion.section  className="h-lvh flex">
        <motion.div></motion.div>
        <motion.div></motion.div>
      </motion.section>
    </>
  );
}
