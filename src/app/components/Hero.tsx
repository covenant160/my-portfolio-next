"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showCV, setShowCV] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white px-4"
      style={{
        backgroundImage: "url('/web background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hi, I’m <span className="text-purple-500">Covenant Mapuranga</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          A passionate Web Developer specializing in modern, responsive, and
          user-friendly web applications with{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>, and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Contact Me
          </a>
          <button
            onClick={() => setShowCV(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            👀 View CV
          </button>
        </div>
      </div>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 overflow-auto">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-[90vw] relative p-4 flex justify-center">
            {/* Exit Button - fixed */}
            <button
              onClick={() => setShowCV(false)}
              className="fixed top-6 right-6 z-50 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-lg"
            >
              Exit
            </button>

            {/* Zoom Buttons - fixed */}
            <div className="fixed top-6 left-6 z-50 flex gap-2">
              <button
                onClick={handleZoomIn}
                className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md"
              >
                +
              </button>
              <button
                onClick={handleZoomOut}
                className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md"
              >
                -
              </button>
              <button
                onClick={handleResetZoom}
                className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-md"
              >
                Reset
              </button>
            </div>

            {/* CV Image */}
            <div className="flex justify-center relative z-10">
              <Image
                src="/Covenant_Mapuranga_CV.jpg"
                alt="My CV"
                width={1200}
                height={1600}
                style={{
                  transform: `scale(${zoom})`,
                  transition: "transform 0.2s",
                  maxWidth: "100%",
                  height: "auto",
                }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
