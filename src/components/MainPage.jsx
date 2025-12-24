"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SideBar from "./Sidebar";
import { Detail } from "./Detail";
import BottomNav from "./BottomNav";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.div
          className="h-screen fixed md:relative top-0 left-0 z-50 md:z-auto bg-secondary/30"
          animate={{
            width: isSidebarOpen ? '16rem' : '4rem',
            x: 0
          }}
          transition={{ duration: 0.3 }}
        >
          <SideBar onTabChange={handleTabChange} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </motion.div>
      )}

      {/*Detail*/}
      <div className="w-full md:flex-1 p-4 md:p-10">
        <Detail activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Mobile and Tablet Bottom Navigation */}
      {(isMobile || isTablet) && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}

    </div>
  )
}

export default MainPage
