import {
    Code2,
    Brain,
    Database,
    Cloud,
    Terminal,
    Cpu
} from 'lucide-react';

export const profile = {
    name: "Bandaru Venkata Satya Uday",
    role: "AI Engineer",
    tagline: "Building intelligent systems with Generative AI & Deep Learning",
    email: "satyauday775@gmail.com",
    social: {
        linkedin: "https://linkedin.com/in/satyaudaybandaru",
        github: "https://github.com/satyaudaybandaru",
        phone: "+91 7036624356"
    },
    resume: "https://drive.google.com/file/d/1vZT-DCgADjNec6frHo37zxDGT-S4124X/view?usp=sharing"
};

export const skills = [
    {
        category: "Languages",
        items: ["Python", "JavaScript", "SQL"],
        icon: Code2
    },
    {
        category: "AI & ML Frameworks",
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "Pandas", "Gemini API"],
        icon: Brain
    },
    {
        category: "Web & Backend",
        items: ["React", "FastAPI", "Bootstrap", "Tailwind CSS"],
        icon: Terminal
    },
    {
        category: "Databases & Tools",
        items: ["MySQL", "MongoDB", "Git", "Docker"],
        icon: Database
    },
    {
        category: "Cloud & Platforms",
        items: ["Google Cloud (Compute Engine, Cloud Run)", "Linux", "Windows"],
        icon: Cloud
    }
];

export const experience = [];

export const education = [
    {
        institution: "Centurion University of Technology and Management",
        degree: "B.Tech (CSE)",
        period: "2021 - 2025",
        score: "GPA: 9.07 / 10"
    }
];

export const projects = [
    {
        title: "Computer Retail & Support Online Platform",
        tech: ["React", "Bootstrap", "FastAPI", "MongoDB", "Google Cloud"],
        description: "Developed and deployed a full-stack web application. Automated CI/CD via GitHub Cloud Build and hosted on Google Cloud Run.",
        category: "Full Stack"
    },
    {
        title: "RAG Based Document Helper",
        tech: ["Python", "LangChain", "Gemini", "FAISS", "FastAPI", "React"],
        description: "GenAI-powered document assistant delivering real-time answers from user-uploaded PDFs with session persistence.",
        category: "Generative AI"
    },
    {
        title: "Telugu Answer Evaluation System",
        tech: ["Python", "Scikit-learn", "NLP", "Naive Bayes"],
        description: "Automated answer sheet evaluation system for Telugu language using cosine similarity and NER.",
        category: "NLP"
    },
    {
        title: "Tata Sales Data Visualization",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
        description: "Interactive dashboard visualizing key insights from manually processed sales datasets.",
        category: "Data Analysis"
    },
    {
        title: "Animal Species Classification",
        tech: ["TensorFlow", "Python", "CNN", "Colab"],
        description: "Custom CNN model trained to accurately detect and classify animal species from image datasets.",
        category: "Computer Vision"
    }
];

export const certifications = [
    {
        name: "Machine Learning in Production",
        issuer: "DeepLearning.AI (Coursera)",
        date: "January 2026"
    },
    {
        name: "Introduction to AI and Machine Learning on Google Cloud",
        issuer: "Google Cloud (Coursera)",
        date: "September 2025"
    }
];
