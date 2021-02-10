import React from "react";
/* icons */
import api from "../assets/icons/api.svg";
import backend from "../assets/icons/backend.svg";
import algo from "../assets/icons/algo.svg";
import computer from "../assets/icons/computer.svg";
import repair from "../assets/icons/repair.svg";
import puzzle from "../assets/icons/puzzle.svg";
/* component */
import SkillCard from "./SkillCard";

const skills = [
  {
    icon: computer,
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quibusdam.",
  },
  {
    icon: repair,
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quibusdam.",
  },
  {
    icon: api,
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quibusdam.",
  },
  {
    icon: algo,
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quibusdam.",
  },
  {
    icon: puzzle,
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quibusdam.",
  },
  {
    icon: backend,
    title: "Lorem ipsum dolor sit.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quibusdam.",
  },
];

const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">
        I Describe myself as someone who's persistent, a quick learner and loves
        problem solving by using simple and scalable solutions.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading"> What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
