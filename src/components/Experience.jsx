export default function Experience() {
  const skills = [
    'Shopify Themes (Dawn, custom)',
    'Liquid, JSON Templates',
    'Shopify CLI & Theme App Extensions',
    'Speed & SEO Optimization',
    'Checkout UI customizations',
    'App integrations (Klaviyo, ReCharge, etc.)',
  ];

  return (
    <section className="relative px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
          <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-indigo-50 to-pink-50" />
          <div className="relative">
            <span className="text-sm font-medium tracking-wide text-indigo-600">Experience</span>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">1+ Years building on Shopify</h3>
            <p className="mt-3 text-slate-600">
              I help brands launch fast, look premium, and convert better. From theme setup to deep Liquid work and performance passes.
            </p>
            <ul className="mt-6 space-y-3">
              {skills.map((s) => (
                <li key={s} className="flex items-start gap-3 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-emerald-600 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-semibold text-slate-900">Services</h4>
              <p className="text-slate-600 mt-1">Flexible, outcome-focused engagements.</p>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Theme Setup & Customization',
                desc: 'Launch-ready stores, tailored sections, and branded UI.',
              },
              {
                title: 'Performance & Conversion',
                desc: 'Lighthouse improvements and CRO best practices.',
              },
              {
                title: 'Custom Sections & Templates',
                desc: 'Flexible Liquid + JSON templates with metafields.',
              },
              {
                title: 'App Integrations',
                desc: 'Email, subscriptions, reviews, search, and more.',
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 p-5 bg-white/80">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><path d="M12 12h.01"/><path d="M20 7h-5V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/></svg>
                  </span>
                  <div>
                    <h5 className="font-semibold text-slate-900">{card.title}</h5>
                    <p className="text-slate-600 text-sm mt-1">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
