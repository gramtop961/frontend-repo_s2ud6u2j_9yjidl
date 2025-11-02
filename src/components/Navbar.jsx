export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <a href="#" className="font-extrabold tracking-tight text-slate-900 text-lg">
          MTM<span className="text-indigo-600">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#experience" className="hover:text-slate-900">Experience</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white shadow hover:shadow-md"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
