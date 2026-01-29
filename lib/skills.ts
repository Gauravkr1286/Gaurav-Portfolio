export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "UI/UX",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "Firebase Auth",
      "Firestore",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git/GitHub",
      "Vercel",
      "VS Code",
      "Agile/Scrum",
      "OOP",
      "DSA",
      "Trello",
      "JIRA",
    ],
  },
  {
    title: "Others",
    items: [
      "Adobe Photoshop",
      "Lightroom",
      "Premiere Pro",
      "Photography",
      "Video Editing",
    ],
  },
];
