import type { MusicVideo } from '../types';

export const mockGenres = [
  {
    id: 'afrobeats',
    name: 'Afrobeats',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm percussion and melodic rhythms.',
  },
  {
    id: 'hiphop',
    name: 'Hip-Hop',
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    description: 'Punchy flows and hard-hitting beats.',
  },
  {
    id: 'pop',
    name: 'Pop',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    description: 'Hook-driven anthems and bright hooks.',
  },
  {
    id: 'rnb',
    name: 'R&B',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    description: 'Soulful vocals and polished grooves.',
  },
  {
    id: 'dance',
    name: 'Dance',
    image:
      'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80',
    description: 'High-energy floor-fillers.',
  },
  {
    id: 'electronic',
    name: 'Electronic',
    image:
      'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?auto=format&fit=crop&w=1200&q=80',
    description: 'Synth textures and club-ready soundscapes.',
  },
];

export const mockArtists = [
  { id: 'artist-1', name: 'Ayo M', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80', followers: 920000, genres: ['Afrobeats', 'Pop'] },
  { id: 'artist-2', name: 'Nia Sol', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80', followers: 640000, genres: ['R&B', 'Pop'] },
  { id: 'artist-3', name: 'Kairo V', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80', followers: 1100000, genres: ['Hip-Hop', 'Dance'] },
  { id: 'artist-4', name: 'Sora Lane', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80', followers: 780000, genres: ['Electronic', 'Pop'] },
];

export const mockVideos: MusicVideo[] = [
  {
    id: 'v1', title: 'Midnight Echo', artist: 'Ayo M',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    duration: 214, description: 'A shimmering late-night anthem built for city lights and open roads.', releaseDate: '2025-03-12', genre: 'Afrobeats', source: 'YouTube', album: 'Afterglow', quality: '1080p', streamUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    downloads: [{ quality: '360p', format: 'MP4', url: '#', available: true }, { quality: '720p', format: 'MP4', url: '#', available: true }, { quality: '1080p', format: 'MP4', url: '#', available: true }],
  },
  {
    id: 'v2', title: 'Velvet Sky', artist: 'Nia Sol',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    duration: 192, description: 'Pitch-perfect vocals and a warm, immersive rhythm section.', releaseDate: '2025-02-20', genre: 'R&B', source: 'SoundCloud', album: 'Velvet', quality: '720p', streamUrl: 'https://www.w3schools.com/html/movie.mp4', downloads: [],
  },
  {
    id: 'v3', title: 'Neon Pulse', artist: 'Kairo V',
    thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    duration: 239, description: 'A hard-driving club cut with hypnotic synth layers and punchy drums.', releaseDate: '2025-01-18', genre: 'Hip-Hop', source: 'YouTube', album: 'Basecamp', quality: '1080p', streamUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    downloads: [{ quality: '480p', format: 'MP4', url: '#', available: true }, { quality: '720p', format: 'MP4', url: '#', available: true }],
  },
  {
    id: 'v4', title: 'Sunset Drive', artist: 'Sora Lane',
    thumbnail: 'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80',
    duration: 206, description: 'Bright hooks and glossy production tuned for the evening commute.', releaseDate: '2025-04-09', genre: 'Dance', source: 'Vimeo', album: 'Glow Theory', quality: '720p', streamUrl: 'https://www.w3schools.com/html/movie.mp4', downloads: [],
  },
  {
    id: 'v5', title: 'Glass Horizon', artist: 'Ayo M',
    thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    duration: 228, description: 'A polished pop moment with shimmering strings and a confident chorus.', releaseDate: '2025-04-02', genre: 'Pop', source: 'YouTube', album: 'Afterglow', quality: '1080p', streamUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    downloads: [{ quality: '720p', format: 'MP4', url: '#', available: true }, { quality: '1080p', format: 'MP4', url: '#', available: true }],
  },
  {
    id: 'v6', title: 'After Hours', artist: 'Nia Sol',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    duration: 198, description: 'Slow-burning, intimate vocals wrapped in hypnotic low-end grooves.', releaseDate: '2025-03-24', genre: 'Afrobeats', source: 'Provider', album: 'Velvet', quality: '720p', streamUrl: 'https://www.w3schools.com/html/movie.mp4', downloads: [],
  },
];
