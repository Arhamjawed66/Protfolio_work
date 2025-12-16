"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { Button } from "@/app/Componenet/button";
import { FcDownload } from "react-icons/fc";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function SideBar({ onTabChange }) {
  const name = "ABDUL JAWED";
  const title = "Full-Stack Developer";

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center p-4 space-y-6 bg-secondary/30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Image */}
      <motion.div variants={itemVariants}>
        <Image
          src="/asset/pexels-moh-adbelghaffar-771742.jpg"
          alt="Abdul Jawed"
          width={150}
          height={150}
          className="rounded-full border-4 border-primary shadow-lg"
          priority
        />
      </motion.div>

      {/* Name and Title */}
      <motion.div className="text-center" variants={itemVariants}>
        <h1 className="font-bold text-4xl text-foreground">{name}</h1>
        <motion.h2
          className="font-semibold text-lg text-primary mt-1"
          variants={containerVariants}
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={itemVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>

      {/* Social Media Links */}
      <motion.div className="flex space-x-4" variants={itemVariants}>
        <Link href="https://www.linkedin.com/in/jawed-ahmed-0575b32b6" target="_blank">
          <FaLinkedin className="text-3xl text-muted-foreground hover:text-primary transition-colors" />
        </Link>
        <Link href="https://github.com/arhamjawed66" target="_blank">
          <FaGithubSquare className="text-3xl text-muted-foreground hover:text-primary transition-colors" />
        </Link>
        <Link href="mailto:abduljawed6663@gmail.com" target="_blank">
          <SiGmail className="text-3xl text-muted-foreground hover:text-primary transition-colors" />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100079156832868" target="_blank">
          <FaFacebookSquare className="text-3xl text-muted-foreground hover:text-primary transition-colors" />
        </Link>
      </motion.div>

      {/* Action Buttons */}
      <motion.div className="flex space-x-4" variants={itemVariants}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild>
            <Link href="/asset/cv/cv.pdf" target="_blank" className="flex items-center space-x-2">
              <FcDownload className="h-5 w-5" />
              <span>Download CV</span>
            </Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="secondary"
            onClick={() => onTabChange('Contact')}
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SideBar;
