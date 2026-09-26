import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Play, Clock3, Music4 } from 'lucide-react';
import { formatDate, formatDuration } from '../utils/format';
import type { MusicVideo } from '../types';

interface MusicVideoCardProps {
  video: MusicVideo;
}

export default function MusicVideoCard({ video }: MusicVideoCardProps) {
  const navigate = useNavigate();
  const hasDownloads = Boolean(video.downloads && video.downloads.length > 0);

  return (
    <article className="music-card group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
      <div className="relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

        <button
          type="button"
          onClick={() => navigate(`/watch/${video.id}`)}
          className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white ring-1 ring-white/10 backdrop-blur-md transition hover:scale-105"
          aria-label={`Play ${video.title}`}
        >
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </button>

        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-slate-200">
          <Clock3 className="h-3 w-3" />
          {formatDuration(video.duration)}
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-teal-300">{video.genre}</p>
          <Link to={`/video/${video.id}`} className="block text-lg font-semibold text-white hover:text-teal-300">
            {video.title}
          </Link>
          <p className="text-sm text-slate-400">{video.artist}</p>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{video.source}</span>
          <span>{video.quality || 'HD'}</span>
        </div>

        <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
          <span>{formatDate(video.releaseDate)}</span>
          {hasDownloads ? (
            <button
              type="button"
              onClick={() => navigate(`/video/${video.id}`)}
              className="inline-flex items-center gap-1 rounded-full bg-teal-500/15 px-2.5 py-1.5 font-medium text-teal-200 hover:bg-teal-500/25"
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </button>
          ) : (
            <span className="text-slate-500">Download unavailable</span>
          )}
        </div>
      </div>
    </article>
  );
}

export function SectionHeader({ eyebrow, title, action, actionTo }: { eyebrow: string; title: string; action?: string; actionTo?: string; }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-2">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-teal-300">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      </div>
      {action && actionTo ? (
        <Link to={actionTo} className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200">
          {action}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/60 p-10 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10 text-teal-300">
        <Music4 className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-400">{message}</p>
    </div>
  );
}
