import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SchoolIcon } from 'lucide-react'
import React, { useState } from 'react'

const Education = () => {
  const [detail, setDetail] = useState([
    {
      ed: "Matric",
      SchoolName: "Al Mumtazz Islamic",
      dec: "I completed my Matriculation with a focus on Computer Science in 2010, where I gained basic knowledge in programming and computer applications."
    },
    {
      ed: "Inter",
      SchoolName: "Siraj-ud-Dullah",
      dec: "Completed Intermediate in 2015 with a focus on Computer Science, acquiring essential skills and knowledge in the field."
    },
    {
      ed: "I.T",
      SchoolName: "S.M.I.T",
      dec: "After completing Intermediate, I pursued a Full Stack Development course at SMIT, which is my final year. This course is crucial for my career, providing me with skills in modern web technologies, backend development, and frontend development."
    },
    {
      ed: "A.I",
      SchoolName: "G.A.I.C",
      dec: "In addition to my Full Stack Development course at SMIT, I am also enrolled in an AI course at GAIC. This program includes studies in Python, Meta 3.0, and advanced AI concepts, enhancing my skills in cutting-edge technologies and artificial intelligence."
    }
  ]);
 
  return (
    <Card className='h-[85vh] overflow-x-auto'>
      <CardHeader>
        <CardTitle className='uppercase'>Education</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div  data-aos="zoom-in"className="flex flex-wrap -m-4">
          {detail.map((item, index) => (
            <div key={index} className="p-4 lg:w-1/2">
              <div   className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest  title-font font-medium text-gray-600 mb-1">
                  {item.ed}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {item.SchoolName}
                </h1>
                <p className="leading-relaxed mb-3">
                  {item.dec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Education

