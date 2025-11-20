"use client";

type TechPillProps = {
  tech: string;
};

export default function TechPill({ tech }: TechPillProps) {
  return (
     <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
    px-2 py-1 text-sm font-medium text-white dark:text-black 
    bg-black dark:bg-neutral-200 rounded-md 
    opacity-0 group-hover:opacity-100 
    transition-all duration-200 whitespace-nowrap shadow-lg">

    {tech}

    <span
      className="absolute top-full left-1/2 -translate-x-1/2 
      w-0 h-0 
      border-l-6 border-r-6 border-t-6
      border-l-transparent border-r-transparent 
      border-t-black dark:border-t-neutral-200">
    </span>
</span>

  );
}
