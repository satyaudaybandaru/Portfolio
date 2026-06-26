import Section from '../ui/Section';
import { certifications } from '../../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    return (
        <Section id="certifications">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-gradient">Certifications</span>
                </h2>
                <p className="text-gray-400">Credentials that validate my expertise.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => {
                    const Component = cert.link ? 'a' : 'div';
                    const props = cert.link
                        ? { href: cert.link, target: '_blank', rel: 'noopener noreferrer' }
                        : {};

                    return (
                        <Component
                            key={`cert-${idx}`}
                            {...props}
                            className={`p-6 rounded-2xl glass border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group h-full flex flex-col ${cert.link ? 'cursor-pointer' : ''}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Award size={24} />
                                </div>
                                <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-primary-cyan border border-white/5">
                                    {cert.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-cyan transition-colors flex items-center gap-2">
                                {cert.name}
                                {cert.link && (
                                    <ExternalLink
                                        size={16}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                )}
                            </h3>
                            <p className="text-gray-400 font-medium mb-3">{cert.issuer}</p>
                        </Component>
                    );
                })}
            </div>
        </Section>
    );
};

export default Certifications;
