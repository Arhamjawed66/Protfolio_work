"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./button.jsx";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { X } from "lucide-react";

// Enhanced project data
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site built with Next.js and Shopify integration, offering a seamless shopping experience.",
    image: "/asset/pexels-moh-adbelghaffar-771742.jpg", // Replace with actual project image
    tags: ["Next.js", "React", "Shopify", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "https://github.com/arhamjawed66",
  },
  {
    title: "Todo App with React",
    description: "A classic todo application to manage daily tasks, built with React and featuring state management for a dynamic user experience.",
    image: "/asset/download.png", // Replace with actual project image
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "https://reaxt-todo-fanicae.vercel.app/",
    codeUrl: "https://github.com/arhamjawed66",
  },
  {
    title: "Firebase Auth Demo",
    description: "A project demonstrating user authentication state changes using Firebase, providing a foundation for secure applications.",
    image: "/asset/download.png", // Replace with actual project image
    tags: ["Firebase", "JavaScript", "HTML"],
    liveUrl: "https://arhamjawed66.github.io/firebase-stattechange/",
    codeUrl: "https://github.com/arhamjawed66",
  },
   {
    title: "Kids Learning Book",
    description: "An interactive web-based book for children, designed to be engaging and educational with simple UI.",
    image: "/asset/download.png", // Replace with actual project image
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://arhamjawed66.github.io/kids-book/",
    codeUrl: "https://github.com/arhamjawed66",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Card className="h-[85vh] overflow-y-auto border-none shadow-none">
        <CardHeader>
          <CardTitle className="uppercase text-lg md:text-xl lg:text-2xl font-bold text-primary">
            My Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-card border rounded-lg overflow-hidden group">
                  <div className="overflow-hidden relative h-40 md:h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold bg-accent text-accent-foreground px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-card rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-primary mb-2">{selectedProject.title}</h2>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-sm font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button asChild>
                    <Link href={selectedProject.liveUrl} target="_blank" className="flex items-center gap-2">
                      <FaExternalLinkAlt /> Live Demo
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href={selectedProject.codeUrl} target="_blank" className="flex items-center gap-2">
                      <FaGithub /> View Code
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;

