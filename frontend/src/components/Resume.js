import React from "react";
/* icons */
import react from "../assets/icons/react.svg";
import python from "../assets/icons/python.svg";

/* components */
import Bar from "./Bar";

const languages = [
  {
    icon: python,
    name: "Python",
    level: "30",
  },
  {
    icon: react,
    name: "JavaScript",
    level: "97",
  },
  {
    icon: react,
    name: "React",
    level: "90",
  },
  {
    icon: react,
    name: "HTML",
    level: "100",
  },
  {
    icon: python,
    name: "Django",
    level: "40",
  },
  {
    icon: react,
    name: "Bootstrap",
    level: "98",
  },
];

const tools = [
  {
    icon: react,
    name: "Illustrator",
    level: "85",
  },
  {
    icon: react,
    name: "Postman",
    level: "95",
  },
  {
    icon: react,
    name: "Git",
    level: "80",
  },
];

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">System Engineering</h5>
            <p className="resume-card__name">
              Instituto Universitario Politecnico Santiago Mariño
            </p>
            <p className="resume-card__details">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
              voluptatum.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Freelancer</h5>
            <p className="resume-card__name">Lorem, ipsum.</p>
            <p className="resume-card__details">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
              voluptatum.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-languages__heading">
            Languages and Frameworks
          </h5>
          <div className="resume-languages__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-languages__heading">Tools and Softwares</h5>
          <div className="resume-languages__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
