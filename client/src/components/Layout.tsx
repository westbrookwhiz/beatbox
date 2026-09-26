import { NavLink, Outlet } from 'react-router-dom';
import { Home, Flame, Music2, Search, Info } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/trending', label: 'Trending', icon: Flame },
  { to: '/genres', label: 'Genres', icon: Music2 },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/about', label: 'About', icon: Info },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/30">
              <Music2 className="h-4 w-4" />
            </div>
            <span>BEATBOX</span>
          </NavLink>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/search" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10">
            <Search className="h-4 w-4" />
          </NavLink>
        </div>

        <nav className="grid grid-cols-4 border-t border-white/10 bg-[#0b1220] md:hidden">
          {navItems.slice(0, 4).map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-3 text-[11px] ${
                  isActive ? 'text-teal-300' : 'text-slate-400'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-300 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <div className="mb-3 flex items-center gap-3 font-semibold text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950">
                <Music2 className="h-4 w-4" />
              </div>
              BEATBOX
            </div>
            <p className="max-w-sm text-slate-400">
              Stream. Discover. Download. A modern guest-only music and music-video discovery platform.
            </p>
          </div>

          <div>
            <p className="mb-3 font-medium text-white">Explore</p>
            <ul className="space-y-2 text-slate-400">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/trending">Trending</NavLink></li>
              <li><NavLink to="/genres">Genres</NavLink></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-medium text-white">Company</p>
            <ul className="space-y-2 text-slate-400">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/search">Search</NavLink></li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-medium text-white">Disclaimer</p>
            <p className="text-slate-400">
              Download availability depends on the permissions of the underlying source.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
