// data/resume-data.ts

export const basicInfo = {
  name: "Dhivakar Ramesh",
  title: "Software Engineer | Full-Stack & Backend Developer",
  location: "Binghamton, NY",
  email: "dramesh25@my.trine.edu",
  phone: "+1 (607) 821 6280",
  linkedin: "https://www.linkedin.com/in/dhivakar-ramesh-0a09262a3",
};

export const summary =
  "Detail-oriented Software Engineer with 2+ years of experience in full-stack development, backend engineering, and data-driven application design. Skilled in Python, SQL, Java, and machine learning, with a track record of building robust applications in Agile environments.";

export const skills = {
  languages: ["Python", "SQL", "Java"],
  dataAndML: [
    "Supervised & Unsupervised ML",
    "Exploratory Data Analysis (EDA)",
    "Data Visualization",
    "Hypothesis Testing",
    "PyTorch",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
  ],
  tools: [
    "Tableau",
    "Power BI",
    "MS Excel (VBA)",
    "Jupyter Notebook",
    "Google Colab",
    "Git",
    "Power Automate",
  ],
  concepts: [
    "Backend Development",
    "Web Development",
    "Database Design",
    "REST APIs",
    "CI/CD Concepts",
    "Agile Development",
    "DBMS",
    "IoT",
  ],
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
    role: "ITS Student Assistant – Library Technology Services",
    company: "Binghamton University",
    location: "Binghamton, NY",
    period: "Jan 2024 – May 2025",
    bullets: [
      "Provided technical support for library systems, workstation troubleshooting, and software configuration for students and faculty.",
      "Assisted in maintaining IT equipment, performing diagnostics, and resolving connectivity and hardware issues.",
      "Supported university-wide digital resource systems and ensured reliable operation of learning technologies.",
      "Collaborated with IT staff to streamline ticket resolution workflows and improve service request turnaround time.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Upunikslef",
    location: "Remote, United States",
    period: "Feb 2024 – May 2024",
    bullets: [
      "Developed and maintained frontend components for internal applications and public-facing website using modern UI frameworks.",
      "Implemented responsive layouts, optimized UI performance, and enhanced user interactions across multiple devices.",
      "Created reports and interactive dashboards using Power BI and Excel to enable data-driven decision making.",
      "Collaborated with backend engineers to integrate RESTful APIs and improve UI accessibility and load times.",
    ],
  },
  {
    role: "Software Engineer (System Engineer Associate)",
    company: "Intellect Design Arena",
    location: "Chennai, India",
    period: "Aug 2021 – Jul 2023",
    bullets: [
      "Engineered enhancements for mission-critical financial platforms used by SHINSEI Bank, improving reliability and workflow efficiency.",
      "Performed full-cycle QA, including test design, automation, regression, and documentation, achieving 97% test accuracy.",
      "Debugged complex production issues using log analysis, SQL queries, and API tracing, reducing resolution time.",
      "Validated REST APIs, optimized SQL queries, and led end-to-end testing for 8+ enterprise-scale applications.",
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
    context: "Binghamton University",
    period: "Feb 2023",
    description:
      "End-to-end fraud detection pipeline using supervised ML algorithms with ETL workflows, feature engineering, and evaluation.",
    tech: ["Python", "Pandas", "Scikit-Learn", "EDA"],
    highlight: "Focused on reducing false positives while preserving recall.",
  },
  {
    name: "Quality Control & Defect Prediction in Manufacturing",
    context: "Trine University",
    period: "Dec 2024",
    description:
      "Predictive ML application for defect identification using classification models, ETL pipelines, EDA, and dashboards.",
    tech: ["Python", "ML", "Tableau", "Data Pipelines"],
  },
  {
    name: "Student Registration System",
    context: "Binghamton University",
    period: "May 2024",
    description:
      "Full-stack registration system with MongoDB backend and responsive UI, improving student data management and workflows.",
    tech: ["Web App", "Database", "Responsive UI"],
  },
  {
    name: "Quiz Application",
    context: "Binghamton University",
    period: "May 2024",
    description:
      "Interactive quiz platform with UI design, backend logic, and database-driven scoring and results tracking.",
    tech: ["Web App", "Backend Logic", "Data Storage"],
  },
  {
    name: "US Flight Delay Analysis",
    context: "Trine University",
    period: "Apr 2024",
    description:
      "Data analysis of US flight delays using Excel and Tableau, identifying key delay factors and actionable insights.",
    tech: ["Excel", "Tableau", "Analytics"],
  },
  {
    name: "Salary Intelligence Dashboard",
    context: "Trine University",
    period: "Jan 2023",
    description:
      "Dashboard analyzing 6,600+ salary records with forecasting for 5-year trends to support HR planning.",
    tech: ["Tableau", "Excel", "Forecasting"],
  },
];

export const education = [
  {
    degree: "Master of Science, Information Systems",
    institution: "Trine University / Binghamton University",
    period: "Dec 2023",
    details: [
      "Coursework: Advanced Database Management Systems, Programming for Data Science, ML for Data Science.",
    ],
  },
  {
    degree: "Bachelor of Engineering, Electronics and Instrumentation Engineering",
    institution: "RMD Engineering College",
    period: "Jun 2021",
    details: [
      "Coursework: Python, C, Data Structures, Embedded Systems, Project Management & Finance.",
    ],
  },
];
