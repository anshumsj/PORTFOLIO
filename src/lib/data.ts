export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  frontend: ["React", "Next.js", "React Native", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
  databases: ["MongoDB", "PostgreSQL", "SQLite"],
  tools: ["Git", "GitHub", "Docker", "Postman", "n8n", "CI/CD"],
};

export const projects = [
  {
    id: 1,
    title: "Multi-Tenant Workspace Platform",
    description:
      "A multi-tenant project management platform that enables multiple organizations to securely manage workspaces, projects, tasks, and team members from a shared backend infrastructure.",
    problem:
      "Traditional project management systems can become difficult to scale when multiple organizations need isolated data, role-based permissions, and secure access within the same application.",
    highlights: [
      "Implemented workspace-level data isolation for multiple organizations",
      "Designed RBAC to control permissions across workspace members",
      "Built JWT-based authentication with protected API routes",
      "Created reusable middleware for authentication and workspace authorization",
      "Implemented workspace, project, task, and member management",
      "Structured backend APIs using modular controllers, services, and routes"
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    githubUrl: "https://github.com/anshumsj/Multi-Tenant-Workspace",
    liveUrl: "https://multi-tenant-workspace-b0vb1z7do.vercel.app"
  },
  {
    id: 2,
    title: "Webhook Event Observability Platform",
    description:
      "A multi-tenant webhook infrastructure platform for securely ingesting, processing, and monitoring webhook events with reliable background processing.",
    problem:
      "Webhook systems can lose events, process duplicates, or become difficult to debug when traffic spikes or downstream services fail.",
    highlights: [
      "Multi-tenant workspaces, projects, and custom webhook endpoints",
      "Secure webhook ingestion with endpoint secrets and request validation",
      "Persistent event storage with request and event correlation IDs",
      "Asynchronous background processing with queues and workers",
      "Automatic retries with exponential backoff and dead-letter handling",
      "Rate limiting, structured logging, and webhook delivery monitoring",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    githubUrl:
      "https://github.com/anshumsj/Webhook-Event-API-Observability-Platform",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Placement Tracker",
    description:
      "A React Native mobile application that helps students organize and manage their placement applications, interview rounds, deadlines, and preparation.",
    problem:
      "Students often manage placement applications, assessment dates, interview rounds, and preparation across spreadsheets and multiple platforms, making it easy to miss important updates.",
    highlights: [
      "Application management with search, filtering, and status tracking",
      "Dashboard with real-time application statistics and upcoming events",
      "Interview preparation checklist with progress tracking",
      "Assessment and interview reminders using Expo Notifications",
      "Firebase Authentication and Firestore data synchronization",
      "Reusable components with Context API and Expo Router navigation",
    ],
    tech: [
      "React Native",
      "Expo",
      "Expo Router",
      "Firebase",
      "Firestore",
      "Context API",
    ],
    githubUrl: "https://github.com/anshumsj/Placement_Tracker",
    liveUrl: null,
  },
  {
    id: 4,

    title: "Banking Management System",

    description:
      "A full-stack banking application that allows users to securely manage accounts, perform transactions, and track their financial activity through a protected backend.",

    problem:
      "Traditional banking workflows require users to manage account information and transactions across different systems, making it important to provide a centralized and secure platform for managing banking operations.",

    highlights: [
      "User authentication with JWT-based authentication and protected routes",

      "Secure password handling using bcrypt hashing and verification",

      "Account management with balance and transaction tracking",

      "Transaction processing with validation and authorization",

      "Middleware-based authentication and request protection",

      "RESTful APIs with modular routing, controllers, and database integration",

      "Persistent banking data stored and managed through MySQL"
    ],

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "bcrypt",
      "REST APIs"
    ],

    githubUrl: "https://github.com/anshumsj/BankingSystem",
    liveUrl: "https://example.com",
  }
];

export const experience = [
  {
    id: 1,
    role: "Automation Intern",
    company: "SalesifyMe",
    duration: "2023 - Present", // Adjust accordingly
    description: "Built automation workflows, integrated AI models, and optimized real-world business processes.",
    highlights: [
      "Designed and implemented automation workflows using n8n.",
      "Integrated Gemini API for AI-driven data processing.",
      "Developed robust API integrations for various third-party services.",
      "Streamlined workflow automation for real-world business processes.",
    ]
  }
];

export const stats = {
  dsa: "400+",
  projects: "10+",
  internships: "1",
  openSource: "50+"
};
