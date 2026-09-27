import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 5000);

app.use(cors());
app.use(express.json());

const videoData = [
  {
    id: 'v1',
    title: 'Midnight Echo',
    artist: 'Ayo M',
    description: 'A shimmering late-night anthem built for city lights and open roads.',
    genre: 'Afrobeats',
    source: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    streamUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    downloads: [
      { quality: '360p', format: 'MP4', url: '#', available: true },
      { quality: '720p', format: 'MP4', url: '#', available: true },
      { quality: '1080p', format: 'MP4', url: '#', available: true },
    ],
  },
  {
    id: 'v2',
    title: 'Velvet Sky',
    artist: 'Nia Sol',
    description: 'Pitch-perfect vocals and a warm, immersive rhythm section.',
    genre: 'R&B',
    source: 'SoundCloud',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    streamUrl: 'https://www.w3schools.com/html/movie.mp4',
    downloads: [],
  },
  {
    id: 'v3',
    title: 'Neon Pulse',
    artist: 'Kairo V',
    description: 'A hard-driving club cut with hypnotic synth layers and punchy drums.',
    genre: 'Hip-Hop',
    source: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    streamUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    downloads: [{ quality: '720p', format: 'MP4', url: '#', available: true }],
  },
];

const SearchQuerySchema = z.object({
  q: z.string().trim().max(100).optional(),
});

app.get('/health', (_req, res) => {
  res.json({ ok: true, message: 'BEATBOX API is healthy.' });
});

app.get('/api/home', (_req, res) => {
  res.json({
    ok: true,
    data: {
      featured: videoData[0],
      trending: videoData,
      latest: videoData,
      genres: ['Afrobeats', 'Hip-Hop', 'Pop', 'R&B'],
    },
  });
});

app.get('/api/trending', (_req, res) => {
  res.json({ ok: true, data: videoData });
});

app.get('/api/search', (req, res) => {
  const parsed = SearchQuerySchema.safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: 'Invalid search query.' });
  }

  const query = parsed.data.q?.trim().toLowerCase() ?? '';

  const filtered = query
    ? videoData.filter((video) =>
        [video.title, video.artist, video.genre, video.source].some((value) =>
          value.toLowerCase().includes(query)
        )
      )
    : videoData;

  return res.json({ ok: true, data: { page: 1, hasMore: false, total: filtered.length, items: filtered } });
});

app.get('/api/genres', (_req, res) => {
  res.json({
    ok: true,
    data: [
      { id: 'afrobeats', name: 'Afrobeats' },
      { id: 'hiphop', name: 'Hip-Hop' },
      { id: 'pop', name: 'Pop' },
      { id: 'rnb', name: 'R&B' },
    ],
  });
});

app.get('/api/genres/:genre', (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const items = videoData.filter((video) => video.genre.toLowerCase() === genre || video.genre.toLowerCase().includes(genre));

  res.json({ ok: true, data: items });
});

app.get('/api/videos/:id', (req, res) => {
  const video = videoData.find((item) => item.id === req.params.id);

  if (!video) {
    return res.status(404).json({ ok: false, error: 'Video not found.' });
  }

  return res.json({ ok: true, data: video });
});

app.get('/api/videos/:id/related', (req, res) => {
  const related = videoData.filter((item) => item.id !== req.params.id).slice(0, 4);
  return res.json({ ok: true, data: related });
});

app.get('/api/videos/:id/downloads', (req, res) => {
  const video = videoData.find((item) => item.id === req.params.id);

  if (!video) {
    return res.status(404).json({ ok: false, error: 'Video not found.' });
  }

  return res.json({ ok: true, data: video.downloads ?? [] });
});

app.get('/api/videos/:id/stream', (req, res) => {
  const video = videoData.find((item) => item.id === req.params.id);

  if (!video) {
    return res.status(404).json({ ok: false, error: 'Video not found.' });
  }

  if (!video.streamUrl) {
    return res.status(400).json({ ok: false, error: 'Streaming is unavailable for this source.' });
  }

  return res.redirect(video.streamUrl);
});

app.listen(port, () => {
  console.log(`BEATBOX server running on http://localhost:${port}`);
});
