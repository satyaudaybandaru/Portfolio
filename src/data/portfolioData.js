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
        title: "Talk Bridge",
        tech: ["React Native", "Native Wind", "Python", "FastAPI", "Sarvam AI Integration"],
        description: "Talk Bridge aimed to be a real-time voice translation app built for travelers in India. Speak in your language and instantly hear it translated into the local language, making conversations smooth and stress-free. Think of it as a real-life version of Doraemon’s Translation Jelly, powered by modern AI.",
        category: "Generative AI",
        github: "https://github.com/satyaudaybandaru/Talk-Bridge.git"
    },
    {
        title: "RAG Based Document Helper",
        tech: ["Python", "LangChain", "Gemini", "FAISS", "FastAPI", "React"],
        description: "GenAI-powered document assistant delivering real-time answers from user-uploaded PDFs with session persistence.",
        category: "Generative AI",
        github: "https://github.com/satyaudaybandaru/RAG-based-QA-webapp"
    },
    {
        title: "Telugu Answer Evaluation System",
        tech: ["Python", "Scikit-learn", "NLP", "Naive Bayes"],
        description: "Automated answer sheet evaluation system for Telugu language using cosine similarity and NER.",
        category: "NLP",
        github: "https://github.com/satyaudaybandaru/Automated-Paper-Correction-for-Telugu"
    },
    {
        title: "Tata Sales Data Visualization",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
        description: "Interactive dashboard visualizing key insights from manually processed sales datasets.",
        category: "Data Analysis",
        link: "https://1drv.ms/b/c/1ca6e4df796325b6/IQC2JWN53-SmIIAcTiQAAAAAAUZGQDtQfBGpoclgF_WJfcQ?e=aYae4q"
    },
    {
        title: "Computer Retail & Support Online Platform",
        tech: ["React", "Bootstrap", "FastAPI", "MongoDB", "Google Cloud"],
        description: "Developed and deployed a full-stack web application. Automated CI/CD via GitHub Cloud Build and hosted on Google Cloud Run.",
        category: "Full Stack",
        link: "#"
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
        date: "January 2026",
        link: "https://coursera.org/share/04329cd257a89bc08749831b6069bd3b"
    },
    {
        name: "Introduction to AI and Machine Learning on Google Cloud",
        issuer: "Google Cloud (Coursera)",
        date: "September 2025",
        link: "https://coursera.org/share/0dc8057283e995b489d131f5eac324ac"
    }
];
