import { Project, Testimonial } from "@/types";

export const exp = [
  {
    title: "Full stack developer",
    company: "Freelance",
    location: "Remote",
    period: "2024-present",
    points: ["Designed and developed full-stack web applications using React, Next.js, Node.js/Express, and MongoDB/PostgreSQL, improving client operations and user engagement.",
      "Built scalable REST and GraphQL APIs with authentication, authorization, caching, and error handling.",
      "Integrated third-party APIs and services (e.g., Stripe, Razorpay) to extend product functionality.",
      "Designed responsive layouts and interactions across mobile, tablet, and desktop breakpoints.",
      "Reduced development time by 30% by creating reusable component libraries and design systems."],
    skill: ["typescript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Stripe", "Razorpay", "Next.js", "React", "TailwindCSS", "Motion"],
  },
  {
    title: "ELV Estimation Engineer",
    company: "NAFFCO",
    location: "Dubai",
    period: "2023-2024",
    points: ["Collaborated with cross-functional teams and clients to deliver complex project bids under tight deadlines",
      "Used tools like Excel macros, AutoCAD, and ERP systems — building a foundation for transitioning into tech",
      "Managed structured documentation and process-driven workflows, now reflected in my software practices",
      "Developed systems-thinking and detail-oriented problem solving that inform my full-stack development work today",
      "Automated repetitive estimation tasks using Excel macros and basic scripting, sparking a deeper interest in software development."],
    skill: ["Excel", "AutoCAD", "Collaboration", "Documentation", "Problem-solving", "Estimation"],
  },
];

export const projectList: Project[] = [
  {
    id: "dev_stats",
    title: "Dev Stats",
    description: `Dev Stats is a developer-focused platform that turns your GitHub activity into visually compelling,
insight-rich proof of work. Whether you're job-hunting, freelancing, or building in public, By analyzing your commit history, 
pull requests, repos, and issues, Dev Stats creates stunning dashboards, timelines, and shareable profiles`,
    image:
      "https://res.cloudinary.com/dpvmgvusp/image/upload/v1744115210/devstats_t7wicz.png",
    tags: ["Nextjs", "tailwindcss", "typescript", "github"],
    liveLink: "https://devstats.sanjid.shop",
    githubLink: "https://github.com/m-sanjid/dev_stats",
    logo: "https://res.cloudinary.com/dpvmgvusp/image/upload/v1744115210/devstats_t7wicz.png",
    longDescription: `Dev Stats is a developer-focused platform that turns your GitHub activity into visually compelling,
insight-rich proof of work. Whether you're job-hunting, freelancing, or building in public, By analyzing your commit history, 
pull requests, repos, and issues, Dev Stats creates stunning dashboards, timelines, and shareable profiles`,
    screenshots: [
      "https://res.cloudinary.com/dpvmgvusp/image/upload/v1744123290/Screenshot_2025-04-08_at_6.27.00_PM_wa5ats.png",
      "https://res.cloudinary.com/dpvmgvusp/image/upload/v1744123291/Screenshot_2025-04-08_at_6.30.19_PM_azzx2d.png",
      "https://res.cloudinary.com/dpvmgvusp/image/upload/v1744123291/Screenshot_2025-04-08_at_6.30.19_PM_azzx2d.png",
    ],
    features: [
      "GitHub activity analysis",
      "Insight-rich dashboards",
      "Shareable profiles",
    ],
    technologies: ["Nextjs", "tailwindcss", "typescript"],
    createdAt: "2024-01-01",
    stats: {
      stars: 100,
      forks: 50,
      watchers: 20,
    },
  },
  {
    id: "befit-ai",
    title: "BefitAI",
    description: `BefitAI is an AI-powered meal planner that helps fitness enthusiasts create personalized meal plans based on their goals, preferences, and dietary restrictions. With features like custom meal templates, ingredient tracking, and nutritional analysis, BefitAI empowers users to make healthier choices and reach their fitness objectives more effectively.`,
    image: "befit.png",
    tags: ["Nextjs", "tailwindcss", "typescript", "openai"],
    liveLink: "https://befitai.sanjid.shop",
    githubLink: "https://github.com/m-sanjid/befit-ai",
    logo: "assets/befit.png",
    longDescription: `BefitAI is an AI-powered meal planner that helps fitness enthusiasts create personalized meal plans based on their goals, preferences, and dietary restrictions. With features like custom meal templates, ingredient tracking, and nutritional analysis, BefitAI empowers users to make healthier choices and reach their fitness objectives more effectively.`,
    screenshots: ["befit.png"],
    features: [
      "AI-powered meal planning",
      "Custom meal templates",
      "Ingredient tracking",
      "Nutritional analysis",
    ],
    technologies: ["Nextjs", "tailwindcss", "typescript", "openai"],
    createdAt: "2024-01-01",
    stats: {
      stars: 100,
      forks: 50,
      watchers: 20,
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "Muhammed is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are impressive. We'll definitely work with him again.",
    rating: 5,
    image: "/api/placeholder/150/150",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    accentColor: "border-indigo-400",
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    company: "StartupX",
    content:
      "Working with Muhammed was a great experience. He understood our requirements perfectly and implemented solutions that exceeded our expectations. His technical knowledge is outstanding.",
    rating: 5,
    image: "/api/placeholder/150/150",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    accentColor: "border-emerald-400",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "CreativeStudio",
    content:
      "Muhammed has a rare combination of technical expertise and design sensibility. He transformed our concepts into a beautiful, functional application that our users love.",
    rating: 5,
    image: "/api/placeholder/150/150",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    accentColor: "border-amber-400",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "CEO",
    company: "InnovateNow",
    content:
      "An outstanding talent who brings both technical expertise and business understanding to every project. Muhammed's work has significantly improved our product's performance and user satisfaction.",
    rating: 5,
    image: "/api/placeholder/150/150",
    bgColor: "bg-rose-50 dark:bg-rose-950/30",
    accentColor: "border-rose-400",
  },
];

//TODO:change it to real projects
export const featuredProjects: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment processing and inventory management",
    longDescription:
      "A full-featured online store with payment processing and inventory management. Built with React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
    liveLink: "https://github.com/example/ecommerce",
    githubLink: "https://github.com/example/ecommerce",
    features: [
      "Online payments",
      "Inventory management",
      "User authentication",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    createdAt: "2023-01-01",
    stats: {
      stars: 100,
      forks: 50,
      watchers: 25,
    },
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    longDescription:
      "A collaborative task management tool with real-time updates and team features. Built with Next.js, TypeScript, and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    logo: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    ],
    liveLink: "https://github.com/example/task-manager",
    githubLink: "https://github.com/example/task-manager",
    features: ["Real-time updates", "Team collaboration", "Task management"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    createdAt: "2023-02-15",
    stats: {
      stars: 75,
      forks: 30,
      watchers: 15,
    },
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills.",
    longDescription:
      "A modern, responsive portfolio website showcasing projects and skills. Built with React, TailwindCSS, and Motion.",
    tags: ["React", "TailwindCSS", "Motion"],
    logo: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
    ],
    liveLink: "https://github.com/example/portfolio",
    githubLink: "https://github.com/example/portfolio",
    features: ["Responsive design", "Project showcase", "Skills section"],
    technologies: ["React", "TailwindCSS", "Motion"],
    createdAt: "2023-03-20",
    stats: {
      stars: 50,
      forks: 20,
      watchers: 10,
    },
  },
];

export const projectsData: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment processing and inventory management.",
    longDescription:
      "This e-commerce platform provides a complete solution for online retailers. It includes product management, user authentication, shopping cart functionality, payment processing with Stripe, and an admin dashboard for inventory management. The platform is built with scalability in mind and can handle thousands of products and users.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
    liveLink: "https://github.com/example/ecommerce",
    githubLink: "https://github.com/example/ecommerce",
    features: [
      "User authentication and profiles",
      "Product search and filtering",
      "Shopping cart and checkout",
      "Payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe API",
      "JWT Authentication",
      "AWS S3",
    ],
    createdAt: "2023-06-15",
    stats: {
      stars: 245,
      forks: 87,
      watchers: 32,
    },
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    longDescription:
      "This task management application helps teams collaborate effectively by providing real-time updates on task progress. It features drag-and-drop task organization, team workspaces, deadline tracking, and integration with popular calendar apps. The real-time functionality is powered by Socket.io, ensuring all team members stay in sync.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      "https://images.unsplash.com/photo-1540350394557-79f25841b4b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    ],
    liveLink: "https://github.com/example/task-manager",
    githubLink: "https://github.com/example/task-manager",
    features: [
      "Team workspaces and collaboration",
      "Real-time task updates",
      "Drag-and-drop task organization",
      "Deadline tracking and notifications",
      "Calendar integration",
      "File attachments and comments",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Tailwind CSS",
      "NextAuth.js",
      "Vercel",
    ],
    createdAt: "2023-08-22",
    stats: {
      stars: 178,
      forks: 43,
      watchers: 21,
    },
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills.",
    longDescription:
      "This portfolio website is designed to showcase my projects, skills, and experience in a visually appealing way. It features smooth animations, responsive design, and a clean, modern aesthetic. The site includes sections for projects, about me, contact information, and a blog. It is built with React and TailwindCSS, with animations powered by Framer Motion.",
    tags: ["React", "TailwindCSS", "Motion"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80",
    ],
    liveLink: "https://github.com/example/portfolio",
    githubLink: "https://github.com/example/portfolio",
    features: [
      "Responsive design for all devices",
      "Smooth animations and transitions",
      "Project showcase with detailed information",
      "Skills and experience section",
      "Contact form with validation",
      "Blog with markdown support",
    ],
    technologies: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "React Router",
      "Vite",
      "Netlify",
    ],
    createdAt: "2023-09-10",
    stats: {
      stars: 92,
      forks: 28,
      watchers: 15,
    },
  },
];

export const Certifications = [
  {
    id: 1,
    title: "100xDevs by Harkirat Singh",
    description: "0-100 cohort certificate",
    logo: "https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
    longDescription: "Learn basics to advanced MERN, Basics to advanced Devops, System design and build 3 projects through this journey",
    link: "https://app.100xdevs.com/certificate/verify/SEM6ZQH9",
    createdAt: "11-04-2025",
  },
];
