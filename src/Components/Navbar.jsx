import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineHome, HiOutlineCode } from "react-icons/hi"; // Importing icons
import dayjs from "dayjs"; // Import Day.js

export const Navbar = () => {
  const location = useLocation();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Format the date using Day.js
    setCurrentDate(dayjs().format("DD-MM-YYYY"));
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 },
    },
  };

  // Define specific colors for Home link (Green theme)
  const homeColors = {
    active: "text-green-400",
    inactive: "text-gray-300",
    hover: "hover:text-green-200",
    underline: "bg-green-400",
    date: "text-green-400",
  };

  // Define specific colors for Projects link (Green theme)
  const projectsColors = {
    active: "text-green-400",
    inactive: "text-gray-300",
    hover: "hover:text-green-300",
    underline: "bg-green-600",
    date: "text-green-400",
  };

  return (
    <motion.nav
      className="
        fixed top-[0.5vw] left-1/2 -translate-x-1/2 z-50
        flex items-center justify-between
        px-4 py-2 sm:px-6 sm:py-3
        bg-gray-800/85 backdrop-blur-lg
        shadow-2xl shadow-black/50
        border border-gray-700/50
        transition-all duration-300 ease-in-out
        w-screen
        mx-auto
      "
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* K P Praveen - Left Logo/Name */}
      <Link to="/" className="flex items-center mr-4 md:mr-8">
        <span className="hidden sm:inline text-white text-xl font-bold ml-3 whitespace-nowrap">
          K P Praveen
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Home Link */}
        <Link to="/" className="group relative flex items-center">
          <motion.span
            className={`
              flex items-center
              text-lg sm:text-xl font-medium px-2 py-1 sm:px-3 sm:py-2 rounded-full
              transition-colors duration-200 ease-in-out
              ${
                location.pathname === "/"
                  ? homeColors.active // Active Home: Green
                  : homeColors.inactive + " " + homeColors.hover // Inactive Home: Gray with Green hover
              }
            `}
          >
            <HiOutlineHome className="text-xl sm:text-2xl mr-1" />{" "}
            {/* Icon inside the span */}
            Home
          </motion.span>
          {location.pathname === "/" && (
            <motion.span
              layoutId="underline"
              className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%-1rem)] h-0.5 ${homeColors.underline} rounded-full`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </Link>

        {/* Projects Link */}
        <Link to="/projects" className="group relative flex items-center">
          <motion.span
            className={`
              flex items-center
              text-lg sm:text-xl font-medium px-2 py-1 sm:px-3 sm:py-2 rounded-full
              transition-colors duration-200 ease-in-out
              ${
                location.pathname === "/projects"
                  ? projectsColors.active // Active Projects: Violet
                  : projectsColors.inactive + " " + projectsColors.hover // Inactive Projects: Gray with Violet hover
              }
            `}
          >
            <HiOutlineCode className="text-xl sm:text-2xl mr-1" />{" "}
            {/* Icon inside the span */}
            Projects
          </motion.span>
          {location.pathname === "/projects" && (
            <motion.span
              layoutId="underline"
              className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-[calc(100%-1rem)] h-0.5 ${projectsColors.underline} rounded-full`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </Link>
        {/* Add more links as needed, e.g., About, Contact */}
      </div>

      {/* Current Date */}
      <div
        className={`text-sm sm:text-base font-medium ml-4 whitespace-nowrap
          ${location.pathname === "/" ? homeColors.date : projectsColors.date}
        `}
      >
        {currentDate}
      </div>
    </motion.nav>
  );
};
