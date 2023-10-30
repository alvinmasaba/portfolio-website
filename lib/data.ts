import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import pagerdutyImg from "@/public/pagerduty.png";
import facebookImg from "@/public/facebook.png"
import planeImg from "@/public/plane.jpeg"

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
    title: "Centennial College",
    location: "Toronto, ON",
    description:
      "Pursuing Advanced Diploma in Software Engineering & Technology",
    icon: React.createElement(LuGraduationCap),
    date: "Present",
  },
  {
    title: "Odin Project",
    location: "2021-2022",
    description:
      "Completed a comprehensive online fullstack web development program called The Odin Project",
    icon: React.createElement(LuGraduationCap),
    date: "Present",
  },
  {
    title: "University of Toronto",
    location: "Toronto, ON",
    description:
      "Graduated with Honors Bachelor of Science Degree",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },

] as const;

export const projectsData = [
  {
    title: "PagerDuty Clone",
    description:
      "Full-stack incident tracking dashboard. Allows incident/team CRUD operations, email/phone alerts, and messaging.",
    tags: ["Ruby", "Rails", "React Vite", "PostgreSQL", "Tailwind CSS", "Twilio"],
    imageUrl: pagerdutyImg,
  },
  {
    title: "Facebook Clone",
    description:
      "Full-stack social media web application. Allows user sign up, user profiles, friend requests, posts, comments and likes.",
    tags: ["Ruby", "Rails", "PostgreSQL", "Bootstrap", "Hotwire-Turbo"],
    imageUrl: facebookImg,
  },
  {
    title: "Client Website",
    description:
      "Full-stack landing page with gallery and contact page for client.",
    tags: ["Ruby", "Rails", "Tailwind CSS", "Hotwire-Turbo"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Flight-Booker",
    description:
      "Full-stack flight booking application. Users can search flights from a seed database, create and confirm bookings.",
    tags: ["Ruby", "Rails", "SQLite", "JavaScript", "CSS"],
    imageUrl: planeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Ruby",
  "Rails",
  // "TypeScript",
  "React",
  // "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  "PostgreSQL",
  "Python",
  // "Django",
  // "Framer Motion",
] as const;