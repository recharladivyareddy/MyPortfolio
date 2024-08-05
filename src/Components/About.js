import React from "react";
import Typewriter from "./TypeWriter";
import './About.css';
import image from "../assets/images/m.png";
function About() {
  return (
    <div className="about-container">
      <div className="text">
        <p>
        
         <Typewriter text=" Hi, I am Divya. I am a passionate Computer Science Engineer interested in coding and problem-solving.
          I have done two major projects and gained practical knowledge." delay={100} />
      
        </p>
        <img src={image} alt="Description" />
      </div>
    </div>
  );
}

export default About;
