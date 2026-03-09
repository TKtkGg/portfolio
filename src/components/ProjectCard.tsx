import { FC, memo } from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    href: string;
};

const ProjectCard: FC<ProjectCardProps> = memo((props) => {
    const { title, description, href } = props;

    return(
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                <h3 className="text-xl font-semibold text-black">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </a>
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;