# Best Lawyer in Kadapa: Advocate Rajesh Kumar Reddy (SEO microsite)

A Next.js site with four statically generated pages for searches like "best lawyer in Kadapa", "best criminal lawyer in Kadapa", "best property lawyer in Kadapa" and "best divorce lawyer in Kadapa". Every practice area and guide links to its page on https://www.rajeshkumarreddyadvocatekadapa.com.

| Page | Target searches |
| --- | --- |
| `/` | best lawyer / advocate in Kadapa, lawyer near me |
| `/best-criminal-lawyer-in-kadapa` | criminal lawyer, bail lawyer, cheque bounce lawyer in Kadapa |
| `/best-property-lawyer-in-kadapa` | property / land / civil lawyer in Kadapa |
| `/best-divorce-lawyer-in-kadapa` | divorce / family court lawyer in Kadapa |

## Deploy on Vercel

Import `smartlocalai99/best2027`, name the project **best-lawyer-in-kadapa**, and set **Root Directory** to `best-lawyer-in-kadapa`. Vercel detects Next.js automatically. Click **Deploy**.

If the site lives on a different domain, set `NEXT_PUBLIC_SITE_URL` in Vercel and redeploy.

## Editing

- `lib/site.js`: the advocate's facts, practice areas, courts and the sitemap page list
- `lib/schema.js`: JSON-LD and page metadata helpers
- `components/ui.js`: shared blocks (header, footer, stamp panel, register, FAQ and so on)
- `app/*/page.js`: one file per page
- `app/globals.css`: all styles

Run `npm install`, then `npm run dev` to preview at http://localhost:3000.

## Content rules

The facts (enrolment AP/104/1990, Bar Association presidency, address, hours, courts) come from the advocate's own website and Google Business Profile. The site does not repeat unverifiable figures such as "5000+ cases" or "98% satisfaction", and it does not use the "Senior Advocate" title. That title is a formal designation under Section 16 of the Advocates Act. A Bar Council of India disclaimer is in the footer.
