import React from "react";
import { motion } from "framer-motion";

/* component */
import SkillCard from "./SkillCard";

import { skills } from "../../assets/Data/about_data";

const About = () => {
  const about__variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className="about"
      variants={about__variants}
      initial="hidden"
      animate="visible"
    >
      <h6 className="about__intro">
        I'm a front-End developer with knowledge in HTML5, CSS3, Javascript and
        React.js. I love the web development and enjoy every project I work on,
        there's something new to learn every day. I like working on teams that
        are creative and have initiative.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading"> What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
