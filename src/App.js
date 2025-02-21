import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Portfolio - Joshua Menezes";
    axios.get('https://portfolio-website-backend-m210.onrender.com/api/home')
      .then(response => {
        setData(response.data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section with Parallax Effect */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/images/cityscape.jpeg")',
            filter: 'brightness(0.7)',
          }}
        ></div>
        <div className="relative z-10 px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Designing the Future,<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              One Pixel at a Time...
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
            Creating innovative solutions with passion and precision
          </p>
          <div className="mt-8">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section with Modern Card Design */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative mb-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About Me</span>
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:w-2/5 overflow-hidden group">
              <div className="relative transform transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="images/Profile_picture.png" 
                  alt="Joshua Menezes" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Hi, I'm Joshua Menezes!</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a Computer Engineering student at D.J. Sanghvi College of Engineering, driven by a passion for technology. With a strong foundation in programming and problem-solving, I enjoy turning complex challenges into elegant solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                My expertise spans web development, machine learning, and data science, and I'm always eager to learn and grow in these dynamic fields. Whether it's exploring cutting-edge technologies or refining my skills, I strive for excellence in everything I do.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not working on technical challenges, I enjoy playing chess, diving into new ideas, and staying curious about the world around me.
              </p>
              <div className="mt-8 flex gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
                <a 
                  href="#skills" 
                  className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-blue-400"
                >
                  View Skills
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Project/>
      
      {/* Skills Section */}
      <Skills/>
      
      {/* Contact Section */}
      <ContactMe/>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Joshua Menezes. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm3 15.5h-2v-2.5c0-.55-.45-1-1-1s-1 .45-1 1V17.5h-2v-8h2v3.5c.4-.82 1.17-1.5 2-1.5 1.66 0 3 1.34 3 3v3z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;