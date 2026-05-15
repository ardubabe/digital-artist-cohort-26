# Digital Artist Cohort 2026

Slides and workshop materials for the British Museum Digital Artist Cohort 2026 led by Jade Pughe (Ardubabe) of Mother London

First session on soft circuits and e-textiles.

## Workshops

| # | Workshop | Slide deck |
| - | -------- | ---------- |
| 1 | Soft circuits & e-textiles | [`src/components/Presentation.jsx`](src/components/Presentation.jsx) |
| 2 | TBC | _coming soon_ |
| 3 | TBC | _coming soon_ |
| 4 | TBC | _coming soon_ |
| 5 | TBC | _coming soon_ |

## Viewing the slides

The deck is a Vite app, so to view it locally:

```bash
git clone https://github.com/ardubabe/digital-artist-cohort-26.git
cd digital-artist-cohort-26
npm install
npm run dev
```

Then open the URL Vite prints (usually <http://localhost:5173>) in your browser. Use the arrow keys to move through the slides, or press `Esc` for the slide overview.

## For students — fork your own copy

If you want your own copy to play with:

1. Click **Fork** at the top right of [the repo](https://github.com/ardubabe/digital-artist-cohort-26) to make a copy on your GitHub account.
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/digital-artist-cohort-26.git
   cd digital-artist-cohort-26
   npm install
   npm run dev
   ```
3. Edit `src/components/Presentation.jsx` to change the slides, and commit/push to your fork.

If you just want the code without GitHub, you can download the repo as a ZIP from the green **Code** button.

## Stack

- React 19 + Vite
- [@revealjs/react](https://github.com/webpro-nl/revealjs-react) wrapping Reveal.js 6
- Sass for the custom `ardubabe` theme

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint
```

## Structure

- `src/components/Presentation.jsx` — the slide deck
- `src/css/theme/ardubabe.scss` — custom Reveal theme
- `src/index.css` — global styles
- `public/` — favicon and icons

## Workshop materials

Conductive thread, regular thread, Lilypad LEDs, Lilypad coin cell battery holder + battery, conductive fabric, Velostat, felt.
