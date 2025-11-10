// src/components/ExperienceCard.jsx
import React from "react";

const ExperienceCard = ({ title, company, duration, description }) => (
  <div className="p-6 bg-gray-800 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition border border-gray-700 hover:border-cyan-500/50 animate-loadContent">
    <div className="flex justify-between items-start mb-3 border-b border-gray-700 pb-2">
      <div>
        <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
        <p className="text-gray-400 font-medium">{company}</p>
      </div>
      <p className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">{duration}</p>
    </div>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      {description.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
