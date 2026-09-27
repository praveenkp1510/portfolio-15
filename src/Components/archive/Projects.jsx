import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import BusstandImg from "../assets/BusstandImg.PNG";
import Esmart from "../assets/Esmart.PNG";
import TBSNative from "../assets/TBSNative.PNG";
import CRMDashBOard from "../assets/CRM.PNG";

// Import React Icons
import {
  FaExternalLinkAlt,
  FaGooglePlay,
  FaReact,
  FaMobileAlt,
  FaCodeBranch,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { IoSpeedometerOutline } from "react-icons/io5";

export const Projects = () => {
  const location = useLocation();
  const projectRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const projects = [
    {
      id: "thebusstand-website",
      title: "TheBusStand.com Web Platform",
      description: [
        "Purpose:",
        "- Simplify online bus ticket booking with a centralized system.",
        "- Provide real-time bus availability and instant booking.",
        "- Ensure scalability during peak seasons.",
        "",
        "My Contributions:",
        "- Built responsive UI with ReactJS + Tailwind CSS.",
        "- Integrated APIs for booking, cancellation, and user management.",
        "- Optimized performance for cross-device usage.",
      ],
      imageUrl: BusstandImg,
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "API Integration", icon: <FaCodeBranch /> },
      ],
      liveLink: "https://thebusstand.com/",
    },
    {
      id: "react-native-app",
      title: "React Native Mobile Application",
      description: [
        "Purpose:",
        "- Extend booking platform to mobile for on-the-go users.",
        "- Increase brand accessibility via Play Store presence.",
        "- Provide offline access to tickets and booking history.",
        "",
        "My Contributions:",
        "- Developed core app modules in React Native.",
        "- Integrated APIs for seamless data flow.",
        "- Ensured smooth navigation and native-like UX.",
      ],
      imageUrl: TBSNative,
      technologies: [
        { name: "React Native", icon: <FaMobileAlt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Mobile Development", icon: <FaMobileAlt /> },
      ],
      appStoreLink:
        "https://play.google.com/store/apps/details?id=com.thebusstandapp&pcampaignid=web_share",
    },
    {
      id: "crm-dashboard",
      title: "CRM Dashboard for thebusstand.com",
      description: [
        "Purpose:",
        "- Provide admins a unified dashboard for bookings & users.",
        "- Enable real-time analytics for decision-making.",
        "- Streamline operations with automated reports.",
        "",
        "My Contributions:",
        "- Built modular dashboard with ReactJS + Tailwind CSS.",
        "- Integrated APIs for dynamic data visualization.",
        "- Implemented role-based access control.",
      ],
      imageUrl: CRMDashBOard,
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "API Integration", icon: <FaCodeBranch /> },
        { name: "User Management", icon: <IoSpeedometerOutline /> },
      ],
    },
    {
      id: "esmart-accounting",
      title: "E-Smart Accounting Application",
      description: [
        "Purpose:",
        "- Help SMEs digitize accounting workflows.",
        "- Provide invoice & expense tracking in one place.",
        "- Plan seamless Tally integration for scalability.",
        "",
        "My Contributions:",
        "- Led front-end development with ReactJS + Tailwind.",
        "- Collaborated with backend for smooth API integration.",
        "- Focused on scalable architecture & QA testing.",
      ],
      imageUrl: Esmart,
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Tally Integration (Planned)", icon: <FaDatabase /> },
        { name: "Project Leadership", icon: <FaChartLine /> },
      ],
    },
  ];

  useEffect(() => {
    if (location.state && location.state.projectId) {
      const { projectId } = location.state;
      if (projectRefs.current[projectId]) {
        setTimeout(() => {
          projectRefs.current[projectId].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location.state]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
        delay: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 1,
        delay: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center min-h-screen text-center bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4 z-10 custom-text-shadow">
          My Projects
        </h2>
        <p className="text-green-300 mb-12 max-w-lg z-10">
          Explore a selection of my key projects, highlighting my expertise in
          web and mobile development, and UI/UX design.
        </p>

        <div className="flex flex-col w-full max-w-7xl">
          {projects.map((project, index) => (
            <motion.section
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className={`flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-100px)] py-16 px-4 md:px-8 lg:px-16
                          ${
                            index % 2 === 0
                              ? "bg-black md:flex-row"
                              : "bg-green-950 md:flex-row-reverse"
                          }
                          relative overflow-hidden group`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
            >
              {/* Decorative vertical line and dots */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-green-800 hidden sm:block z-0"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-green-600 border-2 border-green-900 z-10 hidden sm:block"></div>
              {index < projects.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-4 h-4 rounded-full bg-green-600 border-2 border-green-900 z-10 hidden sm:block"></div>
              )}

              <motion.div
                variants={imageVariants}
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                } mb-8 md:mb-0`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl border-2 border-green-800 transform transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              <motion.div
                variants={textVariants}
                className={`w-full md:w-1/2 text-left z-10 ${
                  index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <h3 className="text-green-400 font-extrabold text-4xl md:text-5xl mb-4 leading-tight custom-text-shadow-light">
                  {project.title}
                </h3>
                <p className="text-green-200 text-lg md:text-xl mb-6 leading-relaxed">
                  {Array.isArray(project.description) ? (
                    project.description.map((line, i) => (
                      <p
                        key={i}
                        className="text-green-200 text-lg md:text-xl mb-2 leading-relaxed"
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-green-200 text-lg md:text-xl mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-green-800 text-green-100 text-sm px-4 py-2 rounded-full font-medium shadow-md inline-flex items-center"
                    >
                      {tech.icon && <span className="mr-2">{tech.icon}</span>}
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold
                                bg-transparent text-green-300 border border-green-600
                                hover:bg-green-600 hover:text-white hover:border-green-600
                                transition-all duration-300 ease-in-out transform hover:scale-105
                                shadow-sm hover:shadow-md hover:shadow-green-500/50 group"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold
                                bg-transparent text-green-300 border border-green-600
                                hover:bg-green-600 hover:text-white hover:border-green-600
                                transition-all duration-300 ease-in-out transform hover:scale-105
                                shadow-sm hover:shadow-md hover:shadow-green-500/50 group"
                    >
                      App Store Link
                      <FaGooglePlay className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
