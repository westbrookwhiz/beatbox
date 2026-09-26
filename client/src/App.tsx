import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import GenreDetailPage from './pages/GenreDetailPage';
import GenresPage from './pages/GenresPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import TrendingPage from './pages/TrendingPage';
import VideoDetailPage from './pages/VideoDetailPage';
import WatchPage from './pages/WatchPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/genre/:genre" element={<GenreDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
