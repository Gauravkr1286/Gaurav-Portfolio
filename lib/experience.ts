// lib/experience.ts

export type Experience = {
  role: string;
  company: string;
  date: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
  role: "Full Stack Developer",
  company: "Langara College — Semina (Capstone Project)",
  date: "In progress",
  points: [
    "Building a cross-platform mobile application using React Native (Expo) with structured authentication and routing flow.",
    "Using a scalable Node.js + Express backend API with REST endpoints, health monitoring, and cloud-ready architecture.",
    "Enabling an IoT urban gardening by integrating environmental sensor workflows (soil moisture, temperature, light/UV) for real-time plant monitoring.",
    "Planned AI-assisted plant health guidance features, including camera-based analysis and smart recommendations based on sensor + climate data.",
  
  ],
},
  
    {
    role: "Lead Developer",
    company: "Langara College — TrailQuest",
    date: "2025",
    points: [
      "Led development of a full-stack hiking platform with Firebase Auth, Firestore, and Supabase storage integration.",
    "Coordinated a 7-member Agile team through sprint planning, task ownership, and feature delivery.",
    "Delivered responsive UI, profile management, and role-based routing for hikers and organizers.",
    ],
  },
  {
    role: "Open Source Web Developer",
    company: "GirlScript Summer of Code",
    date: "2023",
    points: [
      "Improved navigation performance and UI efficiency, increasing usability by ~15%.",
      "Reduced bounce rate by optimizing layout structure, accessibility, and responsiveness.",
      "Contributed in a mentorship-driven open-source development environment using Git and GitHub workflows.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "Ambedkar Institute of Technology",
    date: "2022 – 2023",
    points: [
      "Conducted research on assistive technology solutions supporting individuals with autism.",
      "Built early-stage prototypes using computer vision techniques and data-driven experimentation.",
      "Performed literature review and analysis to guide applied research outcomes.",
    ],
  },
];
