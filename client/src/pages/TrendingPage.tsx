import { useParams, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import MusicVideoCard, { EmptyState } from '../components/MusicVideoCard';
import { mockGenres, mockVideos } from '../data/mockData';

export default function TrendingPage() {
  const trendingVideos = mockVideos;

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-300">
            <Search className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-300">Discover</p>
            <h1 className="text-3xl font-bold text-white">Trending now</h1>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {trendingVideos.map((video) => (
          <MusicVideoCard key={video.id} video={video} />
        ))}
      </div>

      {!trendingVideos.length ? <EmptyState title="No trending videos" message="There is nothing to show right now." /> : null}
    </div>
  );
}
