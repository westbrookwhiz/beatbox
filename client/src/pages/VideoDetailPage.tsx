import { Download, PlayCircle, Star, User2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import MusicVideoCard from '../components/MusicVideoCard';
import { mockVideos } from '../data/mockData';
import { formatDate, formatDuration } from '../utils/format';

export default function VideoDetailPage() {
  const { id } = useParams();
  const video = mockVideos.find((item) => item.id === id) ?? mockVideos[0];
  const related = mockVideos.filter((item) => item.id !== video.id).slice(0, 4);

  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 sm:p-6">
        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-6">
            <img src={video.thumbnail} alt={video.title} className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[420px]" />
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-teal-200">{video.genre}</span>
                <span className="text-sm text-slate-400">{video.source}</span>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white sm:text-4xl">{video.title}</h1>
                <p className="mt-2 text-lg text-slate-300">{video.artist}</p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span>{video.album}</span>
                <span>•</span>
                <span>{formatDate(video.releaseDate)}</span>
                <span>•</span>
                <span>{formatDuration(video.duration)}</span>
              </div>

              <p className="max-w-2xl text-slate-300">{video.description}</p>

              <div className="flex flex-wrap gap-3">
                <Link to={`/watch/${video.id}`} className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-3 font-medium text-slate-950 hover:bg-teal-300">
                  <PlayCircle className="h-4 w-4 fill-current" />
                  Watch now
                </Link>
                {video.downloads && video.downloads.length > 0 ? (
                  <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10">
                    <Download className="h-4 w-4" />
                    Download MP4
                  </button>
                ) : (
                  <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-300">
                    Download unavailable
                  </button>
                )}
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
            <h2 className="text-xl font-semibold text-white">Video details</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2"><User2 className="h-4 w-4 text-teal-300" /> Artist</span>
                <span>{video.artist}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2"><Star className="h-4 w-4 text-teal-300" /> Quality</span>
                <span>{video.quality || 'HD'}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Source</span>
                <span>{video.source}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Duration</span>
                <span>{formatDuration(video.duration)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section>
        <h2 className="mb-5 text-2xl font-semibold text-white">Related videos</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => <MusicVideoCard key={item.id} video={item} />)}
        </div>
      </section>
    </div>
  );
}
