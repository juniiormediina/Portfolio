import React from "react";
import data_projects from "./data/projects_data";

const Projects = () => {
  return (
    <div className="container projects">
      <div className="row">
        {data_projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
