
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Certifications from './components/Sections/Certifications';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-400 text-sm glass mt-20">
        <p>© {new Date().getFullYear()} Bandaru Venkata Satya Uday. Built with React & Tailwind.</p>
      </footer>
    </div>
  )
}

export default App
