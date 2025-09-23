import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Card from "../ui/Card";
import { Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import ceo from "../../assets/images/ceo_founder.jpg";

const member = [
  {
    img: `${ceo}`,
    name: "Adeoye Samuel",
    title: "CEO & Founder",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b002?w=400&h=500&fit=cover",
    name: "Priya Sharma",
    title: "Creative Director",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=cover",
    name: "Rajesh Kumar",
    title: "Technical Lead",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=cover",
    name: "Ananya Patel",
    title: "Marketing Head",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=cover",
    name: "Arjun Mehta",
    title: "Event Coordinator",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=cover",
    name: "Kavya Reddy",
    title: "Design Lead",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=cover",
    name: "Vikram Singh",
    title: "Operations Manager",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=cover",
    name: "Sneha Gupta",
    title: "Content Strategist",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=cover",
    name: "Rohit Verma",
    title: "Social Media Manager",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=cover",
    name: "Meera Joshi",
    title: "Event Planner",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=cover",
    name: "Dev Patel",
    title: "Video Producer",
    github: "#",
    linkedIn: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=cover",
    name: "Riya Kapoor",
    title: "Community Manager",
    github: "#",
    linkedIn: "#",
  },
];

export default function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col gap-40 items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Team
      </motion.h2>

      {/* Container with navigation arrows */}
      <motion.div
        className="relative w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Left Arrow */}
        <motion.button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
          aria-label="Scroll left"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-6 h-6 text-red-500" />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
          aria-label="Scroll right"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6 text-red-500" />
        </motion.button>

        {/* Horizontal scrolling container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto px-16 py-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {member.map((member, index) => (
            <motion.div
              key={index}
              className="flex justify-center flex-shrink-0"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -5 }}
            >
              <Card
                variant="custom"
                padding="none"
                className="items-center text-center"
              >
                {/* image */}
                <div className="h-64 w-56 rounded-lg border border-red-500 overflow-hidden">
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {/* text */}
                <div className="flex flex-col gap-4 justify-around items-center p-6">
                  <div className="flex flex-col gap-0.5">
                    <motion.h4
                      className="text-xl font-semibold"
                      whileHover={{ color: "#e62b1e" }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.name}
                    </motion.h4>
                    <motion.p
                      className="text-xs text-red-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    >
                      {member.title}
                    </motion.p>
                  </div>
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <motion.a
                      href={member.github}
                      className="bg-white p-1 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: "#e62b1e",
                        color: "white",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="h-5 w-auto" />
                    </motion.a>
                    <motion.a
                      href={member.linkedIn}
                      className="bg-white p-1 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                        backgroundColor: "#e62b1e",
                        color: "white",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Linkedin className="h-5 w-auto" />
                    </motion.a>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
