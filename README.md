# PortfolioPro AI

A modern, AI-powered portfolio builder built with React, TypeScript, and TanStack Start.

## Tech Stack

- **React 19** - UI library
- **TanStack Start** - Full-stack React framework with SSR
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching and caching
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ShadCN UI** - Component library

## Getting Started

### Prerequisites

- Node.js 20+ or 22+
- npm or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   └── ui/          # ShadCN UI components
├── routes/          # File-based routes
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
│   └── api/         # API-related utilities
├── server/          # Server-side code
└── styles.css       # Global styles
```

## Routing

TanStack Start uses **file-based routing**. Every `.tsx` file in the `src/routes` directory is a route.

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic) |
| `_layout.tsx` | layout route |
| `__root.tsx` | app shell |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.

## License

MIT
