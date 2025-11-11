import React from "react";
import { Compass } from "lucide-react";

const SkillCard = ({ category, skills }) => (
  <div className="p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition border border-gray-700 hover:border-cyan-500/50 animate-loadContent">
    <h3 className="text-xl font-bold mb-4 text-cyan-400 border-b border-gray-700 pb-2 flex items-center">
      <Compass className="w-5 h-5 mr-2" /> {category}
    </h3>
    <ul className="flex flex-wrap gap-2 mt-4">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="px-3 py-1 text-sm bg-gray-700 text-gray-200 rounded-full hover:scale-105 hover:bg-cyan-600 transition"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
