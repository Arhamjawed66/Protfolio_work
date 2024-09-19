import Image from "next/image";
import { Button } from '@/app/Componenet/button';
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa6"; 
import Link from "next/link";
import { FaFacebookSquare, FaGithubSquare,  } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";
import { SiGmail } from "react-icons/si";







export function SideBar() {
  return (
    <div className="h-screen flex flex-col items-center p-3 ">
         {/* image */}
      <Image src="/asset/pexels-moh-adbelghaffar-771742.jpg" 
      alt="Image description" width={500} height={200} 
      className=" rounded-md " />
      
       {/* name  */}
      <div className="mt-2">
       <h1 className="font-bold text-2xl">ABDUL JAWED</h1>
       <h2 className="font-semibold text-lg text-center
        text-gray-600">
          <Typewriter
        options={{
          strings: 
          ['Web-Developer',
           'Front-Developer',
            `Shopify-Developer`],
          autoStart: true,
          loop: true,
        }}
      /></h2>

        </div>

      {/* s-media */}
      <div className=" grid grid-cols-3 gap-2 ">

      <div>
        <Link href="https://www.linkedin.com/in/jawed-ahmed-0575b32b6"
        target="_blank" className="text-gray-600 hover:text-[#0762c8]">
        <FaLinkedin className="text-4xl" />
        </Link>
         </div>

      <div>
        <Link href="https://www.facebook.com/profile.php?id=100079156832868&mibextid=ZbWKwL" 
        target="_blank" className="text-gray-600 hover:text-[#0762c8]">
          <FaFacebookSquare className="text-4xl" />
        </Link>
      </div>
     

      <div>
        <Link href="https://arhamjawed66.github.io/my-work/" 
        target="_blank" className="text-gray-600 hover:text-[#3526a582]">
          <FaGithubSquare className="text-4xl"/>
        </Link>
      </div>
   </div>

      {/* cv */}
      <div className="mt-2">
      <Link href="/asset/cv/cv.pdf" target="_blank" >
      <Button className="hover:text-blue-500 hover:after:text-lime-500 ">
      <FcDownload className=" mr-2 h-5 w-5"  /> Download CV
    </Button>
    </Link>

       </div>
       
      <div>
      <h2 className="font-semibold text-lg text-center
        text-gray-600 mt-5">
          <Typewriter
        options={{
          strings: 
          ['Contact',
           '03422706023',
            `abduljawed6663@gmail.com`],
          autoStart: true,
          loop: true,
        }}
      /></h2>
    </div>
   </div>
  )
}
  

export default SideBar
