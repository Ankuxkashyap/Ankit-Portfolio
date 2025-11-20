
interface Project {
    id: number;
    name: string;
    description: string;
    link: string;
    image: string;
    github: string;
    skill: string[];
    status: string;
    keyFeactures: string[];
    createdAt: string;
}

const projects: Project[] = [
    {
        id: 1,
        name: "Hirrd - Job Portal",
        description:
            "A full-stack job portal where users can search, apply, and manage jobs.",
        link: "https://mern-job-portal-lovat.vercel.app/",
        image: "/hirrd.jpeg",
        github: "https://github.com/Ankuxkashyap/mern-job-portal",
        skill: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express.js", "MongoDB", "JWT Token", "Cloudinary"],
        status: "Completed",
        keyFeactures: [
            " Secured JWT-based auth with full session protection",
            " Real-time search & filtering for efficient job hunting",
            " Cloudinary integration for effortless resume & uploads",
            " Responsive design for optimal experience on all devices",
            " Comprehensive job management for employers & candidates",
            " Deployed on Vercel and Render",
        ],
        createdAt: "sep 30,2025",
    },
    {
        id: 2,
        name: "Taskify - Task Management App",
        description:
            "A real-time task management app for organizing daily tasks with live updates using WebSockets.",
        link: "https://taskify-theta-teal.vercel.app/",
        image: "/taskfy.png",
        github: "https://github.com/Ankuxkashyap/tms-frontend",
        skill: ["React.js", "TypeScript", "Tailwind CSS", "Zustand",  "Next.js","Node.js", "Express.js", "MongoDB", "JWT Token", "websocket", "socket.io"],
        status: "Completed",
        keyFeactures: [
            " User-friendly UI with React & Tailwind CSS for easy task management",
            " Real-time task search & filtering for quick access",
            " Websocket & socket.io for Real-time notifications",
            " Responsive design for any device",
            " Full CRUD task operations",
            " Deployed on Vercel and Render",
        ],
        createdAt: "oct 20,2025",
    },
    {
        id: 3,
        name: "Bewakoof - Ecommerce App",
        description:
            "A modern full-stack eCommerce platform with secure payments, product management, and a smooth shopping experience.",
        link: "",
        image: "/taskfy.png",
        github: "https://github.com/Ankuxkashyap/Ecom_Mern",
        skill: ["React.js", "Tailwind CSS", "Zustand", "Node.js", "Express.js", "MongoDB", "JWT Token", "Stripe", "Cloudinary"],
        status: "In Progress",
        keyFeactures: [
            " Secure JWT-based authentication",
            " Clean UI with React & Tailwind CSS",
            " Product search & filtering for fast browsing",
            " Stripe integration for payments",
            " Cloudinary image uploads",
            " Pagination & related products",
            " Fully responsive",
            " Product CRUD operations",
            " Deployed on Vercel and Render",
        ],
        createdAt: "Jul 1,2025",
    },
    {
        id: 4,
        name: "Blogging Platform",
        description:
            "A feature-rich blogging platform for creating, editing, and exploring posts with secure user authentication.",
        link: "",
        image: "/taskfy.png",
        github: "https://github.com/Ankuxkashyap/Blogging-Platform",
        skill: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "Node.js", "Express.js", "MongoDB", "JWT Token", "Cloudinary"],
        status: "In Progress",
        keyFeactures: [
            " JWT-based secure auth",
            " Smooth UI with Tailwind CSS",
            " Real-time blog search, filtering & sorting",
            " Cloudinary for blog image uploads",
            " Pagination & related posts",
            " Fully responsive experience",
            " Blog CRUD operations",
            " Ready for deployment",
        ],
        createdAt: "nov 10,2025",
    }
];

export default projects;
