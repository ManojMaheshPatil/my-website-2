import React from "react";
import { Code2, Database, Globe, Laptop } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "PostgreSQL", "MongoDB", "Express.js"],
    },
    {
      title: "Tools",
      icon: <Laptop className="w-6 h-6" />,
      skills: ["Git", "JIRA", "AWS", "Supabase"],
    },
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["JavaScript", "Python", "SQL"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] transition-colors"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
