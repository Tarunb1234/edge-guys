# Studio rules for Claude Code

This repo is a client website built by our studio. Follow these rules on every change.

## Facts
- Never invent business facts: no made-up reviews, prices, years, licenses, awards or guarantees.
- All business details live in `src/data/business.json`. Change facts there, not in page files.
- Anything not yet confirmed by the client stays in [square brackets] so we can find it.

## Quality bar
- Mobile-first. Check every page at 375px wide.
- Every image needs real alt text. Every button and link must work.
- Keep pages fast: no heavy libraries, compress images, under 2 seconds to load.
- The phone number must be a tap-to-call link everywhere it appears.

## Workflow
- Work on a branch, never commit straight to `main`.
- Run `npm run build` before asking for review. It must finish with no errors.
- Secrets (API keys) go in Cloudflare environment variables, never in the code.
