import { FC, memo } from "react";
import type { Project } from "@/features/projects/Projects";

type ProjectCardProps = {
    project: Project;
};

type WrapperProps = {
    href?: string;
    children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ href, children }) => 
    href ? (
        <div 
            onClick={() => href && window.open(href, "_blank")}
            className="block cursor-pointer"
        >
            {children}
        </div>
    ) : (
        <div>{children}</div>
    );

const ProjectCard: FC<ProjectCardProps> = memo(({ project }) => {
    const { title, description, icon, techStack, demoUrl, githubUrl } = project;

    return(
        <div className="min-h-[200px] rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <Wrapper href={demoUrl}>
                {icon && (
                    <div className="mb-4 flex justify-center">
                        {icon}
                    </div>
                )}
                <h3 className="text-xl font-semibold text-black text-center dark:text-zinc-50">{title}</h3>
                <p className="mt-2 break-words text-gray-600 text-center dark:text-zinc-400">{description}</p>

                {/* 使用技術 */}
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-zinc-400">
                    {techStack.map((tech) => (
                        <li key={tech} className="rounded-full border border-gray-200 px-2 py-1 dark:border-zinc-800">
                            {tech}
                        </li>
                    ))}
                </ul>

                {/* リンク */}
                <div className="mt-4 flex gap-4 text-sm">
                    {demoUrl && (
                        <a 
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a 
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:underline dark:text-zinc-300 dark:hover:text-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </Wrapper>
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;