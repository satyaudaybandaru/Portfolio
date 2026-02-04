import Section from '../ui/Section';
import { experience, education, certifications } from '../../data/portfolioData';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

const CardItem = ({ title, subtitle, date, description, icon: Icon, link }) => {
    const Component = link ? 'a' : 'div';
    const props = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Component
            {...props}
            className={`p-6 rounded-2xl glass border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group h-full flex flex-col ${link ? 'cursor-pointer' : ''}`}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={24} />
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-primary-cyan border border-white/5">
                    {date}
                </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-cyan transition-colors flex items-center gap-2">
                {title}
                {link && <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
            </h3>
            <p className="text-gray-400 font-medium mb-3">{subtitle}</p>
            {description && <p className="text-gray-500 text-sm leading-relaxed mt-auto">{description}</p>}
        </Component>
    );
};


const Experience = () => {
    return (
        <Section id="experience">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-gradient">Journey</span></h2>
                <p className="text-gray-400">My academic and professional path.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Experience - Only render if not empty (it's empty now per request to move) */}
                {experience.map((job) => (
                    <CardItem
                        key={job.id}
                        title={job.role}
                        subtitle={job.company}
                        date={job.period}
                        description={job.description}
                        icon={Briefcase}
                    />
                ))}

                {/* Education */}
                {education.map((edu, idx) => (
                    <CardItem
                        key={`edu-${idx}`}
                        title={edu.degree}
                        subtitle={edu.institution}
                        date={edu.period}
                        description={`Score: ${edu.score}`}
                        icon={GraduationCap}
                    />
                ))}

                {/* Certifications */}
                {certifications.map((cert, idx) => (
                    <CardItem
                        key={`cert-${idx}`}
                        title={cert.name}
                        subtitle={cert.issuer}
                        date={cert.date}
                        description=""
                        icon={Award}
                        link={cert.link}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Experience;
