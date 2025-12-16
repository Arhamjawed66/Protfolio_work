

"use client"
import { useState } from "react";
import SideBar from "./Sidebar";
import Detail from "./Detail";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("About");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="md:flex md:h-screen overflow-hidden">
      {/*sidebar*/}
      <div className="w-full md:w-1/3 lg:w-1/4 md:h-screen md:overflow-y-auto">
        <SideBar onTabChange={handleTabChange} />
      </div>


      {/*Detail*/}
      <div className="w-full md:flex-1">
        <Detail activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

    </div>
  )
}

export default MainPage
