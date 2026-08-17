"use client";

import Image from "next/image";
import { FC, memo } from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

type SkillLevel = 1 | 2 | 3 | 4 | 5;

const LEVEL_LABELS: Record<SkillLevel, string> = {
  1: "1 : Beginner",
  2: "2 : Basic",
  3: "3 : Intermediate",
  4: "4 : Advanced",
  5: "5 : Expert",
}

type SkillItem = {
  id: string;
  name: string;
  src: string;
  langName: string;
  level: SkillLevel;
  experience: string;
};

type SkillCategory = {
  id: string;
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { id: "react", name: "React", src: "/icons/react-original.svg", langName: "React", level: 2, experience: "3\u00A0months" },
      { id: "nextjs", name: "Next.js", src: "/icons/nextjs-original.svg", langName: "Next.js", level: 3, experience: "6\u00A0months" },
      { id: "typescript", name: "TypeScript", src: "/icons/typescript-original.svg", langName: "TypeScript", level: 3, experience: "6\u00A0months" },
      { id: "javascript", name: "JavaScript", src: "/icons/javascript-original.svg", langName: "JavaScript", level: 3, experience: "3\u00A0months" },
      { id: "html", name: "HTML", src: "/icons/html5-original.svg", langName: "HTML", level: 2, experience: "6\u00A0months" },
      { id: "css", name: "CSS", src: "/icons/css3-original.svg", langName: "CSS", level: 2, experience: "6\u00A0months" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { id: "python", name: "Python", src: "/icons/python-original.svg", langName: "Python", level: 3, experience: "1\u00A0year" },
      { id: "django", name: "Django", src: "/icons/django-plain.svg", langName: "Django", level: 2, experience: "6\u00A0months" },
      { id: "java", name: "Java", src: "/icons/java-original.svg", langName: "Java", level: 3, experience: "6\u00A0months" },
      { id: "spring", name: "Spring", src: "/icons/spring-original.svg", langName: "Spring", level: 3, experience: "5\u00A0months" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { id: "postgresql", name: "postgreSQL", src: "/icons/postgresql-original-wordmark.svg", langName: "postgreSQL", level: 2, experience: "3\u00A0months" },
    ],
  },
];

const SkillIcon: FC<SkillItem> = ({ name, src, langName, level, experience }) => (
  <div className="group relative flex flex-col items-center" tabIndex={0}>
    <Image
      src={src}
      alt={name}
      width={50}
      height={50}
      className="h-15 w-15 object-contain"
    />
    <div
      className="
        pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2
        rounded bg-gray-900 dark:bg-zinc-800 px-2 py-1 text-xs text-white
        opacity-0 transition
        md:group-hover:opacity-100 max-md:group-focus:opacity-100 max-md:group-active:opacity-100
      "
      role="tooltip"
    >
      {langName}
      <br />
      Level:{level}
      <br />
      EXP:{experience}
    </div>
  </div>
);

const Skills: FC = memo(() => {
  return (
    <motion.section
      id="skills"
      className="px-6 py-20 bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-50"
      initial="hidden"
      variants={fadeInUp as Variants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="mb-3 text-center text-4xl font-bold text-black dark:text-zinc-50">
        Skills
      </h2>
      <p className="mb-10 text-center text-lg text-gray-600 dark:text-zinc-400">
        {([1, 2, 3, 4, 5] as const).map((n, index) => (
          <span key={n}>
            {LEVEL_LABELS[n]}
            {index !== 5 && " / "}
            {n === 2 && <br className="block md:hidden" />}
          </span>
        ))}
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-zinc-700">
        {skillCategories.map(({ id, title, skills }) => (
          <div key={id} className="flex flex-col items-center px-6 py-8">
            <h3 className="mb-6 text-center text-lg font-semibold text-black dark:text-zinc-50">
              {title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill) => (
                <SkillIcon key={skill.id} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
});

Skills.displayName = "Skills";
export default Skills;
