import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import  Projects  from "@/components/Projects";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="font-sans px-2 bg-white dark:bg-black text-black dark:text-white  transition-colors duration-600">
      <div className=" mx-auto max-w-3xl border border-black/10 dark:border-white/10 border-x">
      <Nav />
      <Hero />
      <Projects byDefault={false} />
      <About/>
      <Education />
      <Contact />
      <Chat />
      </div>
    </div>
  );
}
