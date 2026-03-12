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
        title: "project1",
        description: "description1description1description1description1description1description1description1",
        icon: <Image src="/images/project1.png" alt="project1" width={100} height={100} />,
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        demoUrl: "https://www.google.com",
        githubUrl: "https://www.google.com",
    },
    {
        id: "2",
        title: "project2",
        description: "description2",
        icon: <Image src="/images/project2.png" alt="project2" width={100} height={100} />,
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        demoUrl: "https://www.google.com",
        githubUrl: "https://www.google.com",
    },
    {
        id: "3",
        title: "project3",
        description: "description3",
        icon: <Image src="/images/project3.png" alt="project3" width={100} height={100} />,
        techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        demoUrl: "https://www.google.com",
        githubUrl: "https://www.google.com",
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
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="min-w-[280px] flex-1 basis-[calc(33.333%-1rem)]">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </motion.section>
    );
});

Projects.displayName = "Projects";
export default Projects;