import Section from '../ui/Section';
import { skills } from '../../data/portfolioData';

const Skills = () => {
    return (
        <Section id="skills" className="bg-dark-100/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
                <p className="text-gray-400">Tools and technologies I use to build intelligent systems.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup, idx) => {
                    const Icon = skillGroup.icon;
                    return (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-dark-200/50 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 group"
                        >
                            <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm bg-white/5 border border-white/5 rounded-full text-gray-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Skills;
