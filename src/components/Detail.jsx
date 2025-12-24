
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion";
import Edcation from "./Edcation";
import Skill from "./Skill";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";

export function Detail({ activeTab, onTabChange }) {
  return(
    <div className="h-screen flex flex-col">

    <Tabs value={activeTab} onValueChange={onTabChange} className="mt-5 w-full p-2 flex-col ">
      <TabsList className="hidden md:grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
        <TabsTrigger value="About" className="text-sm md:text-lg">About</TabsTrigger>
        <TabsTrigger value="Experience" className="text-sm md:text-lg">Experience</TabsTrigger>
        <TabsTrigger value="Education" className="text-sm md:text-lg">Education</TabsTrigger>
        <TabsTrigger value="Skill" className="text-sm md:text-lg">Skill</TabsTrigger>
        <TabsTrigger value="Project" className="text-sm md:text-lg">Project</TabsTrigger>
        <TabsTrigger value="Contact" className="text-sm md:text-lg">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="About">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <About/>
          </motion.div>
        </TabsContent>

        <TabsContent value="Experience">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Experience/>
          </motion.div>
        </TabsContent>

        <TabsContent value="Education">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Edcation/>
          </motion.div>
        </TabsContent>

        <TabsContent value="Skill">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Skill/>
          </motion.div>
        </TabsContent>

        <TabsContent value="Project">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Project/>
          </motion.div>
        </TabsContent>

        <TabsContent value="Contact">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Contact/>
          </motion.div>
        </TabsContent>
      
    </Tabs>
    </div>
  )
}


export default Detail
