"use client";

import { FC, memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/features/projects/Projects";

type ProjectModalProps = {
    project: Project | null;
    onClose: () => void;
};

const ProjectModal: FC<ProjectModalProps> = memo(({ project, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!project) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [project, onClose]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {project && (
                <motion.div
                    key={project.id}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <button
                        type="button"
                        aria-label="モーダルを閉じる"
                        className="absolute inset-0 bg-black/60"
                        onClick={onClose}
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white shadow-2xl dark:bg-zinc-900"
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="閉じる"
                            className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-lg text-white transition hover:bg-black/70"
                        >
                            ×
                        </button>
                        <div className="relative aspect-[16/9] w-full">
                            <Image
                                src={project.imageSrc}
                                alt={project.imageAlt ?? project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 768px"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 md:p-8">
                            <h3
                                id="project-modal-title"
                                className="text-2xl font-bold text-black dark:text-zinc-50"
                            >
                                {project.title}
                            </h3>
                            <p className="mt-4 whitespace-pre-wrap break-words text-gray-600 dark:text-zinc-400">
                                {project.description}
                            </p>
                            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-zinc-400">
                                {project.techStack.map((tech) => (
                                    <li
                                        key={tech}
                                        className="rounded-full border border-gray-200 px-3 py-1 dark:border-zinc-700"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 flex flex-wrap gap-4 text-sm">
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline dark:text-blue-400"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:underline dark:text-zinc-300"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
});

ProjectModal.displayName = "ProjectModal";
export default ProjectModal;
