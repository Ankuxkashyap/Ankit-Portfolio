import { skills, skillIcons, skillColors } from "../data/skills";

import TechPill from "./TechPill";
const About = () => {
  return (
    <div className="py-8 mx-auto max-w-6xl transition-colors duration-100 text-black dark:text-white">
      <p className="px-5 text-sm text-neutral-400">About</p>
      <h2 className="px-5 text-2xl font-bold mb-4">Me</h2>
      <div className="px-5 space-y-4 text-neutral-700 dark:text-neutral-300">
        <div className="flex flex-col gap-5 md:flex-row">
          <img
            src="/avatar_1747346587.png"
            alt="me"
            className="w-60 h-60 rounded-2xl"
          />
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold ">Ankit Kashyap</p>
            <p className="mt-4 text-neutral-400 dark:text-neutral-500 text-[17px]">
              I’m a Full Stack web developer driven by Clean Design, thoughtful Architecture, and Scalable solutions. I build products that are simple for users and strong at their core.
            </p>
            <p className="text-[17px] mt-4 font-bold text-neutral-400 dark:text-neutral-500">Skills</p>
            <div className="mt-4 flex flex-row gap-3">
                {skills.map((skill) => {
                    const Icon = skillIcons[skill]; 
                    const color = skillColors[skill];

                    return (
                    <span key={skill} className="text-2xl text-neutral-400 dark:text-neutral-500 cursor-pointer relative group">
                        <Icon
                            style={{ color: color }}
                            key={skill}
                        className="transition-colors duration-300 " />
                        <TechPill  tech={skill} />
                    </span>
                    );
                })}
                </div>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
