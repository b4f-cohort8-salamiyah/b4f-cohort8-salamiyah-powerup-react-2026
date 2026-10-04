import type { Course } from "../types";

// Local course data. There is no server and no fetch in this project —
// import this array wherever you need the courses.
export const courses: Course[] = [
  {
    id: 1,
    title: "React Fundamentals",
    category: "Frontend",
    instructor: "Sara",
    duration: "6 hours",
    level: "Beginner",
    description:
      "Components, props, state and events. Build small interactive screens and learn how React re-renders when data changes.",
    featured: true,
  },
  {
    id: 2,
    title: "TypeScript for React Developers",
    category: "Frontend",
    instructor: "Omar",
    duration: "5 hours",
    level: "Intermediate",
    description:
      "Type your props, state and event handlers. Learn interfaces, union types and how the compiler catches mistakes before the browser does.",
    featured: false,
  },
  {
    id: 3,
    title: "Modern CSS Layouts",
    category: "Frontend",
    instructor: "Lina",
    duration: "4 hours",
    level: "Beginner",
    description:
      "Flexbox and Grid from the ground up. Build responsive page layouts that work on phones and large screens.",
    featured: false,
  },
  {
    id: 4,
    title: "Node.js Essentials",
    category: "Backend",
    instructor: "Khaled",
    duration: "7 hours",
    level: "Beginner",
    description:
      "What Node.js is, how npm packages work, and how to run JavaScript outside the browser.",
    featured: true,
  },
  {
    id: 5,
    title: "Designing REST APIs",
    category: "Backend",
    instructor: "Rami",
    duration: "5 hours",
    level: "Intermediate",
    description:
      "Resources, URLs, HTTP methods and status codes. Plan an API that other developers find easy to use.",
    featured: false,
  },
  {
    id: 6,
    title: "SQL Basics",
    category: "Data",
    instructor: "Huda",
    duration: "6 hours",
    level: "Beginner",
    description:
      "Tables, rows and columns. Write SELECT queries, filter results and join two tables together.",
    featured: false,
  },
  {
    id: 7,
    title: "Data Visualization Basics",
    category: "Data",
    instructor: "Maya",
    duration: "3 hours",
    level: "Intermediate",
    description:
      "Choose the right chart for your data and learn how to make numbers easy to read at a glance.",
    featured: true,
  },
  {
    id: 8,
    title: "UI Design Principles",
    category: "Design",
    instructor: "Nour",
    duration: "4 hours",
    level: "Beginner",
    description:
      "Spacing, typography, color and contrast. Learn why some screens feel calm and others feel messy.",
    featured: false,
  },
  {
    id: 9,
    title: "Accessible Web Design",
    category: "Design",
    instructor: "Yara",
    duration: "5 hours",
    level: "Intermediate",
    description:
      "Build pages everyone can use: keyboard navigation, readable contrast, labels and meaningful headings.",
    featured: false,
  },
  {
    id: 10,
    title: "Git and GitHub Workflow",
    category: "Career Skills",
    instructor: "Fadi",
    duration: "3 hours",
    level: "Beginner",
    description:
      "Commits, branches, pull and push. Work safely on a shared repository without losing anyone's changes.",
    featured: true,
  },
  {
    id: 11,
    title: "Technical Interview Practice",
    category: "Career Skills",
    instructor: "Sami",
    duration: "4 hours",
    level: "Advanced",
    description:
      "Explain your thinking out loud, solve small coding problems and talk about the projects you built.",
    featured: false,
  },
];
