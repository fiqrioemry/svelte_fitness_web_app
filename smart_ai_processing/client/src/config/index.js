export const locations = [
  "jakarta",
  "surabaya",
  "medan",
  "bandung",
  "semarang",
  "jogjakarta",
];

export const skills = [
  // Frontend Development
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Angular",
  "SASS/SCSS",
  "Tailwind CSS",
  "Bootstrap",

  // Backend Development
  "Node.js",
  "Express.js",
  "Go (Golang)",
  "Python",
  "Django",
  "Flask",
  "Ruby on Rails",
  "PHP",
  "Laravel",
  "Spring Boot (Java)",

  // Database
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Firebase",
  "Redis",

  // DevOps & Cloud
  "Docker",
  "Kubernetes",
  "AWS",
  "Google Cloud",
  "Azure",
  "Terraform",
  "CI/CD",

  // Mobile Development
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",

  // Testing
  "Jest",
  "Mocha",
  "Cypress",
  "Playwright",
  "Postman",

  // Emerging Technologies
  "Blockchain",
  "Solidity",
  "Web3.js",

  // Tools & Misc
  "Git",
  "GitHub",
  "GitLab",
  "VS Code",
  "Linux",
  "REST API",
  "GraphQL",
];

export const navigationMenu = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "jobs",
    path: "/jobs",
  },
  {
    name: "companies",
    path: "/companies",
  },
];

export const jobTitle = [
  "Data Analyst",
  "Software Engineer",
  "Project Manager",
  "UX/UI Designer",
  "DevOps Engineer",
  "Cybersecurity Specialist",
  "Machine Learning Engineer",
  "Cloud Architect",
  "Full Stack Developer",
  "Product Manager",
  "Business Intelligence Analyst",
  "Mobile App Developer",
  "Database Administrator",
  "AI Research Scientist",
  "Network Engineer",
  "Frontend Developer",
];

export const workingType = ["freelance", "fulltime", "contract", "internship"];

export const experience = ["fresh graduate", "0-5 tahun", "5-10 tahun"];

export const loginForm = {
  email: "",
  password: "",
};

export const loginControl = [
  {
    name: "email",
    type: "email",
    label: "Email address",
    placeholder: "Enter your email address",
    component: "input",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    component: "input",
  },
];

export const seekerRegisterForm = {
  name: "",
  email: "",
  password: "",
};

export const seekerRegisterControl = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
    component: "input",
  },

  {
    name: "name",
    label: "Fullname",
    type: "text",
    placeholder: "Enter your fullname",
    component: "input",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    component: "input",
  },
];

export const seekerProfileForm = {
  name: "",
  email: "",
  gender: "",
  avatar: "",
  birthday: "",
  bio: "",
  resume: "",
  skills: [],
};

export const employerRegisterForm = {
  name: "",
  email: "",
  location: "",
  password: "",
};

export const employerRegisterControl = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter PIC / company email",
    component: "input",
  },

  {
    name: "password",
    label: "Password",
    type: "Password",
    placeholder: "Enter your password",
    component: "input",
  },

  {
    name: "name",
    label: "Company name",
    type: "text",
    placeholder: "Enter company name",
    component: "input",
  },

  {
    name: "location",
    label: "Head office Location",
    type: "select",
    component: "select",
    placeholder: "Select Location",
    options: locations,
  },
];

export const filterForm = {
  title: "",
  location: "",
  type: "",
  experience: "",
};

export const seekerNavMenu = [
  {
    title: "settings",
    href: "/seeker/settings",
  },
  {
    title: "applications",
    href: "/seeker/applications",
  },
];

export const filterControl = [
  {
    name: "title",
    label: "job title",
    type: "text",
    component: "filter",
    placeholder: "Select job title",
    options: experience,
  },

  {
    name: "type",
    label: "type",
    type: "select",
    component: "filter",
    placeholder: "Select working type",
    options: workingType,
  },
  {
    name: "experience",
    label: "experience",
    type: "select",
    component: "filter",
    placeholder: "Select experience",
    options: experience,
  },
  {
    type: "select",
    name: "location",
    label: "location",
    component: "filter",
    placeholder: "Select Location",
    options: locations,
  },
];

export const seekerProfileControl = [
  {
    name: "resume",
    label: "Resume URL",
    type: "text",
    component: "input",
    placeholder: "Enter resume URL",
  },
  {
    name: "skills",
    label: "Skills",
    type: "select",
    component: "select",
    placeholder: "Select your skills",
    options: skills,
  },
];

export const updateProfileForm = {
  name: "",
  bio: "",
  gender: "",
  birthday: "",
  avatar: "",
  resume: "",
  experience: [],
  skills: [],
};

export const experienceForm = {
  title: "",
  company: "",
  start_date: "",
  end_date: "",
};

export const experienceControl = [
  {
    name: "title",
    label: "Position",
    type: "text",
    component: "input",
    placeholder: "Enter position",
  },

  {
    name: "company",
    label: "Company name",
    type: "text",
    component: "input",
    placeholder: "Enter company name",
  },
  {
    name: "start_date",
    label: "start",
    type: "date",
    component: "date",
  },
  {
    name: "end_date",
    label: "end",
    type: "date",
    component: "date",
  },
];

export const updateSkillsControl = [
  {
    name: "skills",
    label: "skills",
    type: "select",
    component: "select",
    options: skills,
  },
];

export const updateProfileControl = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    component: "input",
    placeholder: "Enter your full name",
  },

  {
    name: "gender",
    label: "Gender",
    type: "select",
    component: "select",
    placeholder: "Select gender",
    options: ["Male", "Female"],
  },
  {
    name: "birthday",
    label: "Birthday",
    type: "date",
    component: "date",
    placeholder: "Select your birthday",
  },
  {
    name: "bio",
    label: "bio",
    type: "textarea",
    component: "textarea",
    placeholder: "Tell something about yourself",
  },
];
