# Claude AI Landing Page

A landing page showcasing Claude AI, built with Vite + React + TypeScript + Tailwind CSS.

**Live site:** https://infano2100.github.io/claude-landing-page/

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 19](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — styling

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at localhost:5173 |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run format` | Format code with Prettier |

## CI/CD Pipeline

| Trigger | Pipeline |
|---|---|
| Pull Request | lint → test → build |
| Push to `develop` | lint → test → build → deploy DEV |
| Manual (workflow_dispatch) | deploy to SIT / UAT / PRD |

## Branch Strategy

```
main          ← production code
develop       ← integration branch
feature/*     ← new features (PR → develop)
```
