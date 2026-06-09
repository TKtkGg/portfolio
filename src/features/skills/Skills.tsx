"use client";

import Image from "next/image";
import { FC, memo } from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5;

const LEVEL_LABELS: Record<SkillLevel, string> = {
  0: "0 : Learning",
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

const skills: SkillItem[] = [
  { id: "1", name: "Python", src: "/icons/python-original.svg", langName: "Python", level: 3, experience: "1\u00A0year" },
  { id: "2", name: "Django", src: "/icons/django-plain.svg", langName: "Django", level: 3, experience: "8\u00A0month" },
  { id: "3", name: "Java", src: "/icons/java-original.svg", langName: "Java", level: 2, experience: "3\u00A0month" },
  { id: "4", name: "Spring", src: "/icons/spring-original.svg", langName: "Spring", level: 2, experience: "3\u00A0month" },
  { id: "5", name: "React", src: "/icons/react-original.svg", langName: "React", level: 2, experience: "3\u00A0month" },
  { id: "6", name: "Next.js", src: "/icons/nextjs-original.svg", langName: "Next.js", level: 2, experience: "3\u00A0month" },
  { id: "7", name: "TypeScript", src: "/icons/typescript-original.svg", langName: "TypeScript", level: 2, experience: "3\u00A0month" },
  { id: "8", name: "JavaScript", src: "/icons/javascript-original.svg", langName: "JavaScript", level: 2, experience: "3\u00A0month" },
  { id: "9", name: "HTML", src: "/icons/html5-original.svg", langName: "HTML", level: 3, experience: "1\u00A0year" },
  { id: "10", name: "CSS", src: "/icons/css3-original.svg", langName: "CSS", level: 3, experience: "1\u00A0year" },
];

const learning: SkillItem[] = [
  { id: "1", name: "postgreSQL", src: "/icons/postgresql-original-wordmark.svg", langName: "postgreSQL", level: 0, experience: "1\u00A0month" },

];

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
        {([0, 1, 2, 3, 4, 5] as const).map((n, index) => (
          <span key={n}>
            {LEVEL_LABELS[n]}
            {index !== 5 && " / "}
            {n === 2 && <br className="block md:hidden" />}
          </span>
        ))}
      </p>
      <div className="mx-auto flex max-w-4xl flex-col gap-12 md:flex-row md:gap-30">
        {/* 左：習得済み */}
        <div className="flex-1">
          <h3 className="mb-6 text-center text-lg font-semibold text-black dark:text-zinc-50">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map(({ id, name, src, langName, level, experience }) => (
              <div key={id} className="group relative flex flex-col items-center" tabIndex={0}>
                <Image
                  key={id}
                  src={src}
                  alt={name}
                  width={50}
                  height={50}
                  className="h-15 w-15 object-contain"
                />
                {/* ツールチップ */}
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
            ))}
          </div>
        </div>
        {/* 右：学習中 */}
        <div className="flex-1 md:ml-20">
          <h3 className="mb-6 text-center text-lg font-semibold text-black dark:text-zinc-50">
            Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {learning.map(({ id, name, src, langName, level, experience }) => (
              <div key={id} className="group relative flex flex-col items-center" tabIndex={0}>
                <Image
                  key={id}
                  src={src}
                  alt={name}
                  width={32}
                  height={32}
                  className="h-15 w-15 object-contain"
                />
                {/* ツールチップ */}
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
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
});

Skills.displayName = "Skills";
export default Skills;
