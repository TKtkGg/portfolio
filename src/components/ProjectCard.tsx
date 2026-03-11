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
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            {children}
        </a>
    ) : (
        <div>{children}</div>
    );

const ProjectCard: FC<ProjectCardProps> = memo(({ project }) => {
    const { title, description, icon, techStack, demoUrl, githubUrl } = project;

    return(
        <div className="min-h-[200px] rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl">
            <Wrapper href={demoUrl}>
                {icon && (
                    <div className="mb-4 flex justify-center">
                        {icon}
                    </div>
                )}
                <h3 className="text-xl font-semibold text-black text-center">{title}</h3>
                <p className="mt-2 break-words text-gray-600 text-center">{description}</p>

                {/* 使用技術 */}
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
                    {techStack.map((tech) => (
                        <li key={tech} className="rounded-full border border-gray-200 px-2 py-1">
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
                            className="text-blue-600 hover:underline"
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
                            className="text-gray-700 hover:underline"
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