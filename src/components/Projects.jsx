import React from "react";
import { Github, ExternalLink } from "lucide-react";
import wildoasis from "../components/wildoasis.png";
import fastreactpizza from "../components/fastreactpizza.png";

const Projects = () => {
  const projects = [
    {
      title: "The Wild Oasis",
      description:
        "An internal hotel management app enabling users (hotel employees) to create, delete, and update cabins, check in and out guests, and access statistics such as bookings, stays, and occupancy rates.",
      technologies: [
        "React",
        "Node.js",
        "Tailwind CSS",
        "Context API",
        "React Forms",
        "React Toasts",
        "Supabase",
        "Netlify",
        "Git",
      ],
      github: "https://github.com/ManojMaheshPatil/The-Wild-Oasis",
      live: "https://the-wild-oasis-baba.netlify.app/login",
      image: wildoasis,
      // "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
    },
    {
      title: "Fast React Pizza",
      description:
        "Fast React Pizza Co., a professionally crafted website offering an extensive pizza menu selection. The project used Advanced React, Redux, and Tailwind CSS to build a seamless ordering experience.",
      technologies: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
        "JavaScript",
        "Git",
      ],
      github: "https://github.com/ManojMaheshPatil/Fast-React-Pizza",
      live: "https://github.com/ManojMaheshPatil/Fast-React-Pizza",
      image: fastreactpizza,
      // "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    },
    {
      title: "MyBlog",
      description:
        "Developed a complete API for a blog with all the CRUD operations. Implemented all the backend features required for a blog to work. Used NodeJS as the programming language",
      technologies: ["Node.js", "Express.js", "Postman", "REST API"],
      github: "https://github.com/ManojMaheshPatil/blog-api-v1",
      live: "https://github.com/ManojMaheshPatil/blog-api-v1",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#252525] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
