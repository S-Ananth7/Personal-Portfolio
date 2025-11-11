import React from "react";
import {
  Code,
  Mail,
  Linkedin,
  Github,
  Phone,
  User,
  Briefcase,
  FolderOpen,
} from "lucide-react";
import "./index.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import SkillCard from "./components/SkillCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import {
  navLinks,
  skillData,
  experienceData,
  projectData,
} from "./data/portfolioData";

const App = () => (
  <div className="min-h-screen bg-gray-900 text-gray-100 font-sans scroll-smooth">
    {/* ✅ Custom animations */}
    <style>{`
      @keyframes fadeInDown { 0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)} }
      @keyframes loadContent { 0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)} }
      .animate-fadeInDown{animation:fadeInDown 1s ease-out;}
      .animate-loadContent{animation:loadContent .8s ease-out forwards;opacity:0;}
    `}</style>

    
    <div
      id="landing"
      className="h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 
                 text-center px-6 border-b border-cyan-900/50"
    >
      <h1 className="text-6xl sm:text-7xl font-extrabold text-cyan-400 animate-fadeInDown">
        Hi, I'm Ananth Surampudi
      </h1>

      <p className="text-lg text-cyan-300 mt-2 font-medium animate-fadeInDown">
        Full-Stack Developer • Cloud Engineer • AI Enthusiast
      </p>

      <p className="mt-6 text-xl text-gray-300 max-w-3xl animate-loadContent leading-relaxed">
       I design and develop <strong>end-to-end software systems</strong> — from responsive 
        frontends in <strong>React</strong> to robust backends in 
        <strong> Node.js</strong> and <strong>Spring Boot</strong>.  
        I’m passionate about creating <strong>cloud-ready</strong> and 
        <strong> AI-driven</strong> applications that scale efficiently on 
        platforms like <strong>AWS</strong> and <strong>GCP</strong>.  
        My work bridges modern web engineering and intelligent automation.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-loadContent">
        <a
          href="#projects"
          className="bg-cyan-600 text-gray-900 px-8 py-3 rounded-lg shadow-xl font-semibold hover:bg-cyan-500 transition"
        >
          View Projects <Code className="inline w-5 h-5 ml-2" />
        </a>
        <a
          href="#contact"
          className="bg-gray-700 text-cyan-400 px-8 py-3 rounded-lg shadow-xl font-semibold hover:text-white hover:bg-gray-600 transition"
        >
          Let’s Connect <Mail className="inline w-5 h-5 ml-2" />
        </a>
      </div>

      
    </div>

    
    <NavBar links={navLinks} />


    <Section id="about" title={<><User className="inline w-5 h-5 mr-2" />About Me</>}>
      <div className="max-w-4xl mx-auto text-center bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <p className="text-lg text-gray-300 leading-relaxed animate-loadContent">
          I’m a <strong>Full-Stack Developer</strong> with a Master’s in Computer Science from 
          <strong> Auburn University at Montgomery</strong>. My experience spans building 
          <strong> RESTful APIs</strong>, designing <strong>scalable cloud microservices</strong>, 
          and implementing <strong>AI-driven solutions</strong> to automate real-world workflows. 
          I focus on performance, reliability, and seamless integration from frontend to backend deployment.
        </p>
      </div>
    </Section>

    
    <Section id="skills" title={<><Code className="inline w-5 h-5 mr-2" />Technical Stack</>}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillData.map((item, i) => (
          <SkillCard key={i} {...item} />
        ))}
      </div>
    </Section>

    
    <Section id="experience" title={<><Briefcase className="inline w-5 h-5 mr-2" />Experience</>}>
      <div className="space-y-8 max-w-5xl mx-auto">
        {experienceData.map((item, i) => (
          <ExperienceCard key={i} {...item} />
        ))}
      </div>
    </Section>

   
    <Section id="projects" title={<><FolderOpen className="inline w-5 h-5 mr-2" />Projects</>}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((item, i) => (
          <ProjectCard key={i} {...item} />
        ))}
      </div>
    </Section>

   
    <Section id="contact" title={<><Mail className="inline w-5 h-5 mr-2" />Get In Touch</>}>
      <div className="text-center space-y-6 animate-loadContent">
        <p className="text-xl text-gray-300">
          Let’s collaborate or build something impactful together!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:ananth.surampudi123@gmail.com"
            className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-cyan-500/50"
          >
            <Mail className="w-6 h-6 text-cyan-500" />{" "}
            <span className="text-cyan-400">ananth.surampudi123@gmail.com</span>
          </a>
          <p className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-cyan-500/50">
            <Phone className="w-6 h-6 text-cyan-500" /> +1 (346) 634-6158
          </p>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://www.linkedin.com/in/ananth-surampudi"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400"
          >
            <Linkedin className="w-7 h-7" /> LinkedIn
          </a>
          <a
            href="https://github.com/S-Ananth7"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400"
          >
            <Github className="w-7 h-7" /> GitHub
          </a>
        </div>
      </div>
    </Section>

    <footer className="bg-gray-950 text-gray-500 py-6 border-t border-cyan-900/50 text-center text-sm">
      © 2025 Ananth Surampudi. Built with React + Tailwind CSS.
    </footer>
  </div>
);

export default App;
