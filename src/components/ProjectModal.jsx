import React from "react";
import { FaGithub, FaYoutube, FaGlobe, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return;

  const { title, headline, info, techStack, images, links } = project;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 "
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-2xl w-full max-w-6xl overflow-hidden relative border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          aria-label="Close modal"
          className="absolute top-4 right-4 bg-gray-800/80 text-gray-400 hover:text-red-500 hover:bg-gray-700/80 rounded-full p-2 transition-all duration-200 z-50 group"
          onClick={onClose}
        >
          <FaTimes className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="flex flex-col md:flex-row h-[80vh] max-h-[80vh]">
          {/* Left side: Carousel */}
          <div className="w-full md:w-7/12 h-[40vh] md:h-full overflow-hidden relative bg-black/40">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ 
                clickable: true,
                dynamicBullets: true, 
                renderBullet: (index, className) => {
                  return `<span class="${className} bg-white/70 hover:bg-white transition-colors duration-300"></span>`;
                }
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="h-full w-full"
              spaceBetween={0}
              slidesPerView={1}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="bg-black">
                  <div className="flex items-center justify-center h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                    <img
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right side: Content */}
          <div className="w-full md:w-5/12 p-6 overflow-y-auto relative flex flex-col">
            {/* Project Details */}
            <div className="pb-3 border-b border-gray-700/50 mb-2">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 mb-2">
                {title}
              </h3>
              <p className="text-md text-gray-300 italic">{headline}</p>
            </div>
            
            {/* Project Info with scrollable area */}
            <div className="flex-grow overflow-y-auto mb-6 pr-2 custom-scrollbar">
              {info && (
                <div className="text-sm leading-relaxed text-gray-200 whitespace-pre-line">
                  {info}
                </div>
              )}
            </div>

            {/* Tech Stack */}
            <div className="mt-auto">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800/80 text-xs font-medium px-3 py-1 rounded-full border border-gray-700/50 backdrop-blur-sm hover:bg-gray-700/60 hover:border-blue-700/30 hover:text-blue-200 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links Section */}
              <div className="mt-auto">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">LINKS</h4>
                <div className="flex flex-wrap gap-3">
                  {links.demo && (
                    <a
                      href={links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <button className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-sm flex items-center gap-2 py-2 px-4 rounded-lg shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
                        <FaGlobe className="text-blue-200 group-hover:animate-pulse" />
                        <span>Live Demo</span>
                      </button>
                    </a>
                  )}
                  {links.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <button className="bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-sm flex items-center gap-2 py-2 px-4 rounded-lg shadow-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
                        <FaGithub className="text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Source Code</span>
                      </button>
                    </a>
                  )}
                  {links.yt && (
                    <a
                      href={links.yt}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <button className="bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-sm flex items-center gap-2 py-2 px-4 rounded-lg shadow-lg hover:shadow-red-600/20 transition-all duration-300">
                        <FaYoutube className="text-red-200 group-hover:scale-110 transition-transform duration-300" />
                        <span>Video Demo</span>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.1);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.5);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 0.7);
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;