"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, GraduationCap } from "lucide-react";

const educationHistory = [
  {
    degree: "Matriculation (Computer Science)",
    institution: "Al Mumtazz Islamic School",
    year: "2010",
    description: "Gained foundational knowledge in programming and computer applications.",
  },
  {
    degree: "Intermediate (Computer Science)",
    institution: "Siraj-ud-Dullah College",
    year: "2015",
    description: "Acquired essential skills and a deeper understanding of computer science principles.",
  },
  {
    degree: "Full-Stack Web Development",
    institution: "S.M.I.T",
    year: "2023-Present",
    description: "Comprehensive training in modern web technologies, including MERN stack and frontend/backend development.",
  },
  {
    degree: "Certified AI Developer",
    institution: "G.A.I.C",
    year: "2023-Present",
    description: "Enrolled in an advanced AI program covering Python, Meta 3.0, and cutting-edge AI concepts.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = (fromLeft) => ({
  hidden: { x: fromLeft ? -100 : 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
});

const Education = () => {
  return (
    <Card className="h-[85vh] overflow-y-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="uppercase text-lg md:text-xl lg:text-2xl font-bold text-primary">
          Education & Certification
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 md:p-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {educationHistory.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center justify-center sm:${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                variants={itemVariants(index % 2 === 0)}
              >
                {/* Timeline Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-card"></div>

                <Card
                  className={`w-full sm:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-primary">
                       <GraduationCap className="h-6 w-6" />
                       <CardTitle className="text-lg font-bold">{item.degree}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-1">
                      <Building className="h-4 w-4" />
                      <span>{item.institution} - {item.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;

