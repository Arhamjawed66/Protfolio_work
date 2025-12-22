"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const experiences = [
  {
    title: "Remote Full-Stack Developer",
    company: "Current Role",
    date: "Nov 2024 - Present",
    focus: ["Next.js", "Performance Optimization", "API Integration"],
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Frnaz Solutions",
    date: "June 2024 - Oct 2024",
    focus: ["React", "Tailwind CSS", "Pixel-perfect UI"],
    current: false,
  },
  {
    title: "MERN Stack Developer Intern",
    company: "Cloudin Cloud",
    date: "March 2024 - May 2024",
    focus: ["Full-stack Development", "Database Management"],
    current: false,
  },
];

const Experience = () => {
  return (
    <Card className="h-[85vh] overflow-y-auto border-none shadow-none bg-slate-950">
      <CardHeader>
        <CardTitle className="uppercase text-2xl font-bold text-primary">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`border border-gray-700 bg-slate-900 ${
                  exp.current ? "shadow-lg shadow-blue-500/50 ring-2 ring-blue-500/20" : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.focus.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default Experience;
