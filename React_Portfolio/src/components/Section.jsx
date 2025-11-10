// src/components/Section.jsx
import React from "react";

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 md:py-28 px-4 relative">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 animate-fadeInDown">
        <span className="inline-block px-4 py-2 bg-gray-800 rounded-lg border border-cyan-500/50">
          {title}
        </span>
      </h2>
      {children}
    </div>
    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-900/50"></div>
  </section>
);

export default Section;
