import { FiBox } from "react-icons/fi";
import { HiMiniLink } from "react-icons/hi2";
import { LuChevronsUpDown } from "react-icons/lu";
import { LuChevronsDownUp } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TechPill from "./TechPill";

interface ProjectItemProps {
  project: {
    id: number;
    name: string;
    description: string;
    link: string;
    image: string;
    github: string;
    skill: string[];
    status: string;
    icon?: string;
    keyFeactures: string[];
    createdAt: string;
  };
  byDefault?: boolean;
}

const ProjectItem = ({ project, byDefault }: ProjectItemProps) => {
  const [isOpen, setIsOpen] = useState(byDefault || false); 
  return (
    <>
      <div className="flex flex-col md:flex-row border-y w-full border-black/10 dark:border-white/10 gap items-start hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 cursor-pointer transition-colors duration-300 ">
        <div className="flex flex-row gap items-center w-full">
          <div className="border-r border-dashed border-black/10 dark:border-white/10 h-full py-3 pr-3 ml-4">
            <div className="relative flex items-center justify-center size-10 rounded-2xl dark:bg-[#1e1e1e] border border-black/10 dark:border-[#2c2c2c]">
              <div className="flex items-center justify-center size-8 rounded-xl dark:bg-[#3b3a3ada] bg-black/10 shadow-inner dark:shadow-black/30 shadow-gray-200/50">
                <i className="text-xl dark:text-white text-black/80">
                  <FiBox />
                </i>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full items-center transition-colors duration-100 text-black dark:text-white">
            <div className="flex flex-col ml-3">
              <h1>{project.name}</h1>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {project.createdAt}
              </p>
            </div>

            <div className="mr-3 gap-3 flex items-center">
              <Link
                href={project.link}
                target="_blank"
                className="mr-4 relative group"
              >
                <HiMiniLink className="text-xl text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-300" />
                <TechPill tech="Open Project Link" />
              </Link>

              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? (
                  <LuChevronsDownUp className="text-xl text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer" />
                ) : (
                  <LuChevronsUpDown className="text-xl text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="px-5 py-4 mb-6  transition-colors duration-300">
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            {project.description}
          </p>
          <div>
            <h2 className="font-semibold mt-2">Features:</h2>
            <ul className="ml-2 mt-3 list-disc list-inside text-[16px] text-neutral-700 dark:text-neutral-300">
              {project.keyFeactures.map((feature) => (
                <li className="mt-2 decoration-none" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>

            {project.skill.map((tech) => (
              <span
                className="inline-block bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm px-3 py-1 rounded-full mr-2 mt-3"
                key={tech}
              >
                <p>{tech}</p>
              </span>
            ))}

            <div className="flex flex-row justify-between">
              <div
                className={`inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full text-sm font-medium
                ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                    : project.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                }
              `}
                >
                 
                <span
                    className={`size-2.5 rounded-full
                  ${
                    project.status === "Completed"
                      ? "bg-green-500"
                      : project.status === "In Progress"
                      ? "bg-yellow-400"
                      : "bg-gray-400"
                  }
                `}
                ></span>
                {project.status}
              </div>

              
              <Link 
              href={project.github}
              target="_blank"
              className="font-semibold mt-4">
                <FaGithub className="inline mr-2"/>
                Source Code
              </Link>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectItem;