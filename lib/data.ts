import React from "react";
import { CgWorkAlt } from "react-icons/cg";
const matbakhyImg = "/2025-07-16-000244-create-next-app-screenclip.png";
const dashboardImage = "/screencapture-brempatch-dashboard-vercel-app-2025-08-19-18_06_52.png";
const ehgzlyImg = "https://res.cloudinary.com/deq0w5tnr/image/upload/v1756643729/screencapture-ehgzly-mocha-vercel-app-2025-08-31-15_32_54_p6f3az.png"
const myofficeImg = "/2025-07-08-181343-my-office-screenclip.png";

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
] as const;

export const experiencesData = [
 
  {
    title: "Front-End Developer",
    Company: "DRB" ,
    type: "Internship",
    location: "Remote",
    description:
      "Contributed to the development and implementation of user friendly tech solutions for several clients in the automotive industry using React, Next.js, and Tailwind CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present ",
    
  },
  {
    title: "Front-End Developer",
     Company: "100devs" ,
     type: "freelance",
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
    imageUrl: matbakhyImg,
    link:"https://matbakhy-beta.vercel.app/",
  },
  {
    title: "Brempatch Dashboard",
    description:
      "I worked as a front-end developer on this  project. businessmen are able to track their Clients,Products,orders and messages .",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Shadcn UI"],
    imageUrl: dashboardImage,
    link:"https://brempatch-dashboard.vercel.app/",
  },
  {
    title: "Ehgzly",
    description:
      "AI powered App A modern event booking platform where users can browse, discover, and book tickets for their favourite events.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","Sentry","OpenAI","Sonner",],
    imageUrl: ehgzlyImg,
    link:"https://ehgzly-mocha.vercel.app/",
  },
  {
    title: "My Office",
    description:
      "A public web app for Lawyers to mange their cases",
    tags: ["React", "Vite", "MongoDB", "Tailwind", "Node.js", "JavaScript", "Express"],
    imageUrl: myofficeImg,
    link:"https://myoffice316.netlify.app/",
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