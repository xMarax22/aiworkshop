# AI Workshop

A single-page personal resume website for **Tamarra Sanders**, built with [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev), and [Tailwind CSS 4](https://tailwindcss.com).

## Live URL

> Live deployment URL goes here once the site is deployed on Vercel.

## Stack

- **Framework:** Next.js 16.3.4 (App Router, TypeScript)
- **UI:** React 19, Tailwind CSS 4 (PostCSS plugin)
- **Rendering:** Static / server-rendered
- **Linting:** ESLint 9 with `eslint-config-next`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

Other scripts:

```bash
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Layout

```
src/
  app/
    layout.tsx     # root layout + fonts + theme-init script
    page.tsx       # single-page resume
    globals.css    # Tailwind + theme tokens
  components/
    theme-toggle.tsx  # light/dark theme toggle
public/              # static assets
```

## Deployment

Deployed on [Vercel](https://vercel.com), connected to the GitHub repository at <https://github.com/xMarax22/aiworkshop>. Every push to `main` triggers a build.

## Deliberately skipped

- ~~Contact form~~ — reserved for phase 2, per the brief.
- Analytics / third-party tracking — none per the brief.
- CMS / database-backed content — none needed for a static resume page.
- Downloadable PDF — out of scope.