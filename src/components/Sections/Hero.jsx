import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/portfolioData';

import ParticleBackground from '../ui/ParticleBackground';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <ParticleBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mx-auto"
            >
                <h1 className="font-bold mb-6 leading-tight">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <span className="text-6xl md:text-7xl pb-2 text-white">
                            {profile.name.split(' ').slice(0, -2).join(' ')} <span className="text-gradient">{profile.name.split(' ').slice(-2).join(' ')}</span>
                        </span>
                        <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium self-center mt-2 md:mt-0">
                            Available for Hire
                        </div>
                    </div>
                </h1>
                <p className="text-gray-400 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
                    {profile.tagline}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
                    >
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a
                        href={profile.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg font-medium transition-all flex items-center gap-2"
                    >
                        Resume <Download size={20} />
                    </a>
                </div>

                <div className="mt-12 flex justify-center gap-8">
                    <a href={profile.social.github} target="_blank" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><Github size={28} /></a>
                    <a href={profile.social.linkedin} target="_blank" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><Linkedin size={28} /></a>
                    <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><Mail size={28} /></a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
