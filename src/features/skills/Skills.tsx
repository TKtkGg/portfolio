import Image from "next/image";
import { FC, memo } from "react";

type SkillItem = {
  id: string;
  name: string;
  src: string;
};

const skills: SkillItem[] = [
  { id: "1", name: "React", src: "/icons/react-original.svg" },
  { id: "2", name: "Next.js", src: "/icons/nextjs-original.svg" },
  { id: "3", name: "TypeScript", src: "/icons/typescript-original.svg" },
  { id: "4", name: "Python", src: "/icons/python-original.svg" },
  { id: "5", name: "HTML", src: "/icons/html5-original.svg" },
  { id: "6", name: "CSS", src: "/icons/css3-original.svg" },
  { id: "7", name: "Django", src: "/icons/django-plain.svg" },
];

const learning: SkillItem[] = [
  { id: "1", name: "Swift", src: "/icons/swift-original.svg" },
  { id: "2", name: "JavaScript", src: "/icons/javascript-original.svg" },
  { id: "3", name: "Java", src: "/icons/java-original.svg" },
];

const Skills: FC = memo(() => {
  return (
    <section id="skills" className="px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-black">
        Skills
      </h2>
      <div className="mx-auto flex max-w-4xl flex-col gap-12 md:flex-row md:gap-30">
        {/* 左：習得済み */}
        <div className="flex-1">
          <h3 className="mb-6 text-center text-lg font-semibold text-black">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map(({ id, name, src }) => (
                <Image
                  key={id}
                  src={src}
                  alt={name}
                  width={50}
                  height={50}
                  className="h-15 w-15 object-contain"
                />
            ))}
          </div>
        </div>
        {/* 右：学習中 */}
        <div className="flex-1 ml-20">
          <h3 className="mb-6 text-center text-lg font-semibold text-black">
            Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {learning.map(({ id, name, src }) => (
                <Image
                  key={id}
                  src={src}
                  alt={name}
                  width={32}
                  height={32}
                  className="h-15 w-15 object-contain"
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;
