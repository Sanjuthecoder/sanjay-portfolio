/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Set to false to skip the splash screen
};

//SEO Related settings
const seo = {
  title: "Sanjay's Portfolio | AI & Full-Stack Engineer",
  description:
    "A visionary Software Engineer specializing in Generative AI, Microservices, and Web3. Building the future of education, events, and broadcast technology.",
  og: {
    title: "Sanjay Sharma Portfolio",
    type: "website",
    url: "https://sanjayportfolio1919.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Sanjay Sharma",
  logo_name: "Sanjay's Portfolio",
  nickname: "Sanjuthecoder",
  subTitle:
    "Full-Stack Architect & AI Innovator. Expert in Java Microservices (Spring Boot), Generative AI (Gemini/OpenAI), and Decentralized Systems (Web3/IPFS). Transforming complex problems into high-performance digital experiences.",
  resumeLink: "/SanjaySharmaResume.pdf",
  portfolio_repository: "https://github.com/Sanjuthecoder",
  githubProfile: "https://github.com/Sanjuthecoder",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Sanjuthecoder",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sanjay-sharma-29a18b31a/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
];

const skills = {
  data: [
    {
      title: "AI & Generative Innovation",
      fileName: "DesignImg",
      skills: [
        "⚡ Developing autonomous agents using Google Gemini 2.5 Flash and OpenAI",
        "⚡ Integrating real-time Text-to-Speech (TTS) with ElevenLabs for broadcast-quality audio",
        "⚡ Engineering adaptive learning paths using xAPI telemetry and behavioral analytics",
      ],
      softwareSkills: [
        {
          skillName: "Gemini AI",
          fontAwesomeClassname: "simple-icons:googlegemini",
          style: { color: "#8E75C2" },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: { color: "#412991" },
        },
        {
          skillName: "ElevenLabs",
          fontAwesomeClassname: "simple-icons:elevenlabs",
          style: { color: "#141619" },
        },
      ],
    },
    {
      title: "Full Stack & Microservices",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architecting scalable Microservices with Spring Boot, Eureka, and Cloud Gateway",
        "⚡ Building high-performance frontends with Next.js 16, React 18, and TypeScript",
        "⚡ Implementing decentralized storage solutions using Web3 (IPFS/Pinata)",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: { color: "#E34F26" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: { color: "#3ECF8E" },
        },
        {
          skillName: "IPFS",
          fontAwesomeClassname: "simple-icons:ipfs",
          style: { color: "#65C2CB" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#38B2AC" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: { color: "#F79F1B" },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: { color: "#2EC866" },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CDAC-ACTS",
      subtitle: "Post Graduate Diploma in Advanced Computing",
      logo_path: "education.svg",
      alt_name: "CDAC",
      duration: "Sept 2025 - Present",
      descriptions: ["⚡ Advanced computing and software development."],
      website_link: "",
    },
    {
      title: "IIEST, Shibpur",
      subtitle: "Bachelor of Technology in Electrical Engineering",
      logo_path: "education.svg",
      alt_name: "IIEST",
      duration: "Dec 2021 - May 2025",
      descriptions: [
        "⚡ Studied Electrical Engineering basics and advanced topics.",
      ],
      website_link: "",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I specialize in building complex, end-to-end systems that bridge the gap between AI research and production-grade applications. From decentralized education platforms to real-time broadcast AI, I deliver high-impact solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "UI/UX Designer",
          company: "House Of MarkTech",
          company_url: "",
          logo_path: "experience.svg",
          duration: "Dec 2024 - Jan 2025",
          location: "",
          description:
            "Designed tailored user interfaces for education, travel, and business sectors using Figma and Photoshop. Translated complex client requirements into high-fidelity wireframes and intuitive navigation flows.",
          color: "#000000",
        },
        {
          title: "Frontend Developer",
          company: "Zerton Education Tech",
          company_url: "",
          logo_path: "experience.svg",
          duration: "Oct 2023 - Nov 2023",
          location: "",
          description:
            "Developed the frontend architecture for an audio-book application using React.js and CSS. Integrated interactive components with Node.js to facilitate seamless audio streaming for users.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Engineering Masterpieces",
  description:
    "A showcase of high-impact applications where I've pushed the boundaries of Generative AI, Microservices, and Web3. Each project represents a leap in solving real-world challenges with modern engineering.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Insights into AI, EdTech, and Scalable Architectures.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ai-commentary-tech",
      name: "Real-time AI Commentary Architecture",
      createdAt: "2024-03-01T00:00:00Z",
      description:
        "Technical breakdown of zero-latency dual audio systems in broadcast AI.",
      url: "https://medium.com/@sanjay",
    },
  ],
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "PW Skills Certification",
      subtitle: "- PW Skills",
      logo_path: "education.svg",
      certificate_link: "",
      alt_name: "PW Skills",
      color_code: "#8C151599",
    },
    {
      title: "Salesforce Certification",
      subtitle: "- Salesforce",
      logo_path: "education.svg",
      certificate_link: "",
      alt_name: "Salesforce",
      color_code: "#0C9D5899",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Hire the Innovator",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Ready to build the next generation of AI-powered applications? Let's discuss how my expertise in Microservices and Generative AI can accelerate your product roadmap.",
  },
  addressSection: {
    title: "Location",
    subtitle: "Dausa, Rajasthan, India",
    locality: "Dausa",
    country: "India",
    region: "Rajasthan",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Direct Line",
    subtitle: "+91 6376153144",
  },
};

const projects = {
  data: [
    {
      id: "ai-commentator",
      name: "🏏 AI Cricket Commentator",
      description:
        "Transforming matches into broadcast experiences! Built a Chrome Extension & Spring Boot backend using Google Gemini 2.5 Flash and ElevenLabs Flash V2.5. Features context-aware commentary, zero-latency dual audio (Web Speech + high-quality MP3), and synthesized dynamic crowd noise via Web Audio API.",
      url: "https://github.com/Sanjuthecoder",
      createdAt: "2024-04-01T00:00:00Z",
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Spring Boot", iconifyClass: "logos-spring-icon" },
        { name: "Gemini AI", iconifyClass: "simple-icons:googlegemini" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
      ],
    },
    {
      id: "delearn-ai",
      name: "🧠 DeLearn-AI (Smart-DLMS)",
      description:
        "A decentralized Learning Management System (LMS) democratizing education. Architected with Spring Boot Microservices (Eureka, Gateway), Web3 storage (IPFS), and a Generative AI Tutor (Gemini). Features secure JWT RBAC and a high-performance React dashboard.",
      url: "https://github.com/Sanjuthecoder",
      createdAt: "2024-02-01T00:00:00Z",
      languages: [
        { name: "Microservices", iconifyClass: "logos-spring-icon" },
        { name: "React", iconifyClass: "logos-react" },
        { name: "IPFS", iconifyClass: "simple-icons:ipfs" },
        { name: "MongoDB", iconifyClass: "logos-mongodb" },
      ],
    },
    {
      id: "hostmyevent",
      name: "📅 HostMyEvent",
      description:
        "Premium full-stack event management platform. Built with Spring Boot 3.x and React 18+ (TypeScript/Tailwind). Features role-based access, dynamic event discovery, real-time engagement, and multi-step event creation with media uploads via Pinata (IPFS).",
      url: "https://github.com/Sanjuthecoder",
      createdAt: "2024-01-01T00:00:00Z",
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "TypeScript", iconifyClass: "logos-typescript-icon" },
        { name: "MySQL", iconifyClass: "logos-mysql" },
        { name: "Tailwind", iconifyClass: "logos-tailwindcss-icon" },
      ],
    },
    {
      id: "jaiman-builders",
      name: "🏗️ Jaiman Builders CMS",
      description:
        "High-performance dynamic web platform for architecture firms. Built with Next.js 16 and Supabase (PostgreSQL). Features an immersive public portfolio, private Admin dashboard for content management, automated lead capture, and Edge Middleware security.",
      url: "https://github.com/Sanjuthecoder",
      createdAt: "2023-12-01T00:00:00Z",
      languages: [
        { name: "Next.js", iconifyClass: "logos-nextjs-icon" },
        { name: "Supabase", iconifyClass: "logos-supabase-icon" },
        { name: "Tailwind", iconifyClass: "logos-tailwindcss-icon" },
      ],
    },
    {
      id: "smartlms-adaptive",
      name: "🎓 SmartLMS: Adaptive AI",
      description:
        "Next-gen EdTech platform leveraging xAPI telemetry for personalized learning. Monitors student interaction (hesitation, cognitive load) in real-time to adjust curriculum dynamically. Built with Node.js/Express, MongoDB, and a sleek Glassmorphism UI.",
      url: "https://github.com/Sanjuthecoder",
      createdAt: "2023-10-01T00:00:00Z",
      languages: [
        { name: "Node.js", iconifyClass: "logos-nodejs-icon" },
        { name: "Express", iconifyClass: "logos-express" },
        { name: "xAPI", iconifyClass: "logos-javascript" },
        { name: "MongoDB", iconifyClass: "logos-mongodb" },
      ],
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  projects,
};
