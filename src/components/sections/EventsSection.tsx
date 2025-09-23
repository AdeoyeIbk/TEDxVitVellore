import { motion, useInView } from "motion/react";
import { useRef } from "react";
import merakiImg from "../../assets/images/meraki_img.png";
import Button from "../ui/Button";

export default function EventsSection() {
  const eventsRef = useRef(null);
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={eventsRef}
      className="flex flex-col gap-16 lg:gap-32 justify-center items-center min-h-screen lg:h-vh px-4 sm:px-8 lg:px-24 py-8 sm:py-16"
      initial={{ opacity: 0 }}
      animate={isEventsInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Upcoming events
      </motion.h2>
      <motion.div
        className="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-between w-full max-w-6xl items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.img
          src={merakiImg}
          alt="meraki event"
          className="w-full sm:w-3/4 lg:w-96 h-auto object-cover max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={
            isEventsInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 50, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        />
        <motion.div className="flex flex-col gap-3 lg:gap-4 text-center lg:text-left w-full lg:w-auto">
          <motion.h3
            className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Meraki
          </motion.h3>
          <motion.p className="font-thin leading-6 text-sm sm:text-base lg:text-lg max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </motion.p>
          <motion.div className="flex flex-col gap-2">
            <motion.p className="font-bold leading-none text-sm sm:text-base">
              30-31st Jan 2021
            </motion.p>
            <motion.p className="font-bold leading-none text-sm sm:text-base">
              Anna Auditorium
            </motion.p>
          </motion.div>
          <motion.div className="mt-4 flex justify-center lg:justify-start">
            <Button variant="outline" size="md">
                         Buy Tickets
                       </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
