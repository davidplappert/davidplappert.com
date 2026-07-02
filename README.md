# davidplappert.com

Personal brand site for David Plappert — Principal Cloud Architect & AWS Consultant.

## Stack

- [Astro](https://astro.build) static site framework
- [Tailwind CSS](https://tailwindcss.com)
- Hosted on GitHub Pages with custom domain

## Development

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321

## Build

```bash
npm run build
```

Output goes to `./dist/`.

## Deploy

Automatic deployment to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

## SEO / AI discoverability (set up 2026-07-02)

- **Google Search Console**: property `https://davidplappert.com/` verified (auto-verified via the GA tag). `sitemap.xml` submitted; homepage recrawl requested after content changes.
- **Bing Webmaster Tools**: site imported from Google Search Console (so it inherits verification + sitemap). Homepage recrawl requested. Bing's index feeds Microsoft Copilot and ChatGPT search.
- **IndexNow**: enabled for instant Bing/Copilot/Yandex indexing of future changes. Key file lives at `public/eb8ef01d35a3d8155a53346eb41f127a.txt` (served at the site root). After any meaningful content change, ping IndexNow so search engines recrawl within minutes:
  ```bash
  KEY=eb8ef01d35a3d8155a53346eb41f127a
  curl -s -X POST "https://api.indexnow.org/indexnow" \
    -H "Content-Type: application/json; charset=utf-8" \
    -d "{\"host\":\"davidplappert.com\",\"key\":\"$KEY\",\"keyLocation\":\"https://davidplappert.com/$KEY.txt\",\"urlList\":[\"https://davidplappert.com/\"]}"
  ```
- **Analytics**: Google Analytics (`G-BJLLYHHYPR`) and Microsoft Clarity (`wx70vzb6p3`) both live in `BaseLayout.astro`.
- **Structured data**: JSON-LD `Person`, `WebSite`, and `ProfessionalService` (with a service OfferCatalog) in `BaseLayout.astro` / `index.astro`.
- **AI crawler access**: `public/robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, etc. `public/llms.txt` provides an LLM-friendly profile summary. `<link rel="alternate" type="text/plain" href="/llms.txt">` in the head.
- **OG image**: `public/og-image.png` (1200×630), regenerated from `og-image.svg` via headless Chrome when the tagline changes.
- **Meta descriptions**: kept to ~150–160 chars (Bing flagged over-long descriptions on 2026-07-01; fixed 2026-07-02).
