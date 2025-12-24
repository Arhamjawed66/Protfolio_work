"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Home, User, Briefcase, GraduationCap, Code, FolderOpen, Mail, ChevronDown, ChevronUp } from "lucide-react";

const BottomNav = ({ activeTab, onTabChange }) => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = useCallback(() => {
    setShowNav(prev => !prev);
  }, []);

  const navItems = [
    { id: "About", label: "About", icon: User },
    { id: "Experience", label: "Experience", icon: Briefcase },
    { id: "Education", label: "Education", icon: GraduationCap },
    { id: "Skill", label: "Skills", icon: Code },
    { id: "Project", label: "Projects", icon: FolderOpen },
    { id: "Contact", label: "Contact", icon: Mail },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 bg-slate-950/50 backdrop-blur-md border-t border-border lg:hidden z-50"
    >
      {/* Profile Section */}
      <div className="flex justify-center items-center py-4 px-4 border-b border-border relative">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative">
            <div className="p-1 bg-gradient-to-r from-primary to-secondary rounded-full">
              <Image
                src="/asset/pexels-moh-adbelghaffar-771742.jpg"
                alt="Abdul Jawed"
                width={64}
                height={64}
                className="rounded-full object-cover w-16 h-16 shadow-lg shadow-primary/50"
                priority
              />
            </div>
            {/* Toggle Button */}
            <motion.button
              onClick={() => setShowNav(!showNav)}
              className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1 shadow-lg"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              {showNav ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </motion.button>
          </div>
          <h1 className="font-bold text-lg text-foreground">ABDUL JAWED</h1>
          <p className="text-sm text-primary">Full-Stack Developer</p>
        </div>
      </div>

      {/* Navigation Items */}
      {showNav && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex justify-around items-center py-2 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                    isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary"
                  }`}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon size={20} />
                  <span className="text-xs mt-1">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BottomNav;
