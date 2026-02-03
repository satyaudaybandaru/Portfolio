import Section from '../ui/Section';
import { projects } from '../../data/portfolioData';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const Projects = () => {
    return (
        <Section id="projects" className="bg-dark-100/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
                <p className="text-gray-400">Automating the world, one model at a time.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group relative rounded-2xl overflow-hidden glass border-white/5 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80" />

                        <div className="relative p-8 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                    <FolderOpen size={24} />
                                </div>
                                <div className="flex gap-3">
                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"><Github size={20} /></a>
                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-cyan transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-primary-cyan/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
