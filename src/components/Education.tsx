import { FaGraduationCap } from "react-icons/fa6";
const Education = () => {
  return (
    <div className="py-8 mx-auto max-w-3xl transition-colors duration-100 text-black dark:text-white">
      <p className="px-5 text-sm text-neutral-400">Featured</p>
      <h2 className="px-5 text-2xl font-bold mb-4">Education</h2>
      <div className="flex flex-row gap-5 px-5 mt-4 items-center">
        <div className="w-8 h-8 rounded-full items-center">
          <div className="relative flex items-center justify-center size-10 rounded-2xl dark:bg-[#1e1e1e] border border-black/10 dark:border-[#2c2c2c]">
            <div className="flex items-center justify-center size-8 rounded-xl dark:bg-[#3b3a3ada] bg-black/10 shadow-inner dark:shadow-black/30 shadow-gray-200/50">
              <i className="text-xl dark:text-white text-black/80">
                <FaGraduationCap />
              </i>
            </div>
          </div>
        </div>
        <div>
          <p className=" text-lg font-bold ">Indra Gandhi University Meerpur</p>
          <p className=" text-[16px] text-neutral-500 dark:text-neutral-300">
            B.Tech in Computer Science and Engineering
          </p>
          <p className=" text-[16px] text-neutral-500 dark:text-neutral-300 ">
            2022-Present
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
