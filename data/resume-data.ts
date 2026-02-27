// data/resume-data.ts
// Updated to match your latest resume content :contentReference[oaicite:0]{index=0}

export const basicInfo = {
  name: "Dhivakar Ramesh",
  title: "Software Engineer | Full-Stack & Backend Developer",
  location: "Binghamton, NY",
  email: "letdhivaknow@gmail.com",
  phone: "+1 (607)-821-6280",
  linkedin: "https://www.linkedin.com/in/dhivakar-ramesh-611955376/",
  // Add your actual portfolio URL here (keep it as a link, not just label)
  portfolio: "YOUR_PORTFOLIO_URL",
};

export const summary =
  "Computer Science graduate with 3+ years of experience in full-stack enterprise software engineering, specializing in API-driven applications and high-availability financial platforms. Contributed to frontend and backend development of mission-critical payment systems, integrating RESTful services and enterprise middleware (iTurmeric) within scalable microservice architectures. Experienced in SQL optimization, performance tuning, regression testing, and production issue resolution across multi-tier systems. Proficient in Java, Python, SQL, AWS, and cloud-supported deployments. Seeking Software Engineering or Backend Development roles.";

export const skills = {
  languages: ["Java", "Python", "SQL"],
  backendAndAPIs: [
    "REST APIs",
    "Microservices",
    "API Integration",
    "API Testing",
    "MVC Architecture",
    "Authentication Flow Validation",
  ],
  frontend: [
    "Responsive UI Development",
    "Component-Based Architecture",
    "API-Driven UI Integration",
    "Client-Side Validation",
    "Performance Optimization",
  ],
  integrationAndMiddleware: [
    "iTurmeric Platform",
    "API Management",
    "Service Composition",
    "REST/JSON Integration",
    "Microservice Communication",
  ],
  dataAndDatabase: [
    "Advanced SQL (Joins, CTEs, Window Functions)",
    "Query Optimization",
    "Data Mapping Validation",
    "ETL Design",
    "Pandas",
    "NumPy",
  ],
  cloudAndDevOps: [
    "AWS (EC2, S3, RDS)",
    "Cloud-Supported Deployments",
    "Deployment Support",
    "Release Validation",
    "CI/CD Concepts",
  ],
  testingAndReliability: [
    "Functional Testing",
    "Regression Testing",
    "Performance Testing",
    "Root Cause Analysis",
    "Production Debugging",
    "Distributed Service Trace Inspection",
  ],
  tools: ["Git", "Power BI", "Tableau", "MS Excel (VBA)", "Jupyter Notebook"],
  methodology: ["Agile/Scrum", "SDLC", "Defect Triage"],
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    company: "Upunikslef",
    location: "United States",
    period: "Aug 2025 – Oct 2025",
    bullets: [
      "Designed and developed responsive web interfaces using component-based architecture, improving cross-device consistency.",
      "Built interactive UI elements and dashboard components to visualize business metrics and performance data.",
      "Integrated RESTful APIs with frontend modules to enable real-time data rendering and seamless user interactions.",
      "Optimized frontend performance by improving rendering efficiency and reducing load time through structured data handling.",
      "Implemented form validations, client-side error handling, and secure input processing to improve UX and data accuracy.",
      "Collaborated with backend engineers and designers to translate business requirements into scalable UI solutions.",
      "Performed regression testing and UI validation to ensure consistent behavior across releases.",
    ],
  },
  {
    role: "Software Engineer (System Engineer Associate)",
    company: "Intellect Design Arena",
    location: "Chennai, India",
    period: "Aug 2021 – Jul 2024",
    bullets: [
      "Engineered and delivered full-stack enhancements for Shinsei Bank’s high-volume payment portal, improving UI responsiveness, workflow efficiency, and transaction reliability.",
      "Developed API-driven UI components and integrated secure RESTful services for payment validation, session management, and reconciliation workflows.",
      "Improved portal response time by optimizing API calls and frontend rendering logic, reducing page load latency by ~15%.",
      "Worked extensively with iTurmeric (API-first composable platform) to configure service compositions, API management flows, and secure integration modules.",
      "Validated REST/JSON integrations across frontend modules, middleware services, and distributed backend microservices within enterprise banking architecture.",
      "Led regression testing, test case design, and defect triaging across release cycles, achieving 97% validation accuracy.",
      "Executed API-level testing and validated request/response structures, authentication flows, and cross-service data mapping.",
      "Optimized SQL queries and multi-tier data flows, improving performance by ~20%.",
      "Debugged production incidents using log analysis, SQL diagnostics, and distributed service trace inspection, reducing recurring defects and improving stability.",
      "Coordinated release deployments for 8+ enterprise applications with zero escalation incidents.",
    ],
  },
];

export type ProjectItem = {
  name: string;
  context: string;
  period?: string;
  description: string;
  tech: string[];
  highlight?: string;
  link?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Credit Card Fraud Detection",
    context: "Trine University",
    period: "Feb 2026",
    description:
      "Built an end-to-end ML pipeline for fraud detection including ETL, feature engineering, model training, and evaluation; produced precision/recall/F1 analysis with visualizations.",
    tech: ["Python", "Pandas", "Scikit-Learn", "NumPy", "Matplotlib", "Seaborn"],
    highlight: "Focused on reducing false positives while maintaining high recall.",
  },
  {
    name: "Quality Control & Defect Prediction in Manufacturing",
    context: "Trine University",
    period: "Dec 2025",
    description:
      "Developed classification models for defect detection; performed EDA, statistical validation, and delivered BI dashboards for trend insights.",
    tech: ["Python", "EDA", "Power BI", "Pandas", "NumPy"],
  },
  {
    name: "Student Registration System",
    context: "Trine University",
    period: "Oct 2025",
    description:
      "Full-stack web application using MongoDB and REST APIs with MVC-based architecture; implemented CRUD, validation, and integration testing.",
    tech: ["MongoDB", "REST APIs", "MVC", "Web App"],
  },
  {
    name: "Quiz Application",
    context: "Trine University",
    period: "Aug 2025",
    description:
      "Interactive quiz platform with responsive UI, backend logic, and database-driven scoring and results tracking; validated end-to-end flows with functional/integration tests.",
    tech: ["Web App", "Backend Logic", "Database", "Testing"],
  },
  {
    name: "VR-Based Smart Helmet",
    context: "R.M.D Engineering College",
    period: "Jan 2021",
    description:
      "Developed a VR-enabled safety system integrating real-time sensor processing, GPS navigation, and automated alert mechanisms; implemented event-driven embedded control logic and validated workflows.",
    tech: ["Embedded Systems", "Real-Time Processing", "System Integration"],
  },
  {
    name: "Salary Intelligence Dashboard",
    context: "Trine University",
    period: "Jan 2025",
    description:
      "Analyzed 6,600+ salary records and built interactive dashboards with forecasting to support HR compensation planning.",
    tech: ["Tableau", "Excel", "Forecasting", "Analytics"],
  },
];

export const education = [
  {
    degree: "Master of Science, Information System",
    institution: "Trine University",
    location: "Angola, IN",
    period: "Jun 2026",
    details: [
      "Relevant Coursework: Advanced Database Management Systems, Programming for Data Science, Machine Learning, Data Modeling & Analytics",
    ],
  },
  {
    degree: "Bachelor of Engineering, Electronic and Instrumentation",
    institution: "R.M.D Engineering College",
    location: "Chennai, TN, India",
    period: "May 2021",
    details: [
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Python, Database Systems, Embedded Systems, Project Management",
    ],
  },
];