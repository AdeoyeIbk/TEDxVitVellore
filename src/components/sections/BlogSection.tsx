import { motion } from "motion/react";
import blogImg from "../../assets/images/blog_img.png";
import Button from "../ui/Button";

export default function BlogSection() {
  return (
    <motion.section
      className="flex flex-col items-center justify-between gap-16 h-vh"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Our Blogs
      </motion.h2>
      <motion.div className="flex flex-col-reverse sm:flex-row  gap-16 justify-between w-full">
        <motion.div
          className="flex flex-col justify-center gap-4 w-1/2 pl-24"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="flex flex-col gap-2">
              <motion.h3 className="text-2xl font-semibold">Doing <span className="uppercase">Nothing</span> is sometimes <br /> <span className="uppercase">Everything</span></motion.h3>
                <motion.p className="font-light">
                 By Oshika
                </motion.p>
          </motion.div>
          {/* read full blog button*/}
          <motion.div>
              <Button variant="outline" size="md">
                Read full blog
              </Button>
          </motion.div>
        </motion.div>
        <motion.img
          src={blogImg}
          alt="Blog image"
          className="w-1/2 h-auto object-cover"
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
