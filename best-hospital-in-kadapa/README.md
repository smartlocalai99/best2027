# Best Hospital in Kadapa: Dhruva Hospitals (SEO microsite)

A static, four-page site for local search terms like "best hospital in Kadapa", "best pediatrician in Kadapa", "best gynecologist in Kadapa" and "hospital near me". Every department, doctor and article on it links to its page on https://www.dhruvahospitals.com.

| Page | Target searches |
| --- | --- |
| `/` | best hospital in Kadapa, hospitals in Kadapa |
| `/best-childrens-hospital-in-kadapa` | best pediatrician / children's hospital / NICU in Kadapa |
| `/best-gynecologist-in-kadapa` | best gynecologist / maternity hospital / fertility centre in Kadapa |
| `/hospital-near-me-kadapa` | hospital near me, hospital near Sandhya Circle / Raithu Bazar |

## Deploy on Vercel

Import `smartlocalai99/best2027`, name the project **best-hospital-in-kadapa**, and set **Root Directory** to `best-hospital-in-kadapa`. Vercel detects Next.js automatically. Click **Deploy**.

If the site lives on a different domain, set the environment variable `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.example`) in Vercel and redeploy. Canonical URLs, the sitemap and the schema all use it.

After it is live, add the domain to Google Search Console and Bing Webmaster Tools, and submit `/sitemap.xml`.

## Editing

This is a Next.js 16 App Router site with every page statically generated.

- `lib/site.js`: hospital facts, doctors, departments and the sitemap page list
- `lib/schema.js`: JSON-LD and page metadata helpers
- `components/ui.js`: shared blocks (header, footer, directory, FAQ and so on)
- `app/*/page.js`: one file per page
- `app/globals.css`: all styles

Run `npm install`, then `npm run dev` to preview at http://localhost:3000.

Facts mirror `lib/site.js` and `lib/data.js` in the main Dhruva repo. The address matches the Google Business Profile exactly. Keep the two in sync.
