import Link from "next/link";
import { PiReadCvLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineX } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import TechPill from "./TechPill";

export const Hero = () => {
  return (
    <main className="mx-auto max-w-[850px] px-1 w-full">
      <div className="container mx-auto px-4 animate-fade-in-blur max-w-5xl">
        <div className="inline-block mt-15">
          <img
            src="/avatar_1747346587.png"
            alt="Ankit Kashyap"
            className="w-23 h-23 rounded-full"
          />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <h1 className="text-[35px] font-semibold text-transparent bg-gradient-to-b from-gray-600 via-gray-700 to-primary dark:from-gray-300 dark:via-gray-200 dark:to-primary bg-clip-text">
            Hi, I'm Ankit —
            <span className="text-[#909092] ml-3 text-[35px] ">
              A Full Stack web developer.
            </span>
          </h1>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <div className="mt-2 flex flex-col gap-y-2 text-xs md:text-xl text-neutral-500">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
              <span className="text-[18px]">
                I build interactive web apps using{" "}
              </span>
              <div className="text-primary flex items-center gap-1 border-dashed border-1 transition-all duration-100 border-neutral-400 rounded-md px-1 py-1 text-sm font-semibold bg-neutral-300/90 dark:bg-neutral-700/80">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#000000"
                >
                  <rect width="512" height="512" rx="15%" fill="#f7df1e"></rect>
                  <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17-21 -31-21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
                </svg>
                Javascript
              </div>
              ,
              <div className="text-primary flex items-center gap-1 border-dashed border-1 border-neutral-400 rounded-md px-1 py-1 text-sm font-semibold bg-neutral-300/90 dark:bg-neutral-700/80">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#000000"
                >
                  <rect width="512" height="512" rx="15%" fill="#3178c6"></rect>
                  <path
                    fill="#ffffff"
                    d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
                  ></path>
                </svg>
                Typescript
              </div>
              ,
              <div className="text-primary flex items-center gap-1 border-dashed border-1 border-neutral-400 rounded-md px-1 py-1 text-sm font-semibold bg-neutral-300/90 dark:bg-neutral-700/80">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#000000"
                >
                  <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
                  <circle cx="256" cy="256" r="36" fill="#61dafb"></circle>
                  <path
                    stroke="#61dafb"
                    strokeWidth="18"
                    fill="none"
                    d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"
                  ></path>
                </svg>
                React
              </div>
              ,
              <div className="text-primary flex items-center gap-1 border-dashed border-1 border-neutral-400 rounded-md px-2 py-1 text-sm font-semibold bg-neutral-300/90 dark:bg-neutral-700/80">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                </svg>
                Next.js
              </div>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
              <div className="text-primary flex items-center gap-1 border-dashed border-1 border-neutral-400 rounded-md px-2 py-1 text-sm font-semibold bg-neutral-300/90 dark:bg-neutral-700/80">
                <svg
                  className="w-5 h-5"
                  viewBox="-16.5 0 289 289"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <path
                    d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z"
                    fill="#539E43"
                  ></path>
                </svg>
                Node.js
              </div>
              <span className="text-[20px]"> and </span>
             <div className="text-primary flex items-center gap-1 border-dashed border-1 border-neutral-400 rounded-md px-2 py-1 text-sm font-semibold bg-neutral-300/90 dark:bg-neutral-700/80">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path
                fill="#439934"
                d="M64.7 2.1c-.6-.8-1.3-.1-1.6.4-.3.5-.6 1-.9 1.4C55.7 16.6 49.4 28.1 44 39.9c-6.9 15.6-9.5 31.6-6.4 48.4 3 16.4 11.2 29.9 25.1 39.1.5.3.9.4 1.5 0 10.1-6.5 17.4-15.5 22.1-26.6 6.8-16.2 7.7-32.8 2.3-49.5-4.5-14.1-12.2-26.5-20.5-38.8-.9-1.4-1.7-2.8-2.4-4.2z"
              />
              <path
                fill="#4FAA41"
                d="M63.4 126.7c-.4-6.2-.7-12.3-1.1-18.5-.1-1.2-.7-1.9-1.7-2.5-7-3.9-12.2-9.7-15.9-16.8-4-7.7-6.1-16.1-6.3-24.8-.2-8.1.9-16.1 3.7-23.7 3.6-9.8 8.3-19.1 13.2-28.3 1.6-3 3.2-6 4.8-8.9.3-.5.7-1 1.3-1.8v125.3z"
              />
            </svg>
            MongoDB
          </div>
              .
              <div className="text-[18px]">
                With a focus on clean{" "}
                <span className="dark:text-white text-black font-semibold">
                  UI
                </span>{" "}
                design and passionate about scalable{" "}
                <span className="dark:text-white text-black font-semibold">
                  Backend
                </span>{" "}
                architecture.
              </div>
            </div>
            </div>

            <div className="flex items-center gap-5 mt-4">
              <div className="flex items-center gap-6">
                <Link
                  href="/resume"
                  className="
                        text-sm
                        rounded-md
                        border border-black/10 dark:border-white/20
                        px-4 py-2
                        font-medium
                        text-neutral-700 dark:text-neutral-300
                        transition-all duration-300 active:scale-95 cursor-pointer
                        hover:text-black dark:hover:text-white
                        flex items-center gap-2
                    
                        bg-gradient-to-b from-black/5 to-transparent
                        dark:from-white/15 dark:to-transparent

                        hover:from-black/10 hover:to-black/5 
                        dark:hover:from-white/15 dark:hover:to-white/10
                    "
                >
                  <i className="text-black dark:text-white text-lg">
                    <PiReadCvLogo />
                  </i>
                  Resume / CV
                </Link>
              </div>

              <Link
                href="/contact"
                className="px-4 flex items-center gap-2 py-2 text-sm dark:hover:bg-neutral-400 bg-black dark:bg-neutral-200 text-white dark:text-black rounded-lg font-medium hover:bg-black/80 transition-colors duration-200"
              >
                <i className="text-sm  text-white dark:text-black">
                    <TfiEmail/>
                </i>
                Get in touch
              </Link>
            </div>
          </div>

          <div className="mt-4 flex flex-row gap-5">
             <div className="relative group">
            <Link
              href="https://github.com/Ankuxkashyap"
              target="_blank"
              className="border flex items-center border-neutral-400 px-4 py-2 rounded-sm bg-neutral-400/10 dark:border-white/20"
              >
              <i className="text-2xl dark:text-neutral-300 text-black"><BsGithub/></i>
            </Link>
              <TechPill tech="GitHub" />
            </div>
            
            <div className="relative group">
            <Link
              href="https://www.linkedin.com/in/ankitkashyap-dev"
              target="_blank"
              className="border flex items-center border-neutral-400 px-4 py-2 rounded-sm bg-neutral-400/10 dark:border-white/20"
              >
              <i className="text-2xl dark:text-neutral-300 text-black"><FaLinkedin/></i>
            </Link>
              <TechPill tech="LinkedIn" />
            </div>

            <div className="relative group">
            <Link
              href="https://x.com/Ankuxkashyap"
              target="_blank"
              className="border flex items-center border-neutral-400 px-4 py-2 rounded-sm bg-neutral-400/10 dark:border-white/20"
              >
              <i className="text-2xl dark:text-neutral-300 text-black"><AiOutlineX/></i>
            </Link>
              <TechPill tech="X" />
            </div>

            <div className="relative group">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="border flex items-center border-neutral-400 px-4 py-2 rounded-sm bg-neutral-400/10 dark:border-white/20"
              >
              <i className="text-2xl dark:text-neutral-300 text-black"><FaInstagram/></i>
            </Link>
              <TechPill tech="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
