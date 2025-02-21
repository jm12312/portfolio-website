import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">Ready to collaborate?</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            I'm always open to exciting opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards and Buttons */}
        <div className="max-w-4xl mx-auto">
          {/* Location info */}
          {/* <div className="flex items-center justify-center mb-10">
            <div className="flex items-center space-x-2 text-gray-300 bg-gray-800/50 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-700/30">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Based in Mumbai • Available for remote work worldwide</span>
            </div>
          </div> */}
          
          {/* Contact Method Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/joshuamenezes1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-6 rounded-xl border border-blue-800/50 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 flex flex-col items-center hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-3 p-4 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-colors duration-300">
                <FaLinkedin className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
              <p className="text-gray-400 text-sm mb-3">Professional Network</p>
              <span className="text-blue-400 text-sm flex items-center gap-1 mt-auto group-hover:underline">
                Connect
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/jm12312"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 rounded-xl border border-gray-700/50 hover:border-gray-500/50 backdrop-blur-sm transition-all duration-300 flex flex-col items-center hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/10"
            >
              <div className="mb-3 p-4 bg-gray-700/20 rounded-full group-hover:bg-gray-700/30 transition-colors duration-300">
                <FaGithub className="w-8 h-8 text-gray-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-1">GitHub</h3>
              <p className="text-gray-400 text-sm mb-3">Code & Projects</p>
              <span className="text-gray-300 text-sm flex items-center gap-1 mt-auto group-hover:underline">
                Browse
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Email Card */}
            <a
              href="mailto:joshuamenezes04@gmail.com"
              className="group bg-gradient-to-br from-green-900/40 to-green-800/40 p-6 rounded-xl border border-green-800/50 hover:border-green-500/50 backdrop-blur-sm transition-all duration-300 flex flex-col items-center hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="mb-3 p-4 bg-green-600/20 rounded-full group-hover:bg-green-600/30 transition-colors duration-300">
                <FaEnvelope className="w-8 h-8 text-green-400 group-hover:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p className="text-gray-400 text-sm mb-3">Direct Contact</p>
              <span className="text-green-400 text-sm flex items-center gap-1 mt-auto group-hover:underline">
                Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMe;