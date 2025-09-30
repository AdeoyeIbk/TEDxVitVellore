import { motion, useInView } from "motion/react";
import { useRef } from "react";
import microsoftLogo from "../../assets/images/microsoft-logo-png-server-logo-png-img-1000-500-free-transparent-microsoft-900x460-removebg-preview.png";
import googleLogo from "../../assets/images/google-logo-transparent-hd-png-download.png";
import intelLogo from "../../assets/images/intel-logo-png-11.png";
import ibmLogo from "../../assets/images/ibm_logo.png";
import amazonLogo from "../../assets/images/amazon_logo.png";
import merckLogo from "../../assets/images/merck_logo.png";
import astraZenecaLogo from "../../assets/images/astrazeneka_logo.png";
import rocheLogo from "../../assets/images/roche_logo.png";
import gskLogo from "../../assets/images/gsk_logo.png";
import iqviaLogo from "../../assets/images/iqvia_logo.png";
import accentureLogo from "../../assets/images/accenture-logo.png";
import deloitteLogo from "../../assets/images/deloitte_logo.png";
import pwcLogo from "../../assets/images/pwc_logo.png";
import cognizantLogo from "../../assets/images/cognizant_logo.png";
import mckinseyLogo from "../../assets/images/mckinsey_logo.png";

export default function Sponsors() {
  const sponsors = [
    {
      company: "Microsoft",
      image: microsoftLogo,
    },
    {
      company: "Google",
      image: googleLogo,
    },
    {
      company: "Intel",
      image: intelLogo,
    },
    {
      company: "IBM",
      image: ibmLogo,
    },
    {
      company: "Amazon",
      image: amazonLogo,
    },
    {
      company: "Merck",
      image: merckLogo,
    },
    {
      company: "AstraZeneca",
      image: astraZenecaLogo,
    },
    {
      company: "Roche",
      image: rocheLogo,
    },
    {
      company: "gsk",
      image: gskLogo,
    },
    {
      company: "IQVIA",
      image: iqviaLogo,
    },
    {
      company: "accenture",
      image: accentureLogo,
    },
    {
      company: "Deloitte",
      image: deloitteLogo,
    },
    {
      company: "pwc",
      image: pwcLogo,
    },
    {
      company: "Cognizant",
      image: cognizantLogo,
    },
    {
      company: "McKinsey & Company",
      image: mckinseyLogo,
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col gap-16 my-24 px-4 sm:px-8 lg:px-12 items-center"
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
        Our Sponsors
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-24 gap-y-12 sm:gap-8 lg:gap-16 justify-items-center items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {sponsors.map(({ image, company }, idx) => (
          <motion.img
            key={company}
            src={image}
            alt={company}
            className="w-24 h-16 sm:w-28 sm:h-20 lg:w-32 lg:h-24 object-contain grayscale hover:grayscale-0 transition duration-300 shadow-sm"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.85, y: 30 }
            }
            transition={{
              duration: 0.5,
              delay: 0.5 + idx * 0.07,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{
              scale: 1.08,
              filter: "grayscale(0%)",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)",
            }}
            whileTap={{ scale: 0.97 }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
