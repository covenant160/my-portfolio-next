import React from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS / Tailwind CSS", level: 85 },
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js / Express", level: 70 },
  { name: "Prisma / MongoDB / SQLite", level: 65 },
  { name: "Git / GitHub", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-purple-500 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-900 rounded-lg p-5 shadow hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-purple-500 h-4"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-300">{skill.level}% proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
