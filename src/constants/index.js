import {
  mobile,
  backend,
  web,
  jira,
  conf,
  uc4,
  javascript,
  abap,
  linux,
  nodejs,
  fiori,
  git,
  iu,
  dohle,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "SAP ABAP Developer",
    icon: backend,
  },
  {
    title: "SAP Fiori Developer",
    icon: mobile,
  },
  {
    title: "aspiring Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "ABAP",
    icon: abap,
  },
  {
    name: "Fiori",
    icon: fiori,
  },
  {
    name: "UC4",
    icon: uc4,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "conf",
    icon: conf,
  },
];

const experiences = [
  {
    title: "Training: Fachinformatiker Systemintegration",
    company_name: "Dohle Handelsgruppe",
    icon: dohle,
    iconBg: "#E6DEDD",
    date: "Aug 2014 - June 2017",
    points: [
      "Is a learning role which takes 3 years, partly in school and in business. Ends with a final project which is presented in front of a committee.",
      "Plan, design and configure information technology systems.",
      "Setting up networks and monitoring solutions.",
      "Administration of Windows and Linux clients and servers.",
      "Learn basics concepts of: it-security, programming, sql, networks, operating systems, protocols (tcp/udp) and business administration",
      "Analyze customer requirements and participate in 1st/2nd level support.",
    ],
  },
  {
    title: "Linux System Administrator",
    company_name: "Dohle Handelsgruppe",
    icon: dohle,
    iconBg: "#E6DEDD",
    date: "June 2017 - Oct 2021",
    points: [
      "Developing and maintaining scripts using bash and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and developers to automate business processes.",
      "Administration and monitoring of software and hardware components.",
      "Administration of company wide atlassian suite namely jira and confluence.",
      "2nd/3rd level support.",
    ],
  },
  {
    title: "Distance Learning: Business Informatics B.Sc.",
    company_name: "IU Internationale Hochschule",
    icon: iu,
    iconBg: "#E6DEDD",
    date: "June 2017 - Present",
    points: [
      "Focus is on practice-oriented knowledge and skills in the fields of Business Administration and Computer Science..",
      "Includes core subjects such as applied Computer Science, Software Engineering, Quality Assurance, Cost and performance accounting.",
    ],
  },
  {
    title: "SAP Developer",
    company_name: "Dohle Handelsgruppe",
    icon: dohle,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Developing and maintaining SAP reports using ABAP (OO).",
      "Developing and maintaining business apps using SAP Fiori and other related technologies.",
      "Implementing and maintaining Job management using UC4.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description: "3D Website that displays my CV, Skillset and Projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
