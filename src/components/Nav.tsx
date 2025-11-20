"use client";

import { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { BsBrightnessHigh } from "react-icons/bs";
import { useTheme } from "next-themes";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`container mx-auto max-w-[850px] px-2 animate-fade-in-blur sticky top-0 z-20 py-2 backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? " dark:border-white/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between transition-colors duration-300 py-3 px-2">
        <div className="flex items-center">
          <img
            loading="lazy" 
            src="/avatar_1747346587.png"
            className="rounded-2xl  dark:border-white/50 border-black/50 border-2 w-14 h-14"
            alt="logo"
          />

          <div className="flex items-baseline ml-4 gap-6 mt-8">
            {["Projects", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4 text-black dark:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center size-10 rounded-md border border-black/10 dark:border-white/20 transition-all duration-300 active:scale-95 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-900/70"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <BsBrightnessHigh className="text-neutral-300 text-lg" />
            ) : (
              <LuMoon className="text-gray-800 text-lg" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
