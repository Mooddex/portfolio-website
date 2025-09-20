import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/2025-07-16-000244-create-next-app-screenclip.png";
import rmtdevImg from "@/public/screencapture-brempatch-dashboard-vercel-app-2025-08-19-18_06_52.png";
import wordanalyticsImg from "@/public/2025-07-08-181343-my-office-screenclip.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
   {
    name: "Library",
    hash: "#library",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "At 100devs I worked as a front-end developer , while upskilling my Back-end stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present ",
    
  },
] as const;

export const projectsData = [
  {
    title: "Matbakhy",
    description:
      "Users can Browse or Upload their Kitchens.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript"],
    imageUrl: corpcommentImg,
    link:"https://matbakhy-beta.vercel.app/",
  },
  {
    title: "Brempatch Dashboard",
    description:
      "I worked as a front-end developer on this  project. businessmen are able to track their Clients,Products,orders and messages .",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Shadcn UI"],
    imageUrl: rmtdevImg,
    link:"https://brempatch-dashboard.vercel.app/",
  },
  {
    title: "My Office",
    description:
      "A public web app for Lawyers to mange their cases",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node.js", "TypeScript", "Express"],
    imageUrl: wordanalyticsImg,
    link:"https://github.com/Mooddex/My-Office",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "React Native",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "OOP",
  "Postman",
  "REST APIs",
 ] as const;