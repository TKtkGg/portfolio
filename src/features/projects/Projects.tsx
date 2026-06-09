"use client";

import ProjectCard from "@/components/ProjectCard";
import { FC, memo } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export type Project = {
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        id: "1",
        title: "Rebirth/リバース(制作中)",
        description: "敵との戦闘を繰り返して強くなるRPGゲームです。ショップ・クエスト・バトルアニメーションなど、ゲームらしい要素を盛り込んでいます。",
        icon: <Image src="/img/rebirth.png" alt="rebirth" width={100} height={100} />,
        techStack: ["Next.js", "React", "TypeScript", "Python", "Django", "SQLite"],
        githubUrl: "https://github.com/TKtkGg/Rebirth-RPG-Game-",
    },
    {
        id: "2",
        title: "LimitExplore(制作中)",
        description: "限られたマスの中で探索を繰り返し、強くなるゲームです。宝箱を開けたり、カードを集めたりして強くなり、最終的なスコアで他プレイヤーと競います。",
        icon: <Image src="/img/explore.png" alt="LimitExplore" width={100} height={100} />,
        techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Java", "Spring-boot", "postgreSQL"],
        githubUrl: "https://github.com/TKtkGg/explore-mass-game",
    },
    {
        id: "3",
        title: "TODO-WORLD",
        description: "TODOリストを管理するサイトです。TODOを追加・編集・削除でき、世界中のユーザーで自分のTODOを共有することができます。",
        icon: <Image src="/img/todo.png" alt="todo-world" width={100} height={100} />,
        techStack: ["React", "Chakra UI", "TypeScript", "Python", "Django", "SQLite"],
        demoUrl: "https://todo-world-pqo8.vercel.app/",
        githubUrl: "https://github.com/TKtkGg/todo-world",
    },
];

const Projects: FC = memo(() => {
    return (
        <motion.section 
            id="projects" 
            className="px-6 py-20 bg-white text-gray-900 dark:bg-zinc-900 dark:text-zinc-50"
            initial="hidden"
            variants={fadeInUp as Variants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="mb-12 text-center text-4xl font-bold text-black dark:text-zinc-50">
                Projects
            </h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="h-full">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </motion.section>
    );
});

Projects.displayName = "Projects";
export default Projects;