import ProjectCard from "@/components/ProjectCard";
import { FC, memo } from "react";
import Image from "next/image";

const projects = [
    {
        id: "1",
        title: "project1",
        description: "description1description1description1description1description1description1description1",
        href: "https://www.google.com",
        icon: <Image src="/images/project1.png" alt="project1" width={100} height={100} />,
    },
    {
        id: "2",
        title: "project2",
        description: "description2",
        href: "https://www.google.com",
        icon: <Image src="/images/project2.png" alt="project2" width={100} height={100} />,
    },
    {
        id: "3",
        title: "project3",
        description: "description3",
        href: "https://www.google.com",
        icon: <Image src="/images/project3.png" alt="project3" width={100} height={100} />,
    },
    {
        id: "4",
        title: "project4",
        description: "description4",
        href: "https://www.google.com",
        icon: <Image src="/images/project4.png" alt="project4" width={100} height={100} />,
    },
    {
        id: "5",
        title: "project5",
        description: "description5",
        href: "https://www.google.com",
        icon: <Image src="/images/project5.png" alt="project5" width={100} height={100} />,
    },
    {
        id: "6",
        title: "project6",
        description: "description6",
        href: "https://www.google.com",
        icon: <Image src="/images/project6.png" alt="project6" width={100} height={100} />,
    },
];

const Projects: FC = memo(() => {
    return (
        <section id="projects" className="px-6 py-20">
            <h2 className="mb-12 text-center text-4xl font-bold text-black">
                Projects
            </h2>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="min-w-[280px] flex-1 basis-[calc(33.333%-1rem)]">
                        <ProjectCard title={project.title} description={project.description} href={project.href} icon={project.icon}/>
                    </div>
                ))}
            </div>
        </section>
    );
});

Projects.displayName = "Projects";
export default Projects;