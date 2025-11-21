"use client";
import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { LuSend } from "react-icons/lu";

const messagesInitial = [
  { role: "ai" as const, content: "Hello! I'm Ankit's Portfolio Assistant. How can I help you today?" },
  { role: "user" as const, content: "Hi!" },
];


const Chat = () => {
  const [messages, setMessages] = React.useState<{ role: "user" | "ai"; content: string }[]>(messagesInitial);
  const [input, setInput] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  };

  return (
    <div className="absolute md:bottom-10 bottom-5 right-5 md:right-10 fixed">
      <div
        className={`transition-all duration-100 mb-7 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } origin-bottom-right`}
      >
        <div className="w-80 h-96 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-lg shadow-lg flex flex-col overflow-hidden mt-2">
          <div className="flex flex-row items-center gap-3 px-3 py-2 border-b border-black/10 dark:border-white/10">
            <img
              src="/avatar_1747346587.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col ">
              <span className="font-bold text-black dark:text-white">
                Ankit's Portfolio Assistant
              </span>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <p className="text-sm text-black dark:text-white">Online</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto scrollbar-thin  scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-900">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div className={`flex items-center gap-2 justify-${msg.role === "user" ? "end" : "start"}`}>
                {msg.role === "ai" && (
                      <img src="/avatar_1747346587.png" alt="Ankit's Assistant Avatar"  className="w-8 h-8 rounded-full"/>
                )}
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-neutral-200 dark:bg-neutral-800  text-black dark:text-white "
                      : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white flex items-center gap-2 flex-row"
                  }`}
                >
                  {msg.content}
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-2 py-2 border-t flex flex-row border-black/10 dark:border-white/10">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              className="w-full px-2 py-1 border border-black/10 dark:border-white/10 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-netral-500"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-2 py-1 bg-neutral-200 dark:bg-neutral-800 cursor-pointer text-black dark:text-white rounded-lg hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-netral-500"
            >
              <LuSend className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" bg-neutral-200 hover:bg-neutral-300  dark:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer dark:text-white p-4 rounded-full shadow-lg"
        >
          {isOpen ? (
            <RxCross2 size={24} />
          ) : (
            <IoChatbubbleEllipsesOutline size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Chat;
