# AI Workshop

A resume website built with [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev), and [Tailwind CSS 4](https://tailwindcss.com), bootstrapped with `create-next-app`.

## Stack

- **Framework:** Next.js 16.3.4 (App Router, TypeScript)
- **UI:** React 19, Tailwind CSS 4 (PostCSS plugin)
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
    layout.tsx    # root layout + fonts
    page.tsx      # homepage
    globals.css   # Tailwind + global styles
public/           # static assets
```

## Deployment

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.