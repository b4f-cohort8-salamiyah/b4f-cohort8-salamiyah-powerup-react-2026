export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  duration: string;
  level: CourseLevel;
  description: string;
  featured: boolean;
}
