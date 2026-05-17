export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  features: string[];
  impact?: string;
  image: string;
}

const defaultProjects: Project[] = [
  {
    id: "amanah-halal",
    title: "Amanah Halal Engine",
    description: "Multi-role Flutter app for Slaughterhouse Admin, Slaughterman, and End Users to manage halal compliance workflows with AI-powered verification.",
    technologies: ["Flutter", "Firebase", "FastAPI", "AI/ML", "Computer Vision", "IoT"],
    date: "April 2025 - Present",
    features: [
      "AI-Powered Verification: animal detection, pose validation, knife sharpness check, Takbeer audio detection",
      "Edge + Cloud Architecture: Raspberry Pi-based edge devices with offline-first processing",
      "Slaughter Event System: event-driven workflow with audit-ready compliance records",
      "Identity Compliance: face recognition-based slaughterman authentication"
    ],
    impact: "Government-ready compliance tracking dashboard",
    image: "/project-amanah.jpg"
  },
  {
    id: "more-betters",
    title: "More Betters",
    description: "AI-powered self-improvement app with conversational AI providing career, financial, and personal guidance for underserved users.",
    technologies: ["Flutter", "Dart", "Bloc", "Firebase", "AI/ML", "REST APIs", "Figma"],
    date: "Sep 2024 - Present",
    features: [
      "Conversational AI for career, financial, and personal guidance",
      "Mobile-first design tailored for gig workers and mobile users",
      "Integrated professional, educational, financial, and health resources"
    ],
    impact: "Improved user engagement by 30% during early-stage product rollout",
    image: "/project-morebetters.jpg"
  },
  {
    id: "my-clone",
    title: "My Clone",
    description: "Queue, scan, and order management system with offline-first architecture and significant performance improvements.",
    technologies: ["Flutter", "Swift", "RealityKit", "Provider"],
    date: "May 2023 - Aug 2024",
    features: [
      "Queue, scan, and order management system with offline-first architecture",
      "Swift and RealityKit integration for enhanced scanning capabilities",
      "Optimized sync architecture for real-time data processing"
    ],
    impact: "Reduced scan processing time from 50 min to 5-7 min (86% improvement). Cut cloud costs by 98%.",
    image: "/project-myclone.jpg"
  },
  {
    id: "best-buy-mall",
    title: "Best Buy Mall",
    description: "E-commerce platform with order tracking, store management, and seamless product browsing for users and businesses.",
    technologies: ["Flutter", "Android Native", "Dart", "Provider", "Bitbucket"],
    date: "Jan 2023 - Apr 2023",
    features: [
      "Order tracking system for users and businesses",
      "Store management for remote store operations (pickup, dine-in, delivery)",
      "Search and registration for seamless product browsing and ordering"
    ],
    image: "/project-bestbuy.jpg"
  },
  {
    id: "gtc-app",
    title: "GTC App",
    description: "Task-based social engagement app enabling users to grow networks, follow channels, and complete activities for rewards.",
    technologies: ["Flutter", "Bloc", "Firebase"],
    date: "Jun 2022 - Jan 2023",
    features: [
      "User tasks and reward system",
      "Social integrations and real-time progress tracking",
      "Gamified interactions and reward-driven participation"
    ],
    impact: "Enhanced user retention and engagement",
    image: "/project-gtc.jpg"
  },
  {
    id: "rock-and-love",
    title: "Rock and Love",
    description: "Event management app for bands and fans to organize concerts and events with e-commerce capabilities.",
    technologies: ["Flutter", "Dart", "Bloc", "GitHub"],
    date: "Jun 2022 - Jan 2023",
    features: [
      "Event management for bands and fans",
      "Fan interaction and e-commerce with ticket/merchandise sales",
      "User-friendly interface with robust API integration and real-time updates"
    ],
    impact: "Boosted engagement by 40%",
    image: "/project-rocklove.jpg"
  }
];

const STORAGE_KEY = "portfolio-projects";

export function getProjects(): Project[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore
  }
  return defaultProjects;
}

export function saveProjects(projects: Project[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function addProject(project: Omit<Project, "id">): Project[] {
  const projects = getProjects();
  const newProject: Project = {
    ...project,
    id: `project-${Date.now()}`,
  };
  const updated = [...projects, newProject];
  saveProjects(updated);
  return updated;
}

export function updateProject(id: string, updates: Partial<Project>): Project[] {
  const projects = getProjects();
  const updated = projects.map((p) => (p.id === id ? { ...p, ...updates } : p));
  saveProjects(updated);
  return updated;
}

export function deleteProject(id: string): Project[] {
  const projects = getProjects();
  const updated = projects.filter((p) => p.id !== id);
  saveProjects(updated);
  return updated;
}

export function resetProjects(): Project[] {
  saveProjects(defaultProjects);
  return defaultProjects;
}
