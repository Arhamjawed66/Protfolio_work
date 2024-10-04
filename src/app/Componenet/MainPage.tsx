

"use client"

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import SideBar from "./Sidebar";
import Detail from "./Detail";

const MainPage = () => {

  useEffect(() => {
    Aos.init({
      once: false
    });
  }, []);

  return (
    <div className="flex overflow-hidden h-screen">
      {/*sidebar*/}
      <div className="w-1/3">
        <SideBar />
      </div>


      {/*Detail*/}
      <div className="w-full">
        <Detail />
      </div>

    </div>
  )
}

export default MainPage
