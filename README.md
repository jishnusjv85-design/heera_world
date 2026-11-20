# Heera World Foundation — Website (React + Vite)

A responsive, multi-page website for Heera World Foundation, built with React, Vite and plain CSS. The content is taken from the foundation's live site (heeraworldfoundation.com) and rebuilt here.

## Pages

- **Home** (`/`) — hero slideshow, focus areas, mission (Motherhood Home), future vision, development priorities, impact, coverage and join-the-mission.
- **About Us** (`/about-us`) — our story, core pillars, operational sectors, achievements, reach and motto.
- **Management** (`/management`) — foundation leadership.
- **Gallery** (`/gallery`) — photo gallery with lightbox.
- **Ammaveedu** (`/ammaveedu`) — Mother Hood Home, news & updates.
- **Contact Us** (`/contact-us`) — contact details and enquiry form.
- **Donations** (`/donations`) — bank details and company information.

Routing is a small custom path-based router (`src/router.jsx`); the site is a single-page app, so any deep link is served from `index.html`.

## Start locally

Requires Node.js 20+.

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

The deployable site is in `dist/`.

## Deploy to Vercel

This project is ready for Vercel with no extra setup. `vercel.json` sets the Vite framework preset, the build command, the `dist/` output, single-page rewrites, and long-term caching for hashed assets.

Option A — from the Vercel dashboard:

1. Push this repository to GitHub (`jishnusjv85-design/heera_world`).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Leave the defaults and press **Deploy**.

Option B — from the terminal, with the Vercel CLI:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## Project structure

- `src/App.jsx` — routes and layout.
- `src/router.jsx` — small path-based router.
- `src/components/Layout.jsx` — header, footer and sector marquee.
- `src/pages/*.jsx` — one file per page.
- `src/data/site.js` — all page content (text, lists, image references).
- `src/styles.css` — layout, colors, type and responsive styling.
- `public/media/` — images used across the site.
- `src/assets/logo-mark.webp` — logo in the header and footer.
- `index.html` — page title and SEO description.

## Before publishing

- **Connect the enquiry form to a real backend/form service.** It currently shows a demo acknowledgement and does not send messages or collect data.
- Confirm the foundation's contact details, social links and donation bank details are current.
- Some Ammaveedu news items are written in Malayalam and render with the browser's Malayalam system font; for a fully branded look, add a Malayalam webfont.
- Review usage rights for the photographs before publishing publicly.
