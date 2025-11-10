// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import "../index.css";

const NavBar = ({ links }) => {
  const [activeSection, setActiveSection] = useState("landing");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["landing", ...links.map((l) => l.id)];
      let current = "landing";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-700/50 px-4 py-2">
      <ul className="flex space-x-4">
        {links.map(({ id, label, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-label={`Go to ${label}`}
              className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 group ${
                activeSection === id
                  ? "bg-cyan-500 text-gray-900 shadow-lg shadow-cyan-500/40"
                  : "text-gray-400 hover:text-cyan-400 hover:bg-gray-700"
              }`}
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
