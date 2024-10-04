
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/app/Componenet/button';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Edcation from "./Edcation";
import Skill from "./Skill";
import Project from "./Project";

export function Detail() {
  return(
    <div className="h-screen flex flex-col">
  
    <Tabs defaultValue="Education" className="mt-5 w-full p-2 flex-col ">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Education" className="text-lg">Education</TabsTrigger>
        <TabsTrigger value="Skill" className="text-lg">Skill</TabsTrigger>
        <TabsTrigger value="Project" className="text-lg">Project</TabsTrigger>
        </TabsList>

        <TabsContent value="Education">
          <Edcation/>

        </TabsContent>

        <TabsContent value="Skill">
          <Skill/>

        </TabsContent>

        <TabsContent value="Project">
          <Project/>

        </TabsContent>
      
    </Tabs>
    </div>
  )
}


export default Detail
