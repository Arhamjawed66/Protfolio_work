"use client";
import { motion, easeOut } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, Globe } from "lucide-react";

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
      ease: easeOut,
    },
  },
};

const About = () => {
  return (
    <Card className="h-[85vh] overflow-y-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="uppercase text-xl md:text-2xl font-bold text-primary">
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6 md:gap-8">
        {/* Left Column: Text Content */}
        <motion.div
          className="space-y-4 md:space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="text-base md:text-lg leading-relaxed text-slate-300" variants={itemVariants}>
            I am a Full-Stack Developer specializing in Next.js 14, React, and Tailwind CSS. I build scalable backends with Node.js and Express.js, and versatile E-commerce solutions with Shopify.
          </motion.p>
          <motion.p className="text-base md:text-lg leading-relaxed text-slate-300" variants={itemVariants}>
            Since 2023, I have been studying AI Agents at GIAIC (Governor House) to integrate intelligent automation into web apps. My focus is on Performance, SEO, and AI-driven modern workflows.
          </motion.p>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 flex items-center">
              <Code className="mr-2" /> My Core Focus:
            </h3>
            <ul className="space-y-2 text-slate-300">
              <motion.li className="flex items-start space-x-2" variants={itemVariants}>
                <Zap className="text-primary mt-1" />
                <span><strong className="text-primary">Performance & SEO:</strong> Optimizing for speed and visibility.</span>
              </motion.li>
              <motion.li className="flex items-start space-x-2" variants={itemVariants}>
                <Globe className="text-primary mt-1" />
                <span><strong className="text-primary">AI-Driven Workflows:</strong> Integrating intelligent automation.</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Highlighted Education Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-purple-900 to-blue-900 border border-purple-500/30 shadow-lg shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-primary text-lg flex items-center">
                  <Zap className="mr-2" /> Education: AI Agents at GIAIC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Since 2023, studying AI Agents at GIAIC (Governor House) to integrate intelligent automation into web apps.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default About;
