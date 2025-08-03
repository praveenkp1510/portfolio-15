import React from "react";

export const Skills = () => {
  const skills = [
    { name: "HTML5", color: "bg-cyan-400", icon: "🌐" },
    { name: "CSS3", color: "bg-cyan-500", icon: "🎨" },
    { name: "JavaScript", color: "bg-cyan-600", icon: "⚡" },
    { name: "React.js", color: "bg-cyan-400", icon: "⚛️" },
    { name: "React Native", color: "bg-cyan-500", icon: "📱" },
    { name: "Tailwind CSS", color: "bg-cyan-600", icon: "💨" },
    { name: "Bootstrap", color: "bg-cyan-400", icon: "🅱️" },
    { name: "Figma", color: "bg-cyan-500", icon: "🎯" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-black text-center px-4"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6">
        Skills & Tech Stack
      </h2>
      <p className="text-cyan-100 mb-8 max-w-xl">
        I specialize in modern web and mobile development with a focus on clean
        UI, animation, and collaboration across teams.
      </p>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className={`rounded-xl shadow-lg flex flex-col items-center py-6 ${skill.color} bg-opacity-10 border-2 border-cyan-400`}
            whileHover={{ scale: 1.07, y: -8 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <div className="font-bold text-lg text-cyan-200">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
      <p className="text-cyan-200 max-w-lg">
        Always eager to learn new frameworks and design trends!
      </p>
    </motion.div>
  );
};
