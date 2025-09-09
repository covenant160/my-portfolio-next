"use client";
import React from "react";
import Image from "next/image"; // ✅ import Next.js Image

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/profile pic.png" // ✅ must be in /public
            alt="Covenant"
            width={192} // w-48
            height={192} // h-48
            className="rounded-full object-cover border-4 border-purple-500"
            priority // ✅ loads immediately (no lazy load for profile pic)
          />
        </div>

        {/* About Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-purple-500">About Me</h2>
          <p className="mb-4 text-lg">
            I am Covenant Mapuranga, a passionate Web Developer with experience in
            building modern, responsive, and high-performance web applications
            using React, Next.js, and Tailwind CSS. I love turning ideas into
            digital products that solve real problems.
          </p>
          <p className="mb-6 text-lg">
            I focus on writing clean, maintainable code and continuously learning
            new technologies to stay at the forefront of web development.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
              "HTML",
              "CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
