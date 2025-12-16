
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Edcation from "./Edcation";
import Skill from "./Skill";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

export function Detail({ activeTab, onTabChange }) {
  return(
    <div className="h-screen flex flex-col">
  
    <Tabs value={activeTab} onValueChange={onTabChange} className="mt-5 w-full p-2 flex-col ">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="About" className="text-lg">About</TabsTrigger>
        <TabsTrigger value="Education" className="text-lg">Education</TabsTrigger>
        <TabsTrigger value="Skill" className="text-lg">Skill</TabsTrigger>
        <TabsTrigger value="Project" className="text-lg">Project</TabsTrigger>
        <TabsTrigger value="Contact" className="text-lg">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="About">
          <About/>
        </TabsContent>

        <TabsContent value="Education">
          <Edcation/>
        </TabsContent>

        <TabsContent value="Skill">
          <Skill/>
        </TabsContent>

        <TabsContent value="Project">
          <Project/>
        </TabsContent>

        <TabsContent value="Contact">
          <Contact/>
        </TabsContent>
      
    </Tabs>
    </div>
  )
}


export default Detail
