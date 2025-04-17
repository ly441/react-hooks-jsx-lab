import React from "react";
import { image } from "../data/data"; // assuming image is a valid image path or import


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love coding and understanding my code has to be my biggest flex</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
