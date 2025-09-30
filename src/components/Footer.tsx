import { motion, useInView } from "motion/react";
import { useRef } from "react";
import footerLogo from "../assets/images/footer_logo.png";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import SocialIcon from "./ui/SocialIcon";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  return (
    <motion.footer
      ref={footerRef}
      className="footer-bg w-full text-white py-8 px-4 sm:py-12 lg:py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mx-auto max-w-7xl  grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-4 justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* first column */}
        <motion.div
          className="flex flex-col gap-4 lg:gap-6 w-full lg:w-auto lg:min-w-[250px]"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={footerLogo}
              alt="TEDxVitVellore"
              className="h-10 w-auto sm:h-12"
            />
          </motion.div>
          <motion.div
            className="flex gap-2 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SocialIcon
              href="https://twitter.com/tedxvitvellore"
              label="Twitter"
            >
              <Twitter className="h-4 w-auto text-white" />
            </SocialIcon>
            <SocialIcon
              href="https://facebook.com/tedxvitvellore"
              label="Facebook"
            >
              <Facebook className="h-4 w-auto text-white" />
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com/tedxvitvellore"
              label="Instagram"
            >
              <Instagram className="h-4 w-auto text-white" />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/company/tedxvitvellore"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-auto text-white" />
            </SocialIcon>
          </motion.div>
          <motion.p
            className="text-xs sm:text-sm font-light text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Copyright © {new Date().getFullYear()} TEDxVitVellore
          </motion.p>
        </motion.div>
        {/* second column */}
        <motion.div
          className="flex flex-col gap-4 lg:gap-6 w-full sm:w-1/2 lg:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.h5
            className="text-red-500 font-bold text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ color: "#ff6b6b" }}
          >
            TED Links
          </motion.h5>
          <motion.div
            className="flex flex-col gap-2 lg:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {[
              "Terms of use",
              "Privacy Notice",
              "Cookie Policy",
              "Code of Conduct",
              "Refer a friend FAQ",
              "Premium services terms",
            ].map((link, index) => (
              <motion.p
                key={link}
                className="text-xs sm:text-sm font-light hover:text-red-500 cursor-pointer transition-colors duration-200"
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                whileHover={{ x: 5, color: "#e62b1e" }}
              >
                {link}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
        {/* third column */}
        <motion.div
          className="flex flex-col gap-4 lg:gap-6 w-full sm:w-1/2 lg:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.h5
            className="text-red-500 font-bold text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileHover={{ color: "#ff6b6b" }}
          >
            Resources
          </motion.h5>
          <motion.div
            className="flex flex-col gap-2 lg:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {["About", "Contact us", "Community", "Media"].map(
              (resource, index) => (
                <motion.p
                  key={resource}
                  className="text-xs sm:text-sm font-light hover:text-red-500 cursor-pointer transition-colors duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  whileHover={{ x: 5, color: "#e62b1e" }}
                >
                  {resource}
                </motion.p>
              )
            )}
          </motion.div>
        </motion.div>
        {/* fourth column */}
        <motion.div
          className="flex flex-col gap-4 lg:gap-6 w-full lg:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.h5
            className="text-red-500 font-bold text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ color: "#ff6b6b" }}
          >
            Contact us
          </motion.h5>
          <motion.div
            className="flex flex-col gap-2 lg:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.p
              className="text-xs sm:text-sm font-light hover:text-red-500 cursor-pointer transition-colors duration-200"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              whileHover={{ x: 5, color: "#e62b1e" }}
            >
              +1 (234) 567-890
            </motion.p>
            <motion.p
              className="text-xs sm:text-sm font-light hover:text-red-500 cursor-pointer transition-colors duration-200"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 1.7 }}
              whileHover={{ x: 5, color: "#e62b1e" }}
            >
              tedxvit@gmail.com
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
