import { Download, Fullscreen, Pause, Play, Volume2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { mockVideos } from '../data/mockData';
import { formatDuration } from '../utils/format';

export default function WatchPage() {
  const { id } = useParams();
  const video = mockVideos.find((item) => item.id === id) ?? mockVideos[0];

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 sm:p-6">
        <video
          controls
          poster={video.thumbnail}
          className="h-[360px] w-full rounded-[1.5rem] bg-slate-950 object-cover sm:h-[500px]"
          src={video.streamUrl}
        >
          Your browser does not support HTML5 video.
        </video>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-teal-300">Now playing</p>
            <h1 className="mt-2 text-3xl font-bold text-white">{video.title}</h1>
            <p className="mt-1 text-slate-300">{video.artist} • {video.genre}</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white" aria-label="Play"><Play className="h-4 w-4" /></button>
            <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white" aria-label="Pause"><Pause className="h-4 w-4" /></button>
            <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white" aria-label="Volume"><Volume2 className="h-4 w-4" /></button>
            <button className="rounded-full border border-white/10 bg-white/5 p-3 text-white" aria-label="Fullscreen"><Fullscreen className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Progress</span>
            <span>{formatDuration(video.duration)}</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span>00:00</span>
            <span>00:33</span>
            <span>{formatDuration(video.duration)}</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-300">Player</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Quality and details</h2>
          </div>
          {video.downloads && video.downloads.length > 0 ? (
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-3 font-medium text-slate-950 hover:bg-teal-300">
              <Download className="h-4 w-4" />
              Download MP4
            </button>
          ) : (
            <button type="button" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-300">
              Download unavailable
            </button>
          )}
        </div>

        <div className="mt-5 text-slate-300">
          <p>{video.description}</p>
        </div>

        <div className="mt-6"><Link to={`/video/${video.id}`} className="text-teal-300 hover:text-teal-200">View details →</Link></div>
      </div>
    </div>
  );
}
