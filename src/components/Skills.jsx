import React from "react";

const Skills = () => {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: ["Python", "Java", "C", "JavaScript"],
        },
        {
          category: "Web Development",
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
            "Mongoose",
          ],
        },
        {
          category: "Machine Learning & Data Science",
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
          skills: [
            "PyTorch",
            "Tensorflow",
            "GAN",
            "NLP",
            "Computer Vision",
    
          ],
        },

      ];

  return (
    <section id="skills" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8 md:mb-16">Skills</h2>

        {/* Scrollable Categories */}
        <div className="flex overflow-x-auto space-x-8 scroll-smooth overflow-hidden">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl flex-shrink-0 w-[250px] transform transition-all duration-300 hover:scale-105"
            >
              {/* Category Heading */}
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>

              {/* Scrollable Skills */}
              <div className="flex flex-wrap flex-row md:overflow-x-auto md:py-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-600 px-2 rounded-lg shadow-md text-center mb-4 mr-1 transform transition-all duration-300 hover:scale-105"
                    style={{ minWidth: "20px" }}
                  >
                    <p className="md:text-md font-semibold">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
