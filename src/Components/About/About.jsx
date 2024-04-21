import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about" className="about-img" />
        <img src={play_icon} alt="play" className="play-icon"/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quas provident asperiores ducimus, molestiae numquam eveniet, ea velit distinctio, dignissimos fugit voluptatibus pariatur omnis atque voluptatem magni saepe eos natus.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eaque quod reprehenderit aliquam tempore obcaecati dolores odit nesciunt nisi, voluptatibus maiores quisquam cupiditate a hic temporibus non, debitis modi aperiam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magnam et quae quod eos? Neque vitae odio, eum recusandae consequatur corporis aspernatur ut incidunt cum! Laudantium accusamus animi sit dolorem.</p>
      </div>
    </div>
  );
};

export default About;
