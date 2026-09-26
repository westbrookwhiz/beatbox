import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-teal-300">404</p>
      <h1 className="mt-4 text-5xl font-bold text-white">Beat not found.</h1>
      <p className="mt-4 max-w-xl text-slate-300">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-teal-400 px-6 py-3 font-medium text-slate-950 hover:bg-teal-300">Back to BEATBOX</Link>
    </div>
  );
}
