import spotlight from "@/app/assets/spotlight.png";
import vetemore from "@/app/assets/vetemore.png";

type NavLink = {
  id: number;
  title: string;
  link: string;
};

type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  type: string;
  image?: any;
};

export const navLinks: NavLink[] = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "Projects", link: "/projects" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Spotlight",
    date: "Jan 24, 2024",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta doloribus sit assumenda hic facere.",
    type: "Next.js",
    image: spotlight,
  },
  {
    id: 2,
    title: "Vetemòre",
    date: "Jan 18, 2024",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta doloribus sit assumenda hic facere.",
    type: "Next.js",
    image: vetemore,
  },
  {
    id: 3,
    title: "Website Project",
    date: "Feb 28, 2024",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta doloribus sit assumenda hic facere.",
    type: "Next.js",
  },
  {
    id: 4,
    title: "Website Project",
    date: "May 31, 2023",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta doloribus sit assumenda hic facere.",
    type: "React",
  },
];
