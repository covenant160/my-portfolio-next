"use client";

import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300">
            Hi, I’m <span className="text-purple-400">Covenant Mapuranga</span>, a passionate web developer
            building modern and responsive websites. Check out my projects and
            connect with me on social media.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:mapurangacovenant1@gmail.com"
              className="text-purple-500 hover:underline"
            >
              mapurangacovenant1@gmail.com
            </a>
          </p>
          <p className="text-gray-300">Phone: +263 716 859 706</p>
          <p className="text-gray-300">Location: Harare, Zimbabwe</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Me</h2>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://linkedin.com/in/covenantmapuranga"
              target="_blank"
              className="hover:text-purple-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/covenantmapuranga"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/covenantmapuranga"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:mapurangacovenant1@gmail.com"
              className="hover:text-red-500 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Covenant Mapuranga Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
