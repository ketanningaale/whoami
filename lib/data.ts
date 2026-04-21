// ─────────────────────────────────────────────
//  lib/data.ts
//  Single source of truth for all portfolio content.
//  Edit this file to update anything on the site.
// ─────────────────────────────────────────────

// ── Types ────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  filename: string;       // displayed in ls -la listing
  size: string;           // symbolic file size
  modified: string;       // YYYY-MM
  description: string;
  role: string;
  stack: string[];
  status: "live" | "wip" | "archived";
  link?: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  dates: string;
  notes?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  handle: string;
  domain: string;
  oneLiner: string;
  bio: string;
  location: string;
  focus: string[];
  email: string;
  socials: { platform: string; url: string; label: string }[];
}

// ── Personal Info ─────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Ketann Ingaale",
  handle: "ketann",
  domain: "whoami.vercel.app",
  oneLiner: "Analytics Engineer & Data Scientist.",
  bio: "I transform complex data into insights that advance health, science, and human understanding. Currently building evidence-backed ML systems at Healf and completing an MSc in Data Science at the University of Southampton.",
  location: "London, UK",
  focus: [
    "Biomarker Analytics",
    "ML Systems",
    "Probabilistic Modelling",
    "LiDAR & Autonomous Vehicles",
  ],
  email: "ketanningaale@gmail.com",
  socials: [
    {
      platform: "github",
      url: "https://github.com/ketanningaale",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/ketann-ingaale",
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: "mailto:ketanningaale@gmail.com",
      label: "Email",
    },
  ],
};

// ── About paragraphs ──────────────────────────

export const aboutParagraphs: string[] = [
  "I'm drawn to problems that sit at the intersection of data rigour and real-world impact — whether that's decoding biomarker signals to personalise wellness, teaching a quadcopter to track objects autonomously, or modelling the probabilistic heartbeat of financial markets. The common thread is a belief that well-engineered data infrastructure is itself a form of scientific argument.",

  "My work style is deliberate and evidence-first. Before writing a line of code I want to understand the causal story: what phenomenon are we measuring, what confounders exist, and what decision will this analysis actually unlock? That framing shapes everything — from schema design in DBT to the choice of loss function in a PyTorch training loop. I've found that the most valuable analytics work is often the 20 lines of transformation logic that make a metric unambiguous, not the 200 lines of model architecture.",

  "Outside of work I'm reading about chaos theory, tinkering with LiDAR point-cloud visualisations, and occasionally breaking things in Raspberry Pi. I hold a patent for a blockchain-based grievance system (yes, really) and a distinction-level MSc dissertation on autonomous vehicle localisation. I'm always open to conversations about data, science, or anything in between — reach out.",
];

// ── Projects ──────────────────────────────────

export const projects: Project[] = [
  {
    id: "lidar-av",
    name: "LiDAR AV Localisation",
    filename: "LIDAR_AV_LOCALISATION.research",
    size: "38.4kb",
    modified: "2024-09",
    description:
      "MSc dissertation exploring LiDAR-based localisation of autonomous vehicles in GPS-denied environments using the KITTI-CARLA dataset. Compared K-Means, Convex Hull, MEC, and ICP algorithms, ultimately developing a mathematical model that reduced localisation errors by up to 95%.",
    role: "Sole Researcher",
    stack: ["Python", "LiDAR", "KITTI-CARLA", "ICP", "Mathematical Modelling"],
    status: "archived",
  },
  {
    id: "blockchain-grievance",
    name: "Blockchain Grievance System",
    filename: "BLOCKCHAIN_GRIEVANCE.app",
    size: "21.7kb",
    modified: "2020-08",
    description:
      "Decentralised grievance management system built on Hyperledger Fabric with hierarchical auto-escalation logic. Increased data security by 40% over traditional RDBMS approaches. Published in Springer (FICTA 2020) and awarded an Indian Patent (Publication No. 38/2019).",
    role: "Lead Developer",
    stack: ["Hyperledger Fabric", "Flask", "React", "PostgreSQL", "Blockchain"],
    status: "archived",
    link: "https://doi.org/10.1007/978-981-15-5788-0_20",
  },
  {
    id: "hmm-stocks",
    name: "HMM Stock Market Predictor",
    filename: "HMM_STOCK_PREDICTOR.model",
    size: "14.2kb",
    modified: "2024-05",
    description:
      "Investigated Hidden Markov Models for identifying market regimes and predicting stock movements. Designed a probabilistic framework for modelling bullish, bearish, and volatile state transitions using time-series financial data.",
    role: "Researcher & Developer",
    stack: ["Python", "HMM", "Probabilistic Modelling", "Time-Series Analysis"],
    status: "archived",
  },
  {
    id: "gdp-analysis",
    name: "Global Economic Trend Analysis",
    filename: "GLOBAL_GDP_ANALYSIS.viz",
    size: "9.8kb",
    modified: "2024-03",
    description:
      "Comprehensive analysis of GDP trends across six decades (1960–2022) and their geopolitical drivers. Advanced data visualisation of the rise of emerging markets and the impact of major global events on economic trajectories.",
    role: "Data Analyst",
    stack: ["Python", "Pandas", "Matplotlib", "Data Visualisation"],
    status: "archived",
  },
  {
    id: "forest-fire",
    name: "Forest Fire Simulation",
    filename: "FOREST_FIRE_SIM.py",
    size: "6.3kb",
    modified: "2024-02",
    description:
      "Interactive cellular-automaton simulation of fire spread with real-time parameter adjustment. Integrated percolation study modes and sensitivity analysis, revealing critical density thresholds and emergent non-linear behaviour rooted in chaos theory.",
    role: "Developer & Analyst",
    stack: ["Python", "Simulation", "Chaos Theory", "Percolation Theory"],
    status: "archived",
  },
  {
    id: "uav-quadcopter",
    name: "UAV Quadcopter with ML Tracking",
    filename: "UAV_ML_QUADCOPTER.hw",
    size: "18.6kb",
    modified: "2020-04",
    description:
      "Live-video surveillance UAV with autonomous object tracking. ML-based detection pipeline achieved a 20% accuracy improvement over the baseline. Flight control implemented on Raspberry Pi 3, with a 30% performance optimisation through hardware-software co-tuning.",
    role: "Hardware & ML Engineer",
    stack: ["Python", "Raspberry Pi", "Computer Vision", "Autonomous Systems"],
    status: "archived",
  },
];

// ── Experience ────────────────────────────────

export const experience: Experience[] = [
  {
    title: "Analytics Engineer",
    company: "Healf",
    dates: "Nov 2025 – Present",
    bullets: [
      "Designed Evidence Graph infrastructure connecting products to biological mechanisms and biomarker outcomes.",
      "Led applied ML research on wellness personalisation with adaptive recommendation algorithms.",
      "Initiated the Healf Outcomes Program — a real-world cohort study framework for evidence-backed product claims.",
    ],
  },
  {
    title: "Healthcare & Wellness Specialist",
    company: "The Boots Group",
    dates: "Feb 2025 – Nov 2025",
    bullets: [
      "Delivered evidence-based healthcare consultations spanning nutrition, supplementation, and lifestyle.",
      "Achieved GPhC-accredited Pharmacy NOS certification (Level 2).",
      "Tracked customer health trends and systematically optimised product recommendations.",
    ],
  },
  {
    title: "Associate Consultant",
    company: "Infosys",
    dates: "Jun 2022 – Aug 2023",
    bullets: [
      "Engineered data analytics and ML prototypes for enterprise decision systems.",
      "Conducted predictive modelling and time-series analysis on large-scale operational datasets.",
      "Delivered solutions using Python, SQL, Oracle CPQ, and cloud infrastructure.",
    ],
  },
  {
    title: "Product Development Assistant",
    company: "Leap Info Systems",
    dates: "Jun 2020 – Dec 2020",
    bullets: [
      "Gathered requirements and translated business challenges into technical specifications.",
      "Produced technical documentation and analytical reports in an agile startup environment.",
    ],
  },
];

// ── Education ─────────────────────────────────

export const education: Education[] = [
  {
    degree: "MSc Data Science",
    school: "University of Southampton",
    dates: "2023 – 2024",
    notes: [
      "Dissertation: Localisation of Autonomous Vehicles using LiDAR Sensor (77/100, Distinction)",
      "Southampton Presidential International Scholarship recipient",
      "Modules: Machine Learning, Deep Learning, Data Mining, Computational Finance",
    ],
  },
  {
    degree: "MBA — Finance",
    school: "Savitribai Phule Pune University",
    dates: "2020 – 2022",
    notes: [
      "Modules: Business Statistics, Quantitative Techniques, MIS, Data Analytics",
    ],
  },
  {
    degree: "B.E. Computer Engineering",
    school: "Savitribai Phule Pune University",
    dates: "2016 – 2020",
    notes: [
      "Modules: Machine Learning, AI & Robotics, Cloud Computing, HPC, Data Analytics",
    ],
  },
];

// ── Skills ────────────────────────────────────

export const skills: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "R", "SQL", "JavaScript", "TypeScript", "Flask", "React", "Bash"],
  },
  {
    category: "ML & AI",
    items: [
      "PyTorch", "TensorFlow", "Keras", "Geometric Learning",
      "SHAP", "LIME", "MLFlow", "Weights & Biases",
    ],
  },
  {
    category: "Data Engineering",
    items: ["DBT", "Apache Spark", "Databricks", "NumPy", "Pandas", "Jupyter", "Tableau", "Power BI"],
  },
  {
    category: "Computer Vision & NLP",
    items: ["OpenCV", "YOLO", "Detectron2", "Hugging Face", "NLTK", "RAG"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Git", "RESTful APIs"],
  },
  {
    category: "Mathematics",
    items: [
      "Statistics", "Probability Theory", "Chaos Theory",
      "Markov Chains", "Time-Series Analysis", "Linear Algebra",
    ],
  },
];

// ── Recommendations ───────────────────────────

export interface Recommendation {
  author: string;
  title: string;       // their job title
  company: string;
  relation: string;    // e.g. "Managed Ketann at Healf"
  date: string;        // e.g. "March 2025"
  text: string;
}

export const recommendations: Recommendation[] = [
  {
    author: "Luis Daniel Ibáñez",
    title: "Lecturer",
    company: "University of Southampton",
    relation: "Luis Daniel was Ketann's mentor",
    date: "December 2025",
    text: "I met Ketan in the Academic Year 2023/2024 when he was enrolled in the University of Southampton's MSc. Data Science programme that I lead. During that period, I also had the pleasure to act as examiner of his MSc. dissertation. Ketan was also one of 25 recipients of the Southampton Presidential International Scholarship, a competitive award for academically excellent international students to cover a fraction of tuition fees.\n\nThroughout the MSc program, Ketan demonstrated exceptional dedication and intellectual capacity. His dissertation \"Localisation of Autonomous Vehicles using LiDAR Sensor\" earned an impressive mark of 77/100, reflecting his deep understanding of the subject matter and his ability to engage with complex technical concepts.",
  },
];

// ── Recognitions ──────────────────────────────

export const recognitions: { label: string; detail: string }[] = [
  {
    label: "Conference Paper",
    detail: "Blockchain-Based Grievance Management System — Springer FICTA 2020",
  },
  {
    label: "Patent",
    detail: "Grievance Redressal System — Government of India Patent Office (No. 38/2019)",
  },
  {
    label: "Scholarship",
    detail: "Southampton Presidential International Scholarship, 2023",
  },
];
