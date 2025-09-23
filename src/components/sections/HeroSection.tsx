import { motion } from "motion/react";
import heroImg from "../../assets/images/hero_img.png";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <motion.section
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-around text-center lg:text-left px-4 sm:px-8 lg:px-24 py-8 sm:py-16 lg:py-24 mt-4 gap-8 lg:gap-16 min-h-screen lg:h-vh"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col gap-8 lg:gap-16 w-full lg:w-1/2 order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Ideas worth spreading.
        </motion.h1>
        <div className="flex flex-col gap-6 lg:gap-8 justify-start">
          <motion.p
            className="font-light text-sm sm:text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </motion.p>
          <div className="flex justify-center lg:justify-start">
            <Button variant="outline" size="md">
              Upcoming events
            </Button>
          </div>
        </div>
      </motion.div>
      <motion.img
        src={heroImg}
        alt="hero image"
        className="w-full sm:w-3/4 lg:w-1/2 h-auto object-cover order-1 lg:order-2 max-w-md lg:max-w-none"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
      />
    </motion.section>
  );
}
