import { motion } from "motion/react";
import blogImg from "../../assets/images/blog_img.png";
import Button from "../ui/Button";

export default function BlogSection() {
  return (
    <motion.section
      className="flex flex-col items-center justify-between gap-8 lg:gap-16 min-h-screen lg:h-vh px-4 sm:px-8 lg:px-12 py-8 sm:py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Our Blogs
      </motion.h2>
      <motion.div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 justify-between w-full max-w-6xl">
        <motion.div
          className="flex flex-col justify-center gap-4 lg:gap-6 w-full lg:w-1/2 px-4 sm:px-8 lg:pl-24 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="flex flex-col gap-2 lg:gap-3">
            <motion.h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
              Doing <span className="uppercase">Nothing</span> is sometimes{" "}
              <br className="hidden sm:block" />{" "}
              <span className="uppercase">Everything</span>
            </motion.h3>
            <motion.p className="font-light text-sm sm:text-base lg:text-lg">
              By Oshika
            </motion.p>
          </motion.div>
          {/* read full blog button*/}
          <motion.div className="flex justify-center lg:justify-start">
            <Button variant="outline" size="md">
              Read full blog
            </Button>
          </motion.div>
        </motion.div>
        <motion.img
          src={blogImg}
          alt="Blog image"
          className="w-full sm:w-3/4 lg:w-1/2 h-auto object-cover mx-auto lg:mx-0 max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
      <Button variant="outline" size="md">
        All blogs
      </Button>
    </motion.section>
  );
}
