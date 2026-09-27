import MusicVideoCard, { EmptyState } from '../components/MusicVideoCard';
import { mockVideos } from '../data/mockData';

export default function GenresPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-teal-300">Browse</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Genres</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {mockGenres.map((genre) => (
          <Link key={genre.id} to={`/genre/${genre.id}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
            <img src={genre.image} alt={genre.name} className="h-48 w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-white">{genre.name}</h2>
              <p className="mt-2 text-slate-400">{genre.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {!mockGenres.length ? <EmptyState title="No genres available" message="The genre library is not available right now." /> : null}
    </div>
  );
}
