"use client";

import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { FC, memo, useCallback, useState } from "react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export type Project = {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        id: "1",
        title: "LimitExplore",
        description: "限られたマスの中で探索を繰り返し、強くなるゲームです。宝箱を開けたり、カードを集めたりして強くなり、最終的なスコアで他プレイヤーと競います。",
        imageSrc: "/img/explore.png",
        imageAlt: "LimitExplore",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Java", "Spring-boot", "postgreSQL"],
        githubUrl: "https://github.com/TKtkGg/explore-mass-game",
    },
    {
        id: "2",
        title: "TODO-WORLD",
        description: "TODOリストを管理するサイトです。TODOを追加・編集・削除でき、世界中のユーザーで自分のTODOを共有することができます。",
        imageSrc: "/img/todo.png",
        imageAlt: "todo-world",
        techStack: ["React", "Chakra UI", "TypeScript", "Python", "Django", "SQLite"],
        demoUrl: "https://todo-world-pqo8.vercel.app/",
        githubUrl: "https://github.com/TKtkGg/todo-world",
    },
];

const Projects: FC = memo(() => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const closeModal = useCallback(() => setSelectedProject(null), []);

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
            <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-stretch gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </motion.section>
    );
});

Projects.displayName = "Projects";
export default Projects;
