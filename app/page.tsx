export default function HomePage() {
  const highlights = ["Modern Stack", "Production Ready", "GitHub Pinned"];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio Project</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">GatePulse Visitor Management</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">Smart visitor entry, host notification, QR check-in, and real-time checkout tracking system.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="font-semibold">{item}</h2>
              <p className="mt-2 text-sm text-slate-400">Designed to demonstrate practical full-stack skills.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
