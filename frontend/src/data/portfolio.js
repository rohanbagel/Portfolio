// Portfolio Data - Rohan Benegal

export const personalInfo = {
  name: "Rohan Benegal",
  role: "Third Year Computer Engineering Student",
  college: "Fr. Conceicao Rodrigues College of Engineering (Fr. CRCE)",
  tagline: "6× Hackathon Winner | 3 National-Level Victories",
  bio: "A passionate computer engineering student with a drive for innovation and problem-solving. With multiple hackathon victories under my belt, I specialize in building AI-powered solutions, full-stack applications, and IoT systems that address real-world challenges.",
  location: "Mumbai, India",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/rohanbenegal/",
  github: "https://github.com/rohanbenegal",
  instagram: "https://instagram.com/rohanbenegal",
  email: "rohanbenegal@email.com",
};

export const skills = {
  languages: ["Python", "Java", "HTML", "CSS", "JavaScript", "SQL"],
  technologies: [
    "Django",
    "ReactJS",
    "Express.js",
    "REST APIs",
    "PostgreSQL",
    "Supabase",
    "MongoDB",
    "Node.js",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
    "Arduino",
  ],
  concepts: [
    "Machine Learning",
    "Artificial Intelligence",
    "Backend Development",
    "Database Systems",
    "Web Development",
    "IoT",
  ],
};

export const projects = [
  {
    title: "NagarSetu",
    description:
      "A comprehensive civic engagement platform bridging the gap between citizens and local authorities. Features real-time issue reporting, resolution tracking, and transparent communication.",
    tech: ["Python", "Machine Learning", "IoT", "Arduino", "REST APIs"],
    highlights: [
      "Real-time environmental monitoring",
      "AI-powered analytics",
      "IoT sensor integration",
    ],
    links: {
      github: "https://github.com/rohanbagel/Hacknova_2026",
    },
  },
  {
    title: "LeetCode Progress Tracker",
    description:
      "Analytics tracker built with Next.js and Supabase for tracking coding progress, visualizing statistics, and setting goals for competitive programming improvement.",
    tech: ["Next.js", "Supabase", "JavaScript", "PostgreSQL"],
    highlights: [
      "Progress visualization",
      "Goal tracking",
      "Statistics dashboard",
    ],
    links: {
      live: "https://leetcode-multi-track.vercel.app/",
      github: "https://github.com/rohanbagel/Leetcode_Tracker",
    },
  },
  {
    title: "F1 Race Prediction Model",
    description:
      "Machine learning-based race podium predictor using historical F1 data. Analyzes driver performance, track conditions, and team dynamics to forecast race outcomes.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    highlights: [
      "Historical data analysis",
      "Predictive modeling",
      "Performance metrics",
    ],
    links: {
      github: "https://github.com/rohanbagel/F1-Race-Prediction",
    },
  },
  {
    title: "DevLMS",
    description:
      "Full Learning Management System with AI guidance, real-time coding battles using WebSockets, and comprehensive course management for developers.",
    tech: ["ReactJS", "Express.js", "WebSockets", "PostgreSQL", "AI"],
    highlights: [
      "AI-powered guidance",
      "Real-time coding battles",
      "Complete LMS features",
    ],
    links: {
      live: "https://devlms.onrender.com",
      github: "https://github.com/rohanbagel/DevLMS-MEGAHACKS",
    },
  },
];

export const achievements = [
  {
    title: "1st Place - SPIT Hackfusion 2026",
    level: "National Level",
    highlight: true,
  },
  {
    title: "1st Place - BVDU Hacknova 2026",
    level: "National Level",
    highlight: true,
  },
  {
    title: "SIH 2025 Winner",
    level: "National Level",
    highlight: true,
  },
  {
    title: "SIH 2024 Finalist",
    level: "National Level",
    highlight: false,
  },
  {
    title: "2nd Runner-Up - CodeCrafters 2.0",
    level: "Inter-College",
    highlight: false,
  },
  {
    title: "Runner-Up - VCET Coherence",
    level: "Inter-College",
    highlight: false,
  },
  {
    title: "2nd Runner-Up - HackQuinox",
    level: "Inter-College",
    highlight: false,
  },
];

export const stats = {
  hackathonsWon: 6,
  nationalWins: 3,
  projectsBuilt: 10,
  techStack: 15,
};
