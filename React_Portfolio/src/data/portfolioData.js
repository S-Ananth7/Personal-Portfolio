// src/data/portfolioData.js
import { User, Code, Briefcase, FolderOpen, Mail, Award, GraduationCap } from "lucide-react";

export const navLinks = [
  { id: "about", label: "About", Icon: User },
  { id: "skills", label: "Skills", Icon: Code },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderOpen },
  { id: "contact", label: "Contact", Icon: Mail },
];

// 💻 Technical Skills
export const skillData = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "C++"],
  },
  {
    category: "Front-End Development",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "Styled Components",
      "TanStack Query",
      "Axios",
      "Responsive Design",
    ],
  },
  {
    category: "Back-End & APIs",
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "FastAPI",
      "RESTful APIs",
      "GraphQL",
      "WebSockets",
      "JWT",
      "OAuth2.0",
      "Message Queues (RabbitMQ, Kafka)",
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Firebase",
      "Elasticsearch",
      "SQL / NoSQL",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda, Elastic Beanstalk)",
      "Docker",
      "Kubernetes (EKS)",
      "Terraform",
      "Serverless Framework",
      "Vercel",
      "NGINX",
    ],
  },
  {
    category: "CI/CD & Observability",
    skills: [
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Ansible",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "AI/ML & Data Science",
    skills: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Model Evaluation",
      "Data Visualization",
    ],
  },
  {
    category: "Tools & Methodologies",
    skills: [
      "Linux",
      "GitHub",
      "Jira",
      "VS Code",
      "IntelliJ IDEA",
      "Agile / Scrum",
      "TDD",
      "Code Reviews",
      "Pair Programming",
    ],
  },
];

// 🧠 Professional Experience
export const experienceData = [
  {
    title: "Full Stack Java Developer",
    company: "TechNGL Pvt Ltd (Remote)",
    duration: "Mar 2022 – Jun 2023",
    description: [
      "Contributed to a modular front-end platform using React.js, Redux Toolkit, and TanStack Query, building reusable components and responsive UI for multiple product features.",
      "Developed Spring Boot microservices exposing secure REST and GraphQL APIs; optimized queries, connection pooling, and pagination to reduce latency and improve backend throughput.",
      "Implemented backend integrations, API contracts, and security layers using Spring Security, OAuth2.0, and JWT — enhancing reliability and fault isolation across microservices.",
      "Integrated Prometheus and Grafana for backend monitoring, enabling real-time alerts and reducing MTTR while supporting CI/CD pipelines for scalable deployments.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "TechNGL Pvt Ltd (Remote)",
    duration: "Sept 2021 – Feb 2022",
    description: [
      "Developed REST endpoints and backend modules in Spring Boot, contributing to modular service design and debugging under senior mentorship.",
      "Implemented React.js front-end components using Tailwind CSS and shadcn/ui, translating Figma designs into reusable UI elements.",
      "Wrote and maintained unit tests with JUnit and Mockito, improving test reliability and code coverage.",
      "Participated in Agile sprints, daily standups, and API testing using Postman to understand full SDLC and improve collaboration.",
    ],
  },
];

// 🚀 Major Projects
export const projectData = [
  {
    title: "Logistics C2C Parcel Delivery Platform",
    description:
      "Designed and deployed Java 21 (LTS) microservices with Spring Boot 3 and Spring Cloud Gateway for automated service discovery, 99.5% uptime, and throughput of 1,200+ shipments daily.",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "Spring Cloud Gateway",
      "Apache Kafka",
      "WebSockets",
      "MongoDB",
      "Redis",
      "Stripe API",
      "Docker",
      "Kubernetes (EKS)",
      "MLOps",
    ],
  },
  {
    title: "Retail Xpress – Multi-Vendor E-commerce Marketplace",
    description:
      "Built a full-featured, cross-platform marketplace using React Native, Redux/Zustand, and Firebase for authentication and backend APIs using Node.js/Express. Implemented role-based access, order management, and push notifications.",
    technologies: [
      "React Native",
      "Redux",
      "Zustand",
      "Firebase",
      "Node.js",
      "Express.js",
      "Jest",
    ],
  },
  
  {
    title: "Instance Segmentation using Mask R-CNN",
    description:
      "Built a deep learning model for object detection and segmentation using Mask R-CNN, optimized and deployed on AWS SageMaker for scalable inference.",
    technologies: ["Python", "TensorFlow", "Keras", "Mask R-CNN", "AWS SageMaker"],
  },
];

// 🎓 Education
export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Auburn University at Montgomery, Alabama, USA",
    duration: "Aug 2023 – May 2025",
    details: ["Courses: Machine Learning, Data Structures and Algorithms, Advanced Database Systems."],
    icon: GraduationCap,
  },
];

// 🏅 Certifications
export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2022",
    icon: Award,
  },
  {
    name: "Python Basics",
    issuer: "Coursera",
    year: "2021",
    icon: Award,
  },
  {
    name: "Soft Skills Certification",
    issuer: "NPTEL – IIT Madras",
    year: "2020",
    icon: Award,
  },
];
