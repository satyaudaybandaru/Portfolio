import Section from '../ui/Section';
import { profile } from '../../data/portfolioData';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent-purple/10 rounded-3xl p-12 border border-white/5">
                <div className="inline-block p-4 rounded-full bg-primary/20 text-primary mb-6">
                    <MessageSquare size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Innovate?</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities as an AI Engineer.
                    Whether you have a question or just want to say hi, my inbox is always open.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a
                        href={`mailto:${profile.email}`}
                        className="px-8 py-4 bg-white text-dark font-bold text-lg rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>
                    <a
                        href={profile.social.linkedin}
                        target="_blank"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/5 transition-colors"
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
