import React, { memo } from 'react';
import { Projects as ProjectsSection } from '../components/sections/Projects';

const Projects = memo(() => {
  return (
    <div className="min-h-screen pt-20">
      <ProjectsSection />
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
