import React, { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [

    {
      category: "Web Development",
      icon: "🌐",
      skills: [
        "React JS",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "Mongo DB",
      ],
    },
    {
      category: "Machine Learning & Data Science",
      icon: "📊",
      skills: [
        "Python",
        "Scikit-Learn",
        "XGBoost",
        "NumPy",
        "Pandas",
        "SQL",
        "Data Visualisation",
        "Hyperparameter tuning",
        "Model Ensembling",
      ],
    },
    {
      category: "Deep Learning",
      icon: "🧠",
      skills: [
        "PyTorch",
        "Tensorflow",
        "GAN",
        "NLP",
        "Computer Vision",
      ],
    },
    {
      category: "Programming Languages",
      icon: "🖥️",
      skills: ["Python", "Java", "C", "JavaScript"],
    },
  ];

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Technical Skills
            </span>
            {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div> */}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My expertise spans across different domains of software development and data science
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-10 gap-2 text-lg">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 
                ${activeCategory === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
            >
              <span>{category.icon}</span>
              <span>{category.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Display - Current Category */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 transition-all duration-500 transform hover:shadow-blue-300/30">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">{skillCategories[activeCategory].icon}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {skillCategories[activeCategory].category}
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skillCategories[activeCategory].skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-gray-100/80 backdrop-blur-sm border border-gray-200 p-3 rounded-xl shadow-md transition-all duration-300
                          hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 hover:scale-105 hover:border-blue-300/60"
              >
                <p className="font-medium text-center text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-10 gap-2">
          {skillCategories.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeCategory === index ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600' : 'w-3 bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;