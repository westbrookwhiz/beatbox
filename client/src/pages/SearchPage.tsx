import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import MusicVideoCard, { EmptyState } from '../components/MusicVideoCard';
import { mockVideos } from '../data/mockData';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return mockVideos;

    return mockVideos.filter((video) => {
      return [video.title, video.artist, video.genre, video.album].some((value) =>
        value?.toLowerCase().includes(normalized)
      );
    });
  }, [query]);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search songs, artists, albums, or videos"
            className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
            aria-label="Search videos"
          />
          {query ? (
            <button type="button" onClick={() => setQuery('')} className="text-slate-400 hover:text-white" aria-label="Clear search">
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </label>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Results</h2>
          <span className="text-sm text-slate-400">{results.length} matches</span>
        </div>

        {results.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {results.map((video) => <MusicVideoCard key={video.id} video={video} />)}
          </div>
        ) : (
          <EmptyState title="No results found" message="Try a broader search or browse by genre." />
        )}
      </div>
    </div>
  );
}
