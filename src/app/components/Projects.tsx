"use client";
import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Stylish Portfolio",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
    img: "/Screenshot (64).png",
  },
  {
    title: "E-commerce Store",
    description: "An online store with product listings, cart, and checkout functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    demo: "",
    img: "/coming soon.jpg",
    comingSoon: true,
  },
  {
    title: "Parking App",
    description: "A parking marketplace app where users can find and book parking spaces.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "SQLite"],
    github: "https://github.com/yourusername/parking-app",
    demo: "#",
    img: "/Screenshot (63).png",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with authentication and private messaging.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "",
    demo: "",
    img: "/coming soon.jpg",
    comingSoon: true,
  },
  {
    title: "Payslip Generator Project",
    description: "A blogging platform with markdown editor and comments section.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    github: "",
    demo: "",
    img: "/coming soon.jpg",
    comingSoon: true,
  },
  {
    title: "Baker's Inn Project",
    description: "A dashboard showing real-time weather data using a public API.",
    tech: ["React", "Tailwind CSS", "API"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "#",
    img: "/Screenshot (62).png",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"finished" | "comingSoon">("finished");

  const filteredProjects = projects.filter((p) =>
    activeTab === "finished" ? !p.comingSoon : p.comingSoon
  );

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-purple-500 text-center">
          Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("finished")}
            className={`px-6 py-2 rounded-md font-semibold transition ${
              activeTab === "finished"
                ? "bg-purple-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white"
            }`}
          >
            Finished Projects
          </button>
          <button
            onClick={() => setActiveTab("comingSoon")}
            className={`px-6 py-2 rounded-md font-semibold transition ${
              activeTab === "comingSoon"
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-gray-300 hover:bg-yellow-500 hover:text-black"
            }`}
          >
            Coming Soon
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col cursor-pointer"
              onClick={() =>
                !project.comingSoon && window.open(project.demo || project.github)
              }
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {project.comingSoon && (
                  <span className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 text-sm font-bold rounded">
                    Coming Soon
                  </span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-auto">
                  {!project.comingSoon && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-purple-500 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                  {!project.comingSoon && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-purple-500 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
