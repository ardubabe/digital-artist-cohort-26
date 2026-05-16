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

## Before you start — install these first

You'll need a few free tools installed on your computer before any of the steps below will work. Install instructions are the same idea on both platforms — download the installer, run it, click through the defaults.

### 1. Visual Studio Code

The code editor we'll use to look at and edit the slides.

- **macOS:** download from [code.visualstudio.com](https://code.visualstudio.com/), unzip, drag **Visual Studio Code** into your Applications folder.
- **Windows:** download the **User Installer** from [code.visualstudio.com](https://code.visualstudio.com/), run the `.exe`, accept the defaults (the "Add to PATH" option is helpful, leave it ticked).

### 2. Node.js (LTS)

Runs the dev server. The installer also includes `npm`, which we use to install dependencies.

- **macOS:** download the macOS installer (`.pkg`) for the **LTS** version from [nodejs.org](https://nodejs.org/) and run it.
- **Windows:** download the Windows installer (`.msi`) for the **LTS** version from [nodejs.org](https://nodejs.org/) and run it. Leave all the default options ticked.

### 3. Git

Needed for `git clone`.

- **macOS:** open the **Terminal** app (Applications → Utilities, or press `Cmd + Space` and type "Terminal") and run `xcode-select --install`. A dialog will pop up — click **Install**. You can also download an installer from [git-scm.com](https://git-scm.com/downloads).
- **Windows:** download Git for Windows from [git-scm.com/downloads](https://git-scm.com/downloads) and run the installer. Defaults are fine. This also installs **Git Bash**, a terminal you can use for all the commands below.

### 4. A GitHub account

Sign up at [github.com](https://github.com/) if you don't have one. You'll need this to fork the repo.

### Check everything is installed

Open a terminal:

- **macOS:** open the **Terminal** app.
- **Windows:** open **Git Bash** (recommended — it behaves the same as Mac's terminal), or **PowerShell**, or **Command Prompt**.

Then run:

```bash
node --version    # should print something like v20.x.x
npm --version     # should print a number
git --version     # should print a version
```

If any of those say "command not found" (Mac) or "is not recognized" (Windows), go back and install the missing one. On Windows you may need to **close and reopen** the terminal after installing — the new tools won't show up in an already-open window.

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
