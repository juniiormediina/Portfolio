import React from "react";
import { motion } from "framer-motion";

/* icons */
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import pin from "../../assets/icons/pin.svg";
import tie from "../../assets/icons/tie.svg";
import JuniorMedina from "../../assets/JuniorMedina.png";

/* file */
import resume from "../../assets/resume.pdf";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:juniiormediina@gmail.com");
  };

  const sidebar__variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar__variant}
      initial="hidden"
      animate="visible"
    >
      <img src={JuniorMedina} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Junior <span>Medina</span>
      </div>
      <div className="sidebar__item sidebar__title">Software Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="https://www.linkedin.com/in/juniorhmedinab/">
          <img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" />
        </a>
        <a href="https://github.com/juniiormediina">
          <img src={github} alt="instagram" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Medellín, Colombia
        </div>
        <div className="sidebar__item">juniiormediina@gmail.com</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Email Me
      </div>
    </motion.div>
  );
};

export default Sidebar;
