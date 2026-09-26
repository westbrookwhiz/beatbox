export type VideoSource = 'YouTube' | 'Vimeo' | 'SoundCloud' | 'Provider';

export interface DownloadOption {
  quality: string;
  format: string;
  url: string;
  available: boolean;
}

export interface MusicVideo {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  duration?: number;
  description?: string;
  releaseDate?: string;
  genre?: string;
  source: VideoSource;
  album?: string;
  streamUrl?: string;
  downloads?: DownloadOption[];
  quality?: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  followers?: number;
  genres?: string[];
}

export interface Genre {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface SearchResult {
  items: MusicVideo[];
  page: number;
  hasMore: boolean;
  total: number;
}

export interface APIResponse<T> {
  ok: boolean;
  data: T;
  error?: string;
}
