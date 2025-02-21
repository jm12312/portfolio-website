import React from "react";

const ProjectCard = ({ project, onClick }) => {
  const { title, headline, techStack, logo } = project;

  return (
    <div
      className="group bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl overflow-hidden h-auto transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 flex flex-col w-full md:w-[350px] md:text-xl relative"
      onClick={() => onClick(project)}
    >
      {/* Hover overlay with gradient */}
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Project Image with overlay gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <img
          src={logo}
          alt={title}
          className="w-full h-[210px] object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick action buttons - right corner */}
        <div className="absolute top-3 right-3 z-20 flex space-x-2">
          {/* View button */}
          <div className="w-10 h-10 rounded-full bg-gray-800/70 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100  duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
      </div>

      {/* Project Details */}
      <div className="p-6 flex-grow flex flex-col relative">
        {/* Title with animated underline effect */}
        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 relative inline-block">
          {title}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 absolute bottom-0"></span>
        </h3>
        
        <p className="text-sm text-gray-300 mb-5 leading-relaxed flex-grow">
          {headline}
        </p>

        {/* Tech Stack with improved design */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800/70 text-sm font-medium px-3 py-1 rounded-full border border-gray-700/50 backdrop-blur-sm hover:bg-blue-900/20 hover:border-blue-700/30 hover:text-blue-200 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        

      </div>
    </div>
  );
};

export default ProjectCard;