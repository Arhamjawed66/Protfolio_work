"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { SiGmail, SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiGit } from "react-icons/si";
import Link from "next/link";
import { Button } from "@/components/button";
import { FcDownload } from "react-icons/fc";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const SideBar = ({ onTabChange, isSidebarOpen, toggleSidebar }) => {
  const name = "ABDUL JAWED";
  const title = "Full-Stack Developer";

  const techIcons = [
    { Icon: SiReact, color: 'text-blue-500' },
    { Icon: SiNextdotjs, color: 'text-black' },
    { Icon: SiTailwindcss, color: 'text-teal-500' },
    { Icon: SiJavascript, color: 'text-yellow-500' },
    { Icon: SiNodedotjs, color: 'text-green-500' },
    { Icon: SiMongodb, color: 'text-green-600' },
    { Icon: SiGit, color: 'text-orange-500' },
  ];

  const [orbitRadius, setOrbitRadius] = useState(120);

  useEffect(() => {
    const updateRadius = () => {
      setOrbitRadius(window.innerWidth < 768 ? 80 : 120);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 space-y-6 bg-secondary/30 relative">
      {/* Toggle Button */}
      <motion.button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 z-10 p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/80 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </motion.button>

      {/* Sidebar Content */}
      <motion.div
        className="flex flex-col justify-center items-center space-y-6"
        animate={{ opacity: isSidebarOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image with Orbiting Icons */}
        <motion.div variants={itemVariants} className="relative">
          <Image
            src="/asset/pexels-moh-adbelghaffar-771742.jpg"
            alt="Abdul Jawed"
            width={150}
            height={150}
            className="rounded-full border-4 border-primary shadow-lg shadow-primary/50"
            priority
          />
          {/* Orbiting Icons */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {techIcons.map((tech, index) => {
              const angle = (360 / techIcons.length) * index;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${orbitRadius}px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -angle }}
                    className="bg-white/10 backdrop-blur rounded-full p-2 shadow-md"
                  >
                    <tech.Icon className={`text-2xl ${tech.color}`} />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="font-bold text-2xl md:text-4xl text-foreground">{name}</h1>
          <motion.h2
            className="font-semibold text-sm md:text-lg text-primary mt-1"
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
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.linkedin.com/in/jawed-ahmed-0575b32b6" target="_blank">
              <FaLinkedin className="text-3xl text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://github.com/arhamjawed66" target="_blank">
              <FaGithubSquare className="text-3xl text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link href="mailto:abduljawed6663@gmail.com" target="_blank">
              <SiGmail className="text-3xl text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.facebook.com/profile.php?id=100079156832868" target="_blank">
              <FaFacebookSquare className="text-3xl text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </motion.div>
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
    </div>
  );
};

export default SideBar;
