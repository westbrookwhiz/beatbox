export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-teal-300">BEATBOX</p>
        <h1 className="mt-2 text-4xl font-bold text-white">Stream. Discover. Download.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-slate-300">
          <p>BEATBOX is a guest-only music and music-video discovery platform built for exploration without accounts or friction.</p>
          <p>Visitors can browse trending videos, search for artists and songs, and open a dedicated watch experience for content that is legitimately allowed to stream.</p>
          <p>Downloads are only shown when the source explicitly permits them. This helps protect licensing and access restrictions while still giving a polished media experience.</p>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-slate-300">
          <p>How it works: the app combines a normalized API layer with provider-specific adapters so sources can be added or replaced without rewriting the UI.</p>
          <p>There are no user profiles or login requirements, and privacy-conscious design keeps the guest experience simple and lightweight.</p>
        </div>
      </div>
    </div>
  );
}
