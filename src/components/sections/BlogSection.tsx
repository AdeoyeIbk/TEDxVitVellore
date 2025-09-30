import { motion, useInView } from "motion/react";
import { useRef } from "react";
import blogImg from "../../assets/images/blog_img.png";
import Button from "../ui/Button";

export default function BlogSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section id="blog"
      ref={sectionRef}
      className="flex flex-col items-center justify-between gap-8 lg:gap-16 min-h-screen lg:h-vh px-4 sm:px-8 lg:px-12 py-8 sm:py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our Blogs
      </motion.h2>
      <motion.div
        className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 justify-between w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="flex flex-col justify-center gap-4 lg:gap-6 w-full lg:w-1/2 px-4 sm:px-8 lg:pl-24 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="flex flex-col gap-2 lg:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ color: "#e62b1e" }}
            >
              Doing{" "}
              <motion.span
                className="uppercase"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Nothing
              </motion.span>{" "}
              is sometimes <br className="hidden sm:block" />{" "}
              <motion.span
                className="uppercase"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Everything
              </motion.span>
            </motion.h3>
            <motion.p
              className="font-light text-sm sm:text-base lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              By Oshika
            </motion.p>
          </motion.div>
          {/* read full blog button*/}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <Button variant="outline" size="md">
              Read full blog
            </Button>
          </motion.div>
        </motion.div>
        <motion.img
          src={blogImg}
          alt="Blog image"
          className="w-full sm:w-3/4 lg:w-1/2 h-auto object-cover mx-auto lg:mx-0 max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 50, scale: 0.9 }
          }
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.03,
            rotateY: 5,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button variant="outline" size="md">
          All blogs
        </Button>
      </motion.div>
    </motion.section>
  );
}
