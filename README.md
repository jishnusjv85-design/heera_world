# Heera World Foundation — React + Vite

An original, responsive nonprofit website built with React, Vite and plain CSS.

## Start locally

Requires Node.js 18+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The deployable site is in `dist/`. You can deploy it to Vercel, Netlify, or any static host.

## Deploy to Vercel

This project is ready for Vercel with no extra setup. `vercel.json` sets the Vite framework preset, the build command, the `dist/` output, single-page rewrites, and long-term caching for hashed assets.

Option A — from the Vercel dashboard:

1. Push this repository to GitHub (already done for `jishnusjv85-design/heera_world`).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Leave the defaults and press **Deploy**.

Option B — from the terminal, with the Vercel CLI:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

Node.js 20 or newer is required (set in `package.json` under `engines`).

## Customize

- `src/App.jsx`: page text, sections, navigation, and image URLs.
- `src/styles.css`: layout, colors, type, and responsive styling.
- `index.html`: page title and SEO description.

## Before publishing

- Replace illustrative stock photography with approved, real foundation photographs.
- Verify the foundation's mission and program descriptions; these are suggested editorial copy, not verified claims.
- **Connect the enquiry form to a real backend/form service.** It currently displays a demo acknowledgement and does not send messages or collect data.
- Add the foundation's verified email address, social links, and legal/privacy information.
- Review rights and usage terms for externally hosted Unsplash images; consider hosting approved photos locally.
