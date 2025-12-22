"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SideBar from "./Sidebar";
import { Detail } from "./Detail";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="md:flex md:h-screen overflow-hidden">
      {/* Mobile Backdrop */}
      {isMobile && isSidebarOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleSidebar}
        />
      )}

      {/*sidebar*/}
      <motion.div
        className="h-screen fixed md:relative top-0 left-0 z-50 md:z-auto bg-secondary/30"
        animate={{
          width: isMobile ? '80%' : (isSidebarOpen ? '33.333%' : '4rem'),
          x: isMobile ? (isSidebarOpen ? 0 : '-100%') : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <SideBar onTabChange={handleTabChange} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </motion.div>

      {/*Detail*/}
      <div className="w-full md:flex-1">
        <Detail activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

    </div>
  )
}

export default MainPage
