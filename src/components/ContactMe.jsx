import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">Let's Connect</h2>
        <p className="text-lg mb-8">
          I'm always open to exciting opportunities and collaborations. Feel free to
          reach out to me through the platforms below!
        </p>

        <div className="flex justify-center md:space-x-8 space-x-3">
          {/* LinkedIn Button with Icon */}
          <a
            href="https://www.linkedin.com/in/joshuamenezes1/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white md:px-6 md:py-3 px-1 py-2 rounded-lg text-lg transition duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          {/* GitHub Button with Icon */}
          <a
            href="https://github.com/jm12312"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white md:px-6 md:py-3 px-1 py-2 rounded-lg text-lg transition duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          {/* Email Button with Icon */}
          <a
            href="mailto:joshuamenezes04@gmail.com"
            className="bg-green-600 hover:bg-green-700 text-white md:px-6 md:py-3 px-1 py-2 rounded-lg text-lg transition duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;