export type Education = {
  school: string;
  program: string;
  date: string;
  details?: string;
};

export const educationList: Education[] = [
  {
    school: "Langara College",
    program: "Post Degree Diploma — Web & Mobile App Development",
    date: "2024 – 2026",
    details: "Greater Vancouver, BC",
  },
  {
    school: "GGSIPU (Ambedkar Institute of Technology, Delhi, India)",
    program: "Bachelor of Computer Applications (Computer Science)",
    date: "2020 – 2023",
    details: "Graduated in 2023",
  },
];
