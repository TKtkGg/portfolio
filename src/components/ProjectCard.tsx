"use client";

import { FC, memo } from "react";
import Image from "next/image";
import type { Project } from "@/features/projects/Projects";

type ProjectCardProps = {
    project: Project;
    onClick: () => void;
};

const ProjectCard: FC<ProjectCardProps> = memo(({ project, onClick }) => {
    const { title, imageSrc, imageAlt } = project;

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`${title}の詳細を開く`}
            className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left"
        >
            <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />
            <h3 className="absolute bottom-4 left-4 z-10 text-xl font-bold text-white drop-shadow-md transition-opacity duration-300 group-hover:opacity-0 md:text-2xl">
                {title}
            </h3>
        </button>
    );
});

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
