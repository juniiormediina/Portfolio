import React from "react";

/* icons */
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";

/* files */
import resume from "../assets/resume.pdf";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:juniiormediina@gmail.com");
  };

  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Junior <span>Medina</span>
      </div>
      <div className="sidebar__item sidebar__title">FrontEnd Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="!#">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href="!#">
          <img src={instagram} alt="instagram" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="!#">
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            GitHub
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Medellín, Colombia
        </div>
        <div className="sidebar__item">juniiormediina@gmail.com</div>
        <div className="sidebar__item">7835323423/9876543210</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </div>
  );
};

export default Sidebar;
