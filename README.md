# BEATBOX

Stream. Discover. Download.

BEATBOX is a guest-only music and music-video discovery platform built with React, TypeScript, Vite, Node.js, and Express. The app is designed to surface legitimate media sources, protect download rules, and give users a polished media discovery experience without authentication.

## Features
- Music/video discovery home feed
- Trending, search, and genre browsing
- Video details and watch page
- Download availability based on source permissions
- Responsive dark UI
- Provider-normalized API layer architecture

## Stack
- Frontend: React, TypeScript, Vite, Tailwind CSS, React Router, TanStack Query
- Backend: Node.js, Express, TypeScript, Zod

## Project structure
- `client/` – React frontend
- `server/` – Express API

## Installation
```bash
npm install
```

## Development
```bash
npm run dev
```

## Production build
```bash
npm run build
```

## Environment variables
Copy `.env.example` to `.env` and fill in values as needed.

## Download / source restrictions
Downloads are only shown when a source explicitly exposes them. Protected streams are watched only when permitted and never converted or bypassed.

## Deployment
Build the client and server, then deploy the static frontend and Node API to your hosting target.
