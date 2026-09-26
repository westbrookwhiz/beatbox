import { useParams, Link } from 'react-router-dom';
import MusicVideoCard, { EmptyState } from '../components/MusicVideoCard';
import { mockGenres, mockVideos } from '../data/mockData';

export default function GenreDetailPage() {
  const { genre } = useParams();
  const selectedGenre = mockGenres.find((item) => item.id === genre);
  const filteredVideos = mockVideos.filter((video) => video.genre?.toLowerCase() === selectedGenre?.name.toLowerCase() || video.genre?.toLowerCase() === genre?.toLowerCase());

  if (!selectedGenre) {
    return <EmptyState title="Genre not found" message="This genre is unavailable right now." />;
  }

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70">
        <img src={selectedGenre.image} alt={selectedGenre.name} className="h-56 w-full object-cover" />
        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-teal-300">Genre</p>
          <h1 className="mt-2 text-4xl font-bold text-white">{selectedGenre.name}</h1>
          <p className="mt-3 max-w-2xl text-slate-300">{selectedGenre.description}</p>
          <Link to="/genres" className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">Back to genres</Link>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {filteredVideos.length ? filteredVideos.map((video) => <MusicVideoCard key={video.id} video={video} />) : <EmptyState title="No results in this genre" message="Try another genre or broad search." />}
      </div>
    </div>
  );
}
