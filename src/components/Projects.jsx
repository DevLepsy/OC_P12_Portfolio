import React from "react";
import { PROJECTS } from "../constants";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-neutral-400 hover:text-purple-800"
                >
                  <FiGithub className="mr-1" /> Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
