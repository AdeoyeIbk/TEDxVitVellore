import { motion } from "motion/react";
import heroImg from "../../assets/images/hero_img.png";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-around text-left p-24 mt-4 gap-16 h-vh"
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </motion.p>
          <div className="flex justify-start">
            <Button variant="outline" size="md">
              Upcoming events
            </Button>
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
  );
}
