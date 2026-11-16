# Best Hospital in Kadapa: Dhruva Hospitals (SEO microsite)

A static, four-page site for local search terms like "best hospital in Kadapa", "best pediatrician in Kadapa", "best gynecologist in Kadapa" and "hospital near me". Every department, doctor and article on it links to its page on https://www.dhruvahospitals.com.

| Page | Target searches |
| --- | --- |
| `/` | best hospital in Kadapa, hospitals in Kadapa |
| `/best-childrens-hospital-in-kadapa` | best pediatrician / children's hospital / NICU in Kadapa |
| `/best-gynecologist-in-kadapa` | best gynecologist / maternity hospital / fertility centre in Kadapa |
| `/hospital-near-me-kadapa` | hospital near me, hospital near Sandhya Circle / Raithu Bazar |

## Deploy on Vercel

1. In Vercel, click **Add New → Project** and import this repo.
2. Name the project **best-hospital-in-kadapa** and set **Root Directory** to `best-hospital-in-kadapa`. Leave Framework as **Other** and leave the build settings empty. `vercel.json` already serves the `public/` folder with clean URLs.
3. Click **Deploy**.

If Vercel gives you a different domain (or you add a custom one), point the canonical URLs, sitemap and schema at it:

```sh
cd best-hospital-in-kadapa
SITE_URL=https://your-domain.example node build.mjs
git commit -am "Set site URL" && git push
```

After it is live, add the domain to Google Search Console and Bing Webmaster Tools, and submit `/sitemap.xml`.

## Editing

All page content and hospital facts live in `build.mjs`. Edit it, run `node build.mjs`, and commit the regenerated `public/` folder. Vercel needs no build step.

Facts mirror `lib/site.js` and `lib/data.js` in the main Dhruva repo. The address matches the Google Business Profile exactly. Keep the two in sync.
