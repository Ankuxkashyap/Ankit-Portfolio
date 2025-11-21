import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

const ContactPage = () => {
    return (
   <div className="font-sans px-2 bg-white dark:bg-black text-black dark:text-white  transition-colors duration-600">
      <div className=" mx-auto max-w-3xl border border-black/10 dark:border-white/10 border-x">
      <Nav/>
        <h1 className="text-4xl font-bold text-center my-5">Contact</h1>
        <p className=" text-center text-xl text-neutral-500 dark:text-neutral-400 ">
            Get in touch with me. I will get back to you as soon as possible.
        </p>
        <div className="border-t border-black/10 dark:border-white/10 mt-4">
            <Contact />
        </div>
      </div>
    </div>
) ;

}

export default ContactPage;