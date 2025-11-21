"use client";
import projects from "@/data/project";
import ProjectItem from "@/components/ProjectItem";

const Projects = ({byDefault}: {byDefault: boolean}) => {
  return (
    <div className=" py-8 mx-auto max-w-6xl">
      <p className="px-5 text-sm text-neutral-400">Featured</p>
      <h1 className=" px-5 text-2xl font-bold dark:text-neutral-300 text-black">
        Projects ({projects.length})
      </h1>
      <div className="mt-6 flex flex-col w-full ">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project}  byDefault={byDefault} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
