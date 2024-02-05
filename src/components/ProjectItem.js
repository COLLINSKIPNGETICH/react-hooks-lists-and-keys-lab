import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {<ul>
        {technologies.map((tech, index) => (
          <li key={index}>
            <span>{tech}</span>
          </li>
        ))}
      </ul>  /* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
