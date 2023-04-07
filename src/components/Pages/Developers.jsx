import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Developers = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-12 mt-14 ">
        <div className="border-2 border-amber-500 rounded-lg p-4 mt-20">
          <h1 className="text-2xl font-bold text-amber-500 mb-4">About Me</h1>
          <p className="text-white mb-4">
            Hello there! My name is Bekim, and I'm thrilled to be pursuing a
            career as a junior developer. After discovering my passion for web
            development in early 2022, I've spent countless hours studying and
            practicing my skills, and I'm confident in my ability to contribute
            to a team and continue to grow as a developer..
          </p>
          <p className="text-white mb-4">
            My background is in construction, where I gained valuable skills in
            working collaboratively with a team, managing projects under tight
            deadlines, and attention to detail. However, my passion for
            technology and coding has led me to pursue a career in web
            development, where I can combine my creative problem-solving skills
            with my love for building things.
          </p>
          <p className="text-white mb-4">
            I'm really passionate about web development and love working on both
            the front and back ends of websites. I'm always excited to learn new
            things and stay up-to-date with the latest trends and best
            practices. I'm eager to start my career in web development and find
            a company where I can make a real impact by being creative,
            collaborative, and constantly learning.
          </p>
          <div className="flex items-center justify-start mt-4">
            <a
              href="https://github.com/coderkidd99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6 mr-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/bekimburimi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6 mr-2" />
            </a>
            <a
              href="mailto:bekimburimi84@gmail.com"
              className="text-white hover:text-amber-500 transition-colors duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
