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
  figma?: string;
};

export const projects: Project[] = [
  {
    title: "TrailQuest",
    tagline: "Smarter hiking, safer trails",
    description:
      "A PWA support hiking platform with role-based authentication for hikers and organizers. Supports trail discovery, registrations, profile management, and media uploads using Firebase and Supabase.",
    tech: ["React", "Firebase Auth", "Firestore", "Supabase", "Tailwind"],
    image: "/projects/TrailQuest.png",
    live: "https://github.com/Gauravkr1286/Trial-Quest",
    github: "https://github.com/Gauravkr1286/Trial-Quest",
    youtube: "https://youtu.be/GITlmnIVjoE?t=1010",
    figma: "https://www.figma.com/design/VAx19aZJqCXyahtQVpog7B/Trail-Quest?node-id=1577-1520&t=FhR7ZwvFuId9ZGpH-0",

  
  },
  {
    title: "PetCare+",
    tagline: "Pet care, simplified",
    description:
      "Automates vet appointments and pet management with secure authentication, API integrations, and AI-assisted diet suggestions. Built with a scalable backend and responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    image: "/projects/PetCare.png",
    live: "https://petcare-blond.vercel.app/#explore",
    github: "https://github.com/PetCarePlus",
    youtube: "https://youtu.be/IER8bI--Abc?t=1937",
    figma: "https://www.figma.com/design/P3jicjWK0MPCeapPqqGcIF/Project-2?node-id=1-4&p=f&t=VyHnJOxaa85BC886-0",
    
  },

]
