"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <Card className="h-[85vh] overflow-y-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="uppercase text-2xl font-bold text-primary">
          About Me
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
          <motion.p className="text-lg leading-relaxed text-muted-foreground" variants={itemVariants}>
            As a passionate and results-driven Full-Stack Developer, I thrive on turning complex problems into elegant, user-friendly solutions. My journey in web development is fueled by a relentless curiosity and a desire to build seamless digital experiences from concept to deployment.
          </motion.p>
          <motion.p className="text-lg leading-relaxed text-muted-foreground" variants={itemVariants}>
            I am proficient across the entire stack, from crafting responsive and engaging front-end interfaces with React and Next.js to architecting robust back-end systems with Node.js. My goal is to write clean, efficient, and maintainable code that stands the test of time.
          </motion.p>
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-foreground mb-3">Core Philosophies:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-primary">User-Centric Design:</span> Building intuitive and accessible products is always my top priority.</li>
              <li><span className="font-semibold text-primary">Continuous Learning:</span> The tech world is ever-evolving, and I am committed to staying at the forefront.</li>
              <li><span className="font-semibold text-primary">Collaborative Spirit:</span> I believe the best products are built by teams who communicate and collaborate effectively.</li>
            </ul>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default About;
