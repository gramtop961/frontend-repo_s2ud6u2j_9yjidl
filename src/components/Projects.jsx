export default function Projects() {
  const projects = [
    {
      title: 'CBSKINTEQ',
      url: 'https://cbskinteq.com.au/',
      description:
        'Beauty & skincare brand. Custom Shopify theme refinements, UX polish, and performance optimization.',
      tags: ['Theme Customization', 'Performance', 'UX'],
    },
    {
      title: 'Aussie Blends',
      url: 'https://www.aussieblends.com/',
      description:
        'Nutrition & flavors storefront. Conversion-focused layouts, product templates, and metafields setup.',
      tags: ['Conversion', 'Templates', 'Metafields'],
    },
  ];

  return (
    <section id="projects" className="relative px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-wide text-indigo-600">Selected Work</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Recent Shopify Projects</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A snapshot of stores I’ve designed, optimized, and shipped.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 blur-2xl" />
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link text-slate-400 group-hover:text-slate-600 transition"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 10v11H3V3h11"/></svg>
              </div>
              <p className="mt-2 text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-slate-900 font-medium">
                Visit site
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
