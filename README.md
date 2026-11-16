# best2027: local SEO sites for Kadapa

Each folder is a separate Next.js site with its own Vercel project.

| Folder | Vercel project name | Live URL |
| --- | --- | --- |
| `best-hospital-in-kadapa/` | best2027-8uyv | https://best2027-8uyv.vercel.app |
| `best-lawyer-in-kadapa/` | best2027-4xu7 | https://best2027-4xu7.vercel.app |

Each site has landing pages plus a `/blog` of guides. Every guide is original and links to specific pages on the main site (dhruvahospitals.com or rajeshkumarreddyadvocatekadapa.com). To add a guide, add a file in `components/posts/` and list it in `lib/posts.js`. The sitemap and the guides index update automatically.

If you add a custom domain, change the default `SITE` in that site's `lib/site.js` (or set `NEXT_PUBLIC_SITE_URL` in Vercel), then redeploy.

## Connect to Vercel (once per folder)

1. In Vercel, click **Add New → Project** and import `smartlocalai99/best2027`.
2. Enter the project name from the table.
3. Next to **Root Directory**, click **Edit** and choose that folder.
4. Vercel detects Next.js automatically. Leave the build settings as they are and click **Deploy**.

Every push to `main` then redeploys both sites.

To work on a site locally: `cd` into its folder, run `npm install`, then `npm run dev`. If a site moves to a different domain, set `NEXT_PUBLIC_SITE_URL` in that Vercel project.
