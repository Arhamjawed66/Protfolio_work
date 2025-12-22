"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaShopify,
  FaAngular,
  
  
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="h-12 w-12" />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt className="h-12 w-12" />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs className="h-12 w-12" />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript className="h-12 w-12" />, color: "#3178C6" },
    { name: "React", icon: <FaReact className="h-12 w-12" />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12" />, color: "#000000" },
    { name: "Angular", icon: <FaAngular className="h-12 w-12" />, color: "#DD0031" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-12 w-12" />, color: "#06B6D4" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="h-12 w-12" />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress className="h-12 w-12" />, color: "#000000" },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="h-12 w-12" />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub className="h-12 w-12" />, color: "#181717" },
    { name: "Shopify", icon: <FaShopify className="h-12 w-12" />, color: "#7AB55C" },
  ],
};

const categoryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger categories
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger skills within category
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Skill = () => {
  return (
    <Card className="h-[85vh] overflow-y-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="uppercase text-2xl font-bold text-primary">
          My Skillset
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-8"
          variants={categoryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div key={category} variants={categoryVariants}>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                {category} Development
              </h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={skillContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {skillList.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                  >
                    <motion.div
                      className="p-6 rounded-lg bg-card border flex flex-col items-center justify-center space-y-3 h-full"
                      variants={cardHoverVariants}
                      whileHover="hover"
                    >
                      <div style={{ color: skill.color }}>{skill.icon}</div>
                      <p className="font-semibold text-lg text-center text-foreground">
                        {skill.name}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default Skill;

