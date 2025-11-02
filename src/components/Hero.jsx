import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden grid lg:grid-cols-2 items-center">
      <div className="relative z-10 px-6 md:px-12 py-20">
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/40 text-slate-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Shopify Developer Portfolio
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Muhammad Tahir Mansoor
        </h1>
        <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg max-w-xl">
          I craft high-converting, beautiful Shopify storefronts and custom themes. 1+ years hands-on experience building, optimizing, and scaling eCommerce brands.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm transition"
          >
            Contact Me
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>
          </a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Shopify Themes
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            Speed Optimization
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            Custom Apps
          </div>
        </div>
      </div>

      <div className="relative min-h-[60vh] lg:min-h-[80vh]">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-[0] bg-[radial-gradient(1000px_400px_at_10%_10%,rgba(59,130,246,0.10),transparent),radial-gradient(800px_300px_at_80%_20%,rgba(236,72,153,0.10),transparent)]" />
    </section>
  );
}
