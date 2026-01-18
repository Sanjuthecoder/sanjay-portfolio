/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Set to false to skip the splash screen with "Ashutosh" branding
};

//SEO Related settings
const seo = {
  title: "Sanjay's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sanjay Sharma Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Sanjay Sharma",
  logo_name: "Sanjay's Portfolio",
  nickname: "Sanjuthecoder",
  subTitle:
    "Software Engineer specializing in Java Full-stack, Spring Boot, and MERN. Experienced in building scalable applications like a Decentralized LMS.",
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
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux and Next.js",
        "⚡ Developing scalable backend services using Java Spring Boot and Microservices",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
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
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
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
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [],
    },
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
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company: "See Resume for Details",
          company_url: "",
          logo_path: "experience.svg",
          duration: "",
          location: "",
          description:
            "Contributed to various initiatives. (Please update with specific details from resume)",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "PW Skills Certification",
      subtitle: "- PW Skills",
      logo_path: "education.svg", // Placeholder
      certificate_link: "",
      alt_name: "PW Skills",
      color_code: "#8C151599",
    },
    {
      title: "Industrial Training on Cloud & IOTs",
      subtitle: "- Cloudcod",
      logo_path: "education.svg", // Placeholder
      certificate_link: "",
      alt_name: "Cloudcod",
      color_code: "#00000099",
    },
    {
      title: "Salesforce Certification",
      subtitle: "- Salesforce",
      logo_path: "education.svg", // Placeholder
      certificate_link: "",
      alt_name: "Salesforce",
      color_code: "#0C9D5899",
    },
    // Removed third certification to reduce rows
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Java Full-stack, MERN, and more.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@sanjay", // Placeholder or remove deeply
    avatar_image_path: "animated_ashutosh.png",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dausa, Rajasthan, India",
    locality: "Dausa",
    country: "India",
    region: "Rajasthan",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6376153144",
  },
};

const projects = {
  data: [
    {
      id: "lms",
      name: "Decentralized Learning Management System",
      description:
        "Engineered a highly scalable, microservices-based learning marketplace. Developed robust backend services with Java and Spring Boot, integrating a dual-database approach (MySQL and MongoDB). Implemented secure user authentication and a responsive React.js frontend.",
      url: "https://github.com/Sanjuthecoder",
      createdAt: "2024-01-01T00:00:00Z",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos-spring-icon",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "chat-app",
      name: "Real-time Chatting App",
      description:
        "Engineered a messaging solution with Socket.io for real-time communication and data synchronization. Integrated interactive frontend components with a Node.js backend for low-latency messaging.",
      url: "https://github.com/Sanjuthecoder",
      createdAt: "2023-11-01T00:00:00Z",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Socket.io",
          iconifyClass: "logos-javascript", // Placeholder
        },
      ],
    },
    {
      id: "tic-tac-toe",
      name: "Tic Tac Toe",
      description:
        "A classic Tic Tac Toe game built with React. Features a clean UI and interactive gameplay.",
      url: "https://github.com/Sanjuthecoder",
      createdAt: "2023-10-01T00:00:00Z",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
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
