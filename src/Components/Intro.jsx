import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; // For email, phone, and location
import { FaLinkedin } from 'react-icons/fa'; // For LinkedIn
import profile from "../assets/profile.jpg"
export const Intro = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [activeExperience, setActiveExperience] = useState("nubiznez");

  // Intersection Observer hooks for scroll animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Reusable Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Consistent green gradient for headlines
  const textGradient =
    "bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text";

  // Experience data (remains unchanged)
  const experiences = {
    nubiznez: {
      title: "Nubiznez",
      role: "React Js - Front-End Development",
      duration: "Feb 2024 - Present",
      bullets: [
        "Developed and maintained responsive web applications using React Js and Tailwind Css.",
        "Improved the performance and efficiency of applications through state management using Redux.",
        "Utilized Figma to implement and refine design elements, ensuring a user-friendly interface.",
        "Contributed to building mobile applications using React Native for enhanced accessibility and performance.",
      ],
    },
    codesoft: {
      title: "Code-soft",
      role: "Intern",
      duration: "Aug 2023 - Sep 2023",
      bullets: [
        "Actively participated in a one-month UI/UX design internship.",
        "Successfully completed assigned tasks, gaining practical experience in wireframing and prototyping.",
      ],
    },
  };

  // Projects Data (remains unchanged, but IDs are crucial)
  const projects = [
    {
      id: "crm-dashboard",
      title: "CRM Dashboard for thebusstand.com",
      description:
        "A user-friendly dashboard for managing bookings, users, and system analytics.",
      imageUrl: "https://placehold.co/600x400/111/fff?text=CRM+Dashboard",
    },
    {
      id: "esmart-accounting",
      title: "E-Smart Accounting Application",
      description:
        "A web-based accounting platform to assist businesses with invoice tracking and expense management.",
      imageUrl: "https://placehold.co/600x400/111/fff?text=E-Smart+Accounting",
    },
    {
      id: "thebusstand-website",
      title: "Thebusstand.com Website",
      description:
        "A responsive web application for bus ticket bookings, user management, and real-time data display.",
      imageUrl: "https://placehold.co/600x400/111/fff?text=Thebusstand.com",
    },
    {
      id: "react-native-app",
      title: "React Native Mobile App",
      description:
        "A mobile application built with React Native to provide enhanced accessibility and performance on mobile devices.",
      imageUrl: "https://placehold.co/600x400/111/fff?text=React+Native+App",
    },
  ];

  // Function to handle project card click
  const handleProjectClick = (projectId) => {
    navigate("/projects", { state: { projectId: projectId } });
  };

  return (
    <main className="bg-black text-gray-200 font-inter min-h-screen relative">
      <style>{`
        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        ::-webkit-scrollbar-thumb {
          background: #34d399; /* green-500 */
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #10b981; /* green-700 */
        }
        @keyframes spin-slow-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow-fast {
          animation: spin-slow-fast 6s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="min-h-screen flex items-center py-16"
        >
          <motion.div
            className="grid lg:grid-cols-2 items-center gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="text-left">
              <motion.p
                variants={itemVariants}
                className="text-lg text-green-400 mb-2"
              >
                Hey, I'm Praveen 👋
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold text-white mb-4"
              >
                <span className={textGradient}>Frontend</span> Developer
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-400 leading-relaxed mb-8"
              >
                I'm a frontend developer focused on building clean, responsive
                websites and mobile apps. I work mainly with ReactJS, Tailwind
                CSS, and React Native.
              </motion.p>
              <motion.div variants={itemVariants} className="flex gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full border border-green-500 text-green-400 font-bold transition-transform hover:scale-105 hover:bg-green-500 hover:text-gray-950"
                >
                  Browse Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-green-500 text-green-400 font-bold transition-transform hover:scale-105 hover:bg-green-500 hover:text-gray-950"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-transparent p-1 animate-spin-slow-fast" />
                <img
                  src={profile}
                  alt="K P Praveen"
                  className="relative w-full h-full rounded-full object-cover border-4 border-gray-950"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Projects<span className="text-green-500">.</span>
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 transition-transform hover:scale-[1.02] cursor-pointer"
                onClick={() => handleProjectClick(project.id)} // Call handleProjectClick
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            About me<span className="text-green-500">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-400 leading-relaxed max-w-4xl"
          >
            In my role as a Front-End Developer, I focus on building clean,
            responsive websites and mobile apps that are easy to use. I work
            mainly with ReactJS, Tailwind CSS, and React Native, turning UI/UX
            designs into real, functional products. I enjoy collaborating with
            designers and backend developers to make everything work smoothly.
            Lately, I've been taking the lead on a new accounting application
            project.
          </motion.p>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} id="experience" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Experience<span className="text-green-500">.</span>
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="lg:col-span-1 bg-gray-900 rounded-lg p-4 shadow-xl border border-gray-800"
            >
              <ul className="space-y-2">
                {Object.keys(experiences).map((key, index) => (
                  <motion.li
                    key={key}
                    variants={itemVariants}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      activeExperience === key
                        ? "bg-green-500 text-gray-950 font-semibold"
                        : "text-white hover:bg-gray-800"
                    }`}
                    onClick={() => setActiveExperience(key)}
                  >
                    {experiences[key].title}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="lg:col-span-2 bg-gray-900 rounded-lg p-6 shadow-xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {experiences[activeExperience].role}
              </h3>
              <p className="text-gray-400 mb-4">
                {experiences[activeExperience].duration}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {experiences[activeExperience].bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Skills<span className="text-green-500">.</span>
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Languages
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Frameworks/Libraries
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>React.Js</li>
                <li>React Native</li>
                <li>Tailwind CSS</li>
                <li>BootStrap</li>
                <li>Ant Design (Antd)</li>
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Certifications
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>React.Js, Scalar Topics</li>
                <li>UX/UI Figma, Code-soft Internship Certificate</li>
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-xl"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Education
              </h3>
              <p className="text-white font-semibold">
                Velalar College of Engineering and Technology
              </p>
              <p className="text-sm text-gray-400">
                B.E - Computer Science Engineering
              </p>
              <p className="text-green-400">8.3 CGPA</p>
              <p className="text-gray-500 text-xs">Aug 2019 - Apr 2023</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In Touch<span className="text-green-500">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Feel free to reach out to me for collaborations or just to say hi!
            I'm always open to new opportunities.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.p
              variants={itemVariants}
              className="text-xl text-green-400 flex items-center gap-2"
            >
              <MdEmail className="text-2xl" /> {/* Email Icon */}
              <a
                href="mailto:praveen1510kp@gmail.com"
                className="hover:underline flex items-center"
              >
                praveen1510kp@gmail.com
              </a>
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 flex items-center gap-2"
            >
              <MdPhone className="text-2xl" /> {/* Phone Icon */}
              Phone: 9688553316
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 flex items-center gap-2"
            >
              <MdLocationOn className="text-2xl" /> {/* Location Icon */}
              Address: Maramangalathupatti, Salem, Tamil Nadu
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="https://www.linkedin.com/in/kppraveen/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-green-500 text-gray-950 font-bold transition-transform hover:scale-105 flex items-center gap-2"
            >
              <FaLinkedin className="text-xl" /> {/* LinkedIn Icon */}
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        </section>
      </div>
    </main>
  );
};
