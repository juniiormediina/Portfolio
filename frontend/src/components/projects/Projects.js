import React, { useState } from "react";
import { motion } from "framer-motion";

/* data */
import data_projects from "../../assets/Data/projects_data";

/* components */
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");

  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
    setActive(name);
  };

  const projects__variants = {
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
      className="container projects"
      variants={projects__variants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects__navbar">
        <div
          className={active === "All" && "projects__navbar-active"}
          onClick={() => {
            setProjects(data_projects);
            setActive("All");
          }}
        >
          All
        </div>
        <div
          className={active === "react.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("react.js")}
        >
          React
        </div>
        <div
          className={active === "MySQL" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("MySQL")}
        >
          MySQL
        </div>
        <div
          className={active === "node.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("node.js")}
        >
          Node
        </div>
        <div
          className={active === "vanilla" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("vanilla")}
        >
          Vanilla
        </div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
