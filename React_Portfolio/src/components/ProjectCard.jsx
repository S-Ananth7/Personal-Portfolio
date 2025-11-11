import React from "react";

const ProjectCard = ({ title, description, technologies }) => (
  <div className="p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-cyan-500/20 border border-gray-700 hover:border-cyan-500/50 transform hover:-translate-y-1 transition animate-loadContent">
    <h3 className="text-xl font-bold mb-3 text-cyan-400">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span key={i} className="px-3 py-1 text-xs bg-cyan-900 text-cyan-200 rounded-md">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
