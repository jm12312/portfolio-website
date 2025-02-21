import React from 'react'
import { useState } from 'react';
import projects from "../data/projects.js"
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx';

function Project() {

   const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project); // Set the selected project to open modal
  };

  const closeModal = () => {
    setSelectedProject(null); // Close modal
  };

  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8 ">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* Modal */}
        <ProjectModal project={selectedProject} onClose={closeModal} />
      </div>
    </section>
  )
}

export default Project
