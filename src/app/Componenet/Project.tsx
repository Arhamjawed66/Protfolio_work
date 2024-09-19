import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {  SchoolIcon } from 'lucide-react'
import { FaGithub } from "react-icons/fa";

import React, { useState } from 'react'
import { Button } from './button'
import Link from 'next/link';
import Image from 'next/image';

const Project = () => {
  const assigmt_arry = [{
    name: "count_Down",
    date: "10-jan-2024",
    code: "https://arhamjawed66.github.io/bakraeid-countdown/ "
  },
  {
    name: "world clock",
    date: "20-jan-2024",
    code: "https://arhamjawed66.github.io/Digital-clock/ "
  },
  {
    name: "Table Work",
    date: "15-Nov-2023",
    code: "https://arhamjawed66.github.io/table.work-html/"
  },
  {
    name: "KIds Book",
    date: "20-Nov-2023",
    code: "https://arhamjawed66.github.io/kids-book/"
  },
  {
    name: "Todo Atendance",
    date: "05-Jan-2024",
    code: " https://arhamjawed66.github.io/Todo_atendance/"
  },
  {
    name: "Todo Card",
    date: "12-Feb-2024",
    code: " https://arhamjawed66.github.io/Todo-card/"
  },
  {
    name: "FireBase State",
    date: "10-jul-2024",
    code: "https://arhamjawed66.github.io/firebase-stattechange/"
  },
  {
    name: "Todo with React",
    date: "03-sep-2024",
    code: "https://reaxt-todo-fanicae.vercel.app/"
  },
  ];


  return (
    <Card className='h-[85vh] overflow-y-auto bg-sky-50'>
      <CardHeader>
        <CardTitle className='uppercase'>projects</CardTitle>
      </CardHeader>
      <CardContent >
        {/* <div data-aos="zoom-in" className=" flex flex-wrap -m-4"> */}
          {/* <div className="container px-5 py-24 mx-auto "> */}
          <div data-aos="zoom-in" className="grid grid-cols-3 gap-4 ">
           {assigmt_arry.map((item,index)=>(
            <div key={index} className=" -m-4 mb-5">
              <div className="lg:w-1/1 sm:w-1/1 p-4 ">
                <div className="flex relative">
                  
                  <Image
                    src="/asset/download.png" 
                    alt="Description" 
                    width={500} 
                    height={300}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-400 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      {item.date}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-10">
                      {item.name}
                    </h1>
                    <div>
                    <Link href={item.code} target='_blank' className="leading-relaxed ">
                      <Button>
                    <FaGithub className='mr-5 text-2xl hover:text-[#dedcf1b3]' />
                    preview</Button>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
            
  
</div>

            











          {/* </div> */}
        {/* </div> */}

      </CardContent>
    </Card>
  )
}

export default Project


