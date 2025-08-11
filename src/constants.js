// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";


// Experience Section Logo's
import briscoveyLogo from "./assets/company_logo/briskCovey logo.png";
import volumeTreeLogo from "./assets/company_logo/volumetree_sm_logo.png";

// Education Section Logo's
import paragLogo from "./assets/education_logo/parag-logo.png";
import jnuLogo from "./assets/education_logo/jnu-logo.png";
import upGradLogo from "./assets/education_logo/Upgrad-logo.jpg";

// Project Section Logo's
import gimmel from "./assets/work_logo/gimmel.svg";
import jobSeeking from "./assets/work_logo/job-seekeing.jpg";

// Certificate Section
import certificateLogo from "./assets/Certificate_img/certificate.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [{ name: "JavaScript", logo: javascriptLogo }],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: briscoveyLogo,
    role: "Frontend Developer",
    company: "BriskCovey Technologies Pvt. Ltd.",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the React.Js and Next.Js stack, handling frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: volumeTreeLogo,
    role: "Fullstack Engineer",
    company: "Volumetree ",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: ["ReactJS", "Redux", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
];

export const education = [
  {
    id: 0,
    img: jnuLogo,
    school: "Jaipur National University, Jaipur",
    date: "Sept 2020 - Aug 2024",
    // grade: "65%",
    desc: "I completed my Bachelor of Technology (B.Tech) in Computer Science from Jaipur National University. During my academic journey, I gained in-depth knowledge across a wide range of core subjects, including Data Structures and Algorithms, Web Development, Object-Oriented Programming, and Database Management Systems. My coursework and projects provided practical exposure to real-world problem-solving and helped strengthen my foundation in software development and modern computing technologies.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: upGradLogo,
    school: "upGrad",
    date: "Feb 2024 - Aug 2024",
    // grade: "A+",
    desc: "I completed a comprehensive Full Stack Development program through upGrad, with a strong focus on the MERN Stack — including JavaScript, React.js, HTML5, CSS3, MongoDB, Express.js, and Node.js. The program provided extensive hands-on experience in building dynamic and responsive web applications, while strengthening my understanding of both frontend and backend development workflows.",
    degree: "Full Stack Development with MERN Stack",
  },
  {
    id: 2,
    img: paragLogo,
    school: "Parag Public School, Jaipur",
    date: "Apr 2018 - March 2019",
    // grade: "71%",
    desc: "I completed my Class 12 education at Parag Public School, Jaipur, affiliated with the Rajasthan Board of Secondary Education (RBSE), with a specialization in Physics, Chemistry, and Mathematics (PCM). This academic phase helped me strengthen my analytical and problem-solving abilities, laying the groundwork for my future pursuits in technology and development.",
    degree: "RBSE(XII) - PCM ",
  },
  {
    id: 3,
    img: paragLogo,
    school: "Parag Public School, Jaipur",
    date: "Apr 2016 - March 2017",
    // grade: "67.5%",
    desc: "I completed my Class 10 education at Parag Public School, located in Jaipur, under the affiliation of the Rajasthan Board of Secondary Education (RBSE). During this time, I built a strong academic foundation and developed essential skills that have supported my continued learning and growth.",
    degree: "RBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Gimmel – Learning & Teaching Platform",
    description:
      "An educational platform built with Next.js and React.js that facilitates learning through video-based content and interactive exercises. The app integrates the YouTube API to fetch and display educational videos, with features like category-wise browsing, video search, suggested content, user interest tracking, and video requests. It also includes modules for homework and test generation, downloadable PDFs, profile updates, Google authentication, and role-based access for teachers and learners.",
    image: gimmel,
    tags: [
      "HTML",
      "CSS",
      "Next.js",
      "React.js",
      "JavaScript",
      "YouTube API",
      "Google Auth",
    ],
    github: "https://github.com/dineshkuma1234/Gimmel",
    webapp: "https://gimmel.one/",
  },
  {
    id: 1,
    title: "Job-Seeking Application",
    description:
      "A MERN stack job portal designed to help users search and apply for jobs with ease. The application includes features such as user authentication, role-based dashboards for job seekers and recruiters, resume uploads, job posting, application tracking, and profile management. It provides a smooth and responsive UI built with React.js, and efficiently handles real-time data with Node.js and MongoDB on the backend.",
    image: jobSeeking,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "http://github.com/dineshkuma1234/JOB-SEEKING-APPLICATION",
    webapp: "https://job-seeker-client.vercel.app",
  },
];

export const certificate = [
  {
    id: 0,
    title: "Full Stack Development",
    description:
      "Certified Full Stack Developer with hands-on experience in building responsive front-end interfaces and robust back-end systems using technologies like React, Node.js, and MongoDB. Proficient in developing complete web applications from concept to deployment.",
    image: certificateLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  },
];
