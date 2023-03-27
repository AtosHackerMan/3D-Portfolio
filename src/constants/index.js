import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  figma,
  banana,
  spark,
  zeeto,
  noktos,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  mysql,
  python,
  photoshop,
  ilustrator,
  reactNative
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
    id: "tech",
    title: "Tech stack",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "MySQL",
    icon: mysql,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
];

const technologies2 = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
]

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Spark",
    icon: spark,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Zeeto",
    icon: zeeto,
    iconBg: "#E6DEDD",
    date: "2020 - 2022",
    points: [
      "Designing and creating user-centered interfaces for web and mobile applications using various design tools and software.",
      "Implementing responsive design and ensuring cross-browser compatibility while maintaining consistency with brand guidelines.",
      "Conducting user research, creating user personas, and developing user flows to ensure a seamless user experience.",
      "Creating wireframes, mockups, and prototypes to present design concepts and iterate designs based on user feedback.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Noktos",
    icon: noktos,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Developing and maintaining web applications using React.js, Redux, and Three.js to deliver high-quality products.",
      "Integrating complex financial data to provide real-time insights to customers using RESTful APIs and WebSockets.",
      "Creating and maintaining interactive and dynamic 3D visualizations of financial data using Three.js.",
      "mplementing responsive design and ensuring cross-browser compatibility while adhering to company branding and design standards.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Punto BANANA",
    icon: banana,
    iconBg: "#E6DEDD",
    date: "2017 - 2019",
    points: [
      "Developing and maintaining responsive and user-friendly web applications using HTML, CSS, JavaScript, and modern front-end frameworks such as React and Angular.",
      "Creating and optimizing web page layouts, animations, and interactions to enhance user engagement and increase conversion rates.",
      "Maintaining and improving the performance of web applications through best practices such as lazy loading, code splitting, and caching.",
      "Collaborating with cross-functional teams including designers, product managers, and back-end developers to create high-quality products that meet user requirements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hector is a pleasure to work with and a true professional. He was able to understand our vision and bring it to life with his exceptional web development skills.",
    name: "Mileny Paramo",
    designation: "Marketing Manager",
    company: "Victoria Secret",
    image: "https://firebasestorage.googleapis.com/v0/b/punto-banana.appspot.com/o/Portfolio%2FMileny.jpg?alt=media&token=0f971fa5-ad7d-4195-9e62-f427b43f11fc",
  },
  {
    testimonial:
      "I had the pleasure of working with Hector on several web development projects, and I can attest to his exceptional skills and professionalism.",
    name: "Andres Aguirre",
    designation: "Web Developer",
    company: "Oracle",
    image: "https://firebasestorage.googleapis.com/v0/b/punto-banana.appspot.com/o/Portfolio%2FAndres.jpg?alt=media&token=50740c79-f2d6-43b2-9241-36622b198d92",
  },
  {
    testimonial:
      "Hector is a true asset to any team. His strong work ethic, attention to detail, and excellent communication skills make him a valuable partner in any project.",
    name: "Brando Zermeño",
    designation: "Consultant",
    company: "Michael Page",
    image: "https://firebasestorage.googleapis.com/v0/b/punto-banana.appspot.com/o/Portfolio%2FBrando.jpg?alt=media&token=619c166d-3970-4ba5-b88a-355c5b0942cf",
  },
];

const projects = [
  {
    name: "Noktos",
    description:
      "An online platform designed to streamline the process of booking flights and hotels for corporate travel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/punto-banana.appspot.com/o/Portfolio%2FNoktos.png?alt=media&token=639b410c-a297-4914-81c5-bb808e432cbb",
    source_code_link: "https://noktos.com",
  },
  {
    name: "The Savvy Sampler",
    description:
      "Online platform that provides free samples to users in exchange for completing surveys, collecting and monetizing their data for market research purposes",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/punto-banana.appspot.com/o/Portfolio%2FThe%20savvy%20sampler.png?alt=media&token=27471686-e4a3-42a2-8c68-26533f67c948",
    source_code_link: "https://thesavvysampler.com/",
  },
  {
    name: "EM Real State",
    description:
      "Online real estate agency that enables customers to search rental or sale listings of various properties based on their preferred location, price range, or property type",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/punto-banana.appspot.com/o/Portfolio%2Fem%20inmobiliaria.png?alt=media&token=dd1c0edb-6192-4efa-9f1e-eab5d9fba2e8",
    source_code_link: "https://inmoby-dick.webflow.io/",
  },
];

export { services, technologies, experiences, testimonials, projects, technologies2 };