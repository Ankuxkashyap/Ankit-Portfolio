"use client";
import {  useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
            }),
        });
        if (response.ok) {
            alert('Message sent successfully!');
        }
    } catch (error) {
        alert('Failed to send message.');
    }
    }
  return (
    <div className="py-8 mx-auto max-w-3xl transition-colors duration-100 text-black dark:text-white">
      <p className="px-5 text-sm text-neutral-400">Get in Touch</p>
      <h2 className="px-5 text-2xl font-bold mb-4">Contact</h2>
      <div className="px-5  text-neutral-700 dark:text-neutral-300">
        <p className="text-[17px] text-neutral-900 dark:text-neutral-400 font-bold">
          Send me a message
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Fill out the form below and I will get back to you as soon as
          possible.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8 w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <label >Name*
            <input
              type="text"
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="Your full name"
              className="w-full px-2 py-2  dark:bg-neutral-900 bg-neutral-100  border dark:border-neutral-700 border-neutral-500 rounded-xl  dark:text-neutral-100 text-neutral-900  placeholder-neutral-900 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            </label>

            <label>Phone*
            <input
              type="text"
                onChange={(e)=>{setPhone(e.target.value)}}
              placeholder="+1 (123)xx-xxxxx"
              className="w-full px-2 py-2 dark:bg-neutral-900 bg-neutral-100  border dark:border-neutral-700 border-neutral-500 rounded-xl  dark:text-neutral-100 text-neutral-900  placeholder-neutral-900 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            </label>
          </div>

         
          <label>Email*
          <input
            type="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="your.email@example.com"
            className="w-full px-2 py-2 dark:bg-neutral-900 bg-neutral-100  border dark:border-neutral-700 border-neutral-500 rounded-xl  dark:text-neutral-100 text-neutral-900  placeholder-neutral-900 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          />
            </label>
          
            <label>Message*
          <textarea
            rows={5}
            onChange={(e)=>{setMessage(e.target.value)}}
            placeholder="Tell me about your project or just say hello..."
            className="w-full px-2 py-2 dark:bg-neutral-900 bg-neutral-100  border dark:border-neutral-700 border-neutral-500 rounded-xl  dark:text-neutral-100 text-neutral-900  placeholder-neutral-900 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          />
            </label>

          <button
            type="submit"
            className="w-fit flex items-center gap-2 px-6 py-3 dark:bg-white bg-black  text-white dark:text-black font-semibold rounded-xl hover:bg-neutral-800 cursor-pointer dark:hover:bg-neutral-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
