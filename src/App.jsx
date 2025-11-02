import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <div id="experience">
          <Experience />
        </div>
        <Projects />
        <Contact />
      </main>
      <footer className="px-6 md:px-12 py-10 border-t border-slate-200 bg-white/70">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Muhammad Tahir Mansoor. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <span className="opacity-30">•</span>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
