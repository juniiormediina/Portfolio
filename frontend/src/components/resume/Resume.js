import React from "react";
import { motion } from "framer-motion";

import Bar from "./Bar";
import { tools, languages } from "../../assets/Data/resume_data";

const Resume = () => {
  const resume__variants = {
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
      className="container resume"
      variants={resume__variants}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  );
};

export default Resume;
