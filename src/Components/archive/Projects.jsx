import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// Import React Icons
import { FaExternalLinkAlt, FaGooglePlay, FaReact, FaMobileAlt, FaCodeBranch, FaDatabase, FaChartLine } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import { IoSpeedometerOutline } from 'react-icons/io5';


export const Projects = () => {
  const location = useLocation();
  const projectRefs = useRef({});

  const projects = [
    {
      id: "thebusstand-website",
      title: "TheBusStand.com Web Platform",
      description: "Developed and maintained the core responsive web platform for bus ticket bookings. This involved creating an intuitive user interface for searching, booking and managing bus travel. The platform was designed with a focus on seamless user experience across various devices, ensuring responsiveness and performance.",
      imageUrl: "https://placehold.co/1200x600/000/violet?text=TheBusStand.com+Web+Platform", // Violet Placeholder
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "API Integration", icon: <FaCodeBranch /> }
      ],
      liveLink: "https://thebusstand.com/"
    },
    {
      id: "react-native-app",
      title: "React Native Mobile Application",
      description: "Contributed to building a robust mobile application using React Native, enhancing accessibility and performance for users on mobile devices. This app aimed to provide a native-like experience for bus ticket booking and related services, ensuring smooth navigation and efficient data handling.",
      imageUrl: "https://placehold.co/1200x600/000/violet?text=React+Native+App", // Violet Placeholder
      technologies: [
        { name: "React Native", icon: <FaMobileAlt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Mobile Development", icon: <FaMobileAlt /> }
      ],
      appStoreLink: "https://play.google.com/store/apps/details?id=com.thebusstandapp&pcampaignid=web_share"
    },
    {
      id: "crm-dashboard",
      title: "CRM Dashboard for thebusstand.com",
      description: "Created a modular and user-friendly CRM dashboard specifically designed for thebusstand.com. This dashboard facilitates the management of bookings, users, and system analytics. It features integrated APIs for dynamically displaying real-time data and updates, along with role-based access for different administrative levels, ensuring a comprehensive and secure management system.",
      imageUrl: "https://placehold.co/1200x600/000/violet?text=CRM+Dashboard", // Violet Placeholder
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "API Integration", icon: <FaCodeBranch /> },
        { name: "User Management", icon: <IoSpeedometerOutline /> }
      ]
    },
    {
      id: "esmart-accounting",
      title: "E-Smart Accounting Application",
      description: "Currently leading the front-end development of a sophisticated web-based accounting platform. This application is designed to assist businesses with crucial financial tasks suchs as invoice tracking, expense management, and is planned for seamless integration with Tally data. The project's architecture focuses on scalability and modularity, ensuring a robust and maintainable system. I am collaborating closely with backend and design teams to ensure fluid API flow and an exceptional user experience, overseeing the front-end development lifecycle from planning to quality assurance.",
      imageUrl: "https://placehold.co/1200x600/000/violet?text=E-Smart+Accounting+App", // Violet Placeholder
      technologies: [
        { name: "ReactJS", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Tally Integration (Planned)", icon: <FaDatabase /> },
        { name: "Project Leadership", icon: <FaChartLine /> }
      ]
    },
  ];

  useEffect(() => {
    if (location.state && location.state.projectId) {
      const { projectId } = location.state;
      if (projectRefs.current[projectId]) {
        setTimeout(() => {
          projectRefs.current[projectId].scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        delay: 0.2
      }
    }
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
        delay: 0.1
      }
    }
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-violet-400 mb-4 z-10 custom-text-shadow">
          My Projects
        </h2>
        <p className="text-violet-300 mb-12 max-w-lg z-10">
          Explore a selection of my key projects, highlighting my expertise in web and mobile development, and UI/UX design.
        </p>

        <div className="flex flex-col w-full max-w-7xl">
          {projects.map((project, index) => (
            <motion.section
              key={project.id}
              ref={el => projectRefs.current[project.id] = el}
              className={`flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-100px)] py-16 px-4 md:px-8 lg:px-16
                          ${index % 2 === 0 ? 'bg-gradient-to-br from-gray-950 to-violet-950 md:flex-row' : 'bg-gradient-to-tl from-gray-950 to-violet-950 md:flex-row-reverse'}
                          relative overflow-hidden group`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* Decorative vertical line and dot for timeline feel */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-violet-800 hidden sm:block z-0"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-violet-600 border-2 border-violet-900 z-10 hidden sm:block"></div>
              {index < projects.length - 1 && (
                 <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-4 h-4 rounded-full bg-violet-600 border-2 border-violet-900 z-10 hidden sm:block"></div>
              )}

              <motion.div
                variants={imageVariants}
                className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-8 md:mb-0`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl border-2 border-violet-800 transform transition-transform duration-500 group-hover:scale-102"
                />
              </motion.div>

              <motion.div
                variants={textVariants}
                className={`w-full md:w-1/2 text-left z-10 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}
              >
                <h3 className="text-violet-400 font-extrabold text-4xl md:text-5xl mb-4 leading-tight custom-text-shadow-light">
                  {project.title}
                </h3>
                <p className="text-violet-200 text-lg md:text-xl mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-violet-800 text-violet-100 text-sm px-4 py-2 rounded-full font-medium shadow-md inline-flex items-center">
                      {tech.icon && <span className="mr-2">{tech.icon}</span>}
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Project Links Section */}
                <div className="flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold
                                 bg-transparent text-violet-300 border border-violet-600
                                 hover:bg-violet-600 hover:text-white hover:border-violet-600
                                 transition-all duration-300 ease-in-out transform hover:scale-105
                                 shadow-sm hover:shadow-md hover:shadow-violet-500/50 group"
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
                                 bg-transparent text-purple-300 border border-purple-600
                                 hover:bg-purple-600 hover:text-white hover:border-purple-600
                                 transition-all duration-300 ease-in-out transform hover:scale-105
                                 shadow-sm hover:shadow-md hover:shadow-purple-500/50 group"
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