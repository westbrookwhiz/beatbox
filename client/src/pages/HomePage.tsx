import { Building2, Download, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockVideos, mockGenres, mockArtists } from '../data/mockData';
import MusicVideoCard, { SectionHeader } from '../components/MusicVideoCard';

export default function HomePage() {
  const featured = mockVideos[0];
  const trending = mockVideos.slice(0, 4);
  const latest = mockVideos.slice(1, 5);

  return (
    <div className="space-y-12">
      <section className="video-shell overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-teal-200">
              <PlayCircle className="h-3.5 w-3.5" />
              Featured
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{featured.title}</h1>
              <p className="mt-3 text-lg text-slate-300">{featured.artist} • {featured.genre}</p>
            </div>
            <p className="max-w-xl text-slate-300">{featured.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link to={`/watch/${featured.id}`} className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-3 font-medium text-slate-950 hover:bg-teal-300">
                <PlayCircle className="h-4 w-4 fill-current" />
                Watch
              </Link>
              {featured.downloads && featured.downloads.length > 0 ? (
                <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10">
                  <Download className="h-4 w-4" />
                  Download MP4
                </button>
              ) : (
                <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10">
                  Download unavailable
                </button>
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/10">
            <img src={featured.thumbnail} alt={featured.title} className="h-[440px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-teal-300">{featured.source}</p>
                <div className="mt-2 flex items-center justify-between text-sm text-slate-200">
                  <span>{featured.quality}</span>
                  <span>{featured.album}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Trending" title="Hot right now" action="View all" actionTo="/trending" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trending.map((video) => <MusicVideoCard key={video.id} video={video} />)}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Fresh" title="Latest music videos" action="Browse all" actionTo="/search" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {latest.map((video) => <MusicVideoCard key={video.id} video={video} />)}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Artists" title="Popular artists" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {mockArtists.map((artist) => (
            <div key={artist.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
              <img src={artist.image} alt={artist.name} className="mb-4 h-28 w-full rounded-xl object-cover" />
              <h3 className="text-xl font-semibold text-white">{artist.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{artist.genres?.join(' • ')}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-teal-300">{artist.followers?.toLocaleString()} followers</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Browse" title="Discover genres" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mockGenres.map((genre) => (
            <Link key={genre.id} to={`/genre/${genre.id}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
              <img src={genre.image} alt={genre.name} className="h-48 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{genre.name}</h3>
                  <Building2 className="h-4 w-4 text-teal-300" />
                </div>
                <p className="mt-2 text-sm text-slate-400">{genre.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="More" title="More music videos" action="Search" actionTo="/search" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mockVideos.slice(2).map((video) => <MusicVideoCard key={video.id} video={video} />)}
        </div>
      </section>
    </div>
  );
}
