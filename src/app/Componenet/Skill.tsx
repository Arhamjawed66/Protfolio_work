import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SchoolIcon } from 'lucide-react'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6';

const Skill = () => {


  return (
    <Card className='h-[85vh] overflow-y-auto'>
      <CardHeader>
        <CardTitle className='uppercase'>Skill</CardTitle>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div data-aos="flip-right" className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2">

            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheck />
              </div>
              <h3 className="sm:text-xl text-2xl font-medium title-font text-gray-900">
                HTML
              </h3>
            </div>
            <div className='w-full h-1 bg-slate-500 flex items-center  rounded-lg'>
              <div className='w-full h-1 bg-blue-600'/>
            </div>
            <h3 className='text-blue-800 text-sm text-right font-semibold tracking-tight mb-10'>100%</h3>

            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheck />
              </div>
              <h3 className="sm:text-xl text-2xl font-medium title-font text-gray-900">
                JavaScript/TypeScript</h3>
            </div>
            <div className='w-full h-1 bg-slate-500  rounded-lg '>
              <div className='w-[80%] h-1 bg-blue-600' />
            </div>
            <h3 className='text-blue-800 text-sm text-right font-semibold tracking-tight mb-10'>80%</h3>
           
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheck />
              </div>
              <h3 className="sm:text-xl text-2xl font-medium title-font text-gray-900">
                Next.js</h3>
            </div>
            <div className='w-full h-1 bg-slate-500  rounded-lg '>
              <div className='w-[70%] h-1 bg-blue-600' />
            </div>
            <h3 className='text-blue-800 text-sm text-right font-semibold tracking-tight mb-10'>70%</h3>
           
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheck />
              </div>
              <h3 className="sm:text-xl text-2xl font-medium title-font text-gray-900">
                React</h3>
            </div>
            <div className='w-full h-1 bg-slate-500  rounded-lg '>
              <div className='w-[90%] h-1 bg-blue-600' />
            </div>
            <h3 className='text-blue-800 text-sm text-right font-semibold tracking-tight mb-10'>90%</h3>
            
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheck />
              </div>
              <h3 className="sm:text-xl text-2xl font-medium title-font text-gray-900">
                Git/Github</h3>
            </div>
            <div className='w-full h-1 bg-slate-500  rounded-lg '>
              <div className='w-[90%] h-1 bg-blue-600' />
            </div>
            <h3 className='text-blue-800 text-sm text-right font-semibold tracking-tight mb-10'>90%</h3>
           
            
          





          </div>
        </div>


      </CardContent>
    </Card>
  )
}

export default Skill

