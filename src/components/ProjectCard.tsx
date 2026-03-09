import { FC, memo } from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
};

const ProjectCard: FC<ProjectCardProps> = memo((props) => {
    const { title, description, href, icon } = props;

    return(
        <div className="min-h-[200px] rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-transform duration-200 hover:-translate-y-2 shadow-lg">
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                {icon && (
                    <div className="mb-4 flex justify-center">
                        {icon}
                    </div>
                )}
                <h3 className="text-xl font-semibold text-black text-center">{title}</h3>
                <p className="mt-2 break-words text-gray-600 text-center">{description}</p>
            </a>
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;