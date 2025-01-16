import './App.css';
import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Skills from './components/Skills';
import cityscape from "./images/cityscape.jpeg"
import profilepic from "./images/Profile_picture.png"
import axios from "axios"
import { useState, useEffect } from 'react';
const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5010/api/home')  // Flask endpoint
      .then(response => setData(response.data.message))
      .catch(error => console.error("Error fetching data:", error));

  }, []);
  // console.log(data);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section with Cityscape Background */}
      <section
        id="home"
        className="h-screen bg-fixed bg-cover bg-center flex items-center justify-center text-center text-gray-300"
        style={{
          backgroundImage: `url(${cityscape})`,
        }}
      >
        <div className="px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-wrap">
            Designing the Future, <br/>One Pixel at a Time...
          </h1>
        </div>
      </section>

      {/* Scrollable Content */}
      <section id="about" className="min-h-screen bg-white text-gray-800">
        <div className="container mx-auto md:px-4 md:py-16 flex md:flex-row flex-col-reverse justify-evenly md:w-3/4 w-5/6">
          <div className='md:w-5/6'>
            <h2 className="sm:text-3xl font-bold text-center my-6 font-montserrat">About Me</h2>
            <p className="md:text-md lg:text-lg leading-6 md:leading-7 lg:leading-9 text-wrap text-xs text-gray-900 font-sans font-normal line">
              {/* Welcome to my portfolio! I am a passionate web developer, designer, and problem solver. Explore my projects, learn about my skills, and connect with me. */}
              Hi, I’m Joshua Menezes!
I’m a Computer Engineering student at D.J. Sanghvi College of Engineering, driven by a passion for technology. With a strong foundation in programming and problem-solving, I enjoy turning complex challenges into elegant solutions.

My expertise spans web development, machine learning, and data science, and I’m always eager to learn and grow in these dynamic fields. Whether it’s exploring cutting-edge technologies or refining my skills, I strive for excellence in everything I do.

When I’m not working on technical challenges, I enjoy playing chess, diving into new ideas, and staying curious about the world around me.
            </p>
          </div>
          <div>
            <img src={profilepic}/>
          </div>

        </div>
      </section>


        <Skills/>
        <ContactMe/>

    </div>
  );
};

export default App;