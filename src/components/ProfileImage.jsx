"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCode, FaRobot } from "react-icons/fa";

const ProfileImage = () => {
  const icons = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: FaCode, color: "#000000" }, // Next.js
    { Icon: FaNodeJs, color: "#339933" },
    { Icon: FaRobot, color: "#8B5CF6" }, // AI/Bot icon with purple color
  ];

  const radius = 120; // Distance from center
  const iconSize = 40;

  return (
    <div className="relative flex items-center justify-center bg-slate-950 rounded-full p-8">
      {/* Profile Image */}
      <motion.div
        className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/asset/my-pic.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Orbiting Icons */}
      {icons.map((item, index) => {
        const angle = (index / icons.length) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
              top: `calc(50% + ${y}px - ${iconSize / 2}px)`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20, // Slow rotation
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <item.Icon
              size={iconSize}
              color={item.color}
              className="drop-shadow-lg"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProfileImage;
