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
      className="flex flex-col gap-32 justify-center items-center h-vh p-24"
      initial={{ opacity: 0 }}
      animate={isEventsInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Upcoming events
      </motion.h2>
      <motion.div
        className="flex gap-32 justify-between"
        initial={{ opacity: 0, y: 30 }}
        animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.img
          src={merakiImg}
          alt="meraki event"
          className="w-96 h-auto object-cover"
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
        <motion.div className="flex flex-col gap-2">
          <motion.h3
            className="text-2xl font-semibold mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Meraki
          </motion.h3>
          <motion.p className="font-thin leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </motion.p>
          <motion.div className="flex flex-col gap-2">
            <motion.p className="font-bold leading-none">
              30-31st Jan 2021
            </motion.p>
            <motion.p className="font-bold leading-none">
              Anna Auditorium
            </motion.p>
          </motion.div>
          <motion.div className="mt-4">
            <Button variant="outline" size="md">
                         Buy Tickets
                       </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
