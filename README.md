# Edge Guys Heating & Cooling: concept site

Built with Astro and hosted on Cloudflare Pages. Unconfirmed details are in [square brackets] in `src/data/business.json` and the pages.

## Run it on your laptop
1. Install Node.js (LTS) and Git.
2. In this folder run `npm install`, then `npm run dev`.
3. Open http://localhost:4321

## Put it on GitHub
1. Create an empty repo on github.com (for example `your-studio/edge-guys`).
2. In this folder:
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-STUDIO/edge-guys.git
   git push -u origin main

## Publish on Cloudflare Pages
1. In the Cloudflare dashboard, create a Pages project and connect this GitHub repo.
2. Build command: `npm run build`. Output folder: `dist`.
3. Every branch gets its own preview link. Merging into `main` updates the live site.
4. Add the client's domain under the project's custom domains (see the launch-day checklist).

## Before launch
- Replace the photo placeholders with real photos of the team.
- Connect real Google reviews in `src/components/Reviews.astro`.
- Wire the contact form in `functions/api/contact.js` to email or the client's CRM.
- Confirm the tune-up terms and membership details with Edge Guys.

## Make changes with Claude Code
Open this folder in Claude Code and describe the change, for example:
"Add a financing page with a short FAQ, matching the existing style."
