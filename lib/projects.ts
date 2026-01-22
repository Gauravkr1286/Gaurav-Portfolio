export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string; // path from /public
  live?: string;
  github?: string;
  youtube?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "TrailQuest",
    tagline: "Smarter hiking, safer trails",
    description:
      "A full-stack hiking platform with role-based authentication for hikers and organizers. Supports trail discovery, registrations, profile management, and media uploads using Firebase and Supabase.",
    tech: ["React", "Firebase Auth", "Firestore", "Supabase", "Tailwind"],
    image: "/projects/TrailQuest.png",
    live: "#",
    github: "https://github.com/Gauravkr1286/Trial-Quest",
    youtube: "https://youtu.be/GITlmnIVjoE?t=1010",
  
  },
  {
    title: "PetCare+",
    tagline: "Pet care, simplified",
    description:
      "Automates vet appointments and pet management with secure authentication, API integrations, and AI-assisted diet suggestions. Built with a scalable backend and responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    image: "/projects/PetCare.png",
    live: "#",
    github: "#",
    youtube: "#",
    
  },

];
