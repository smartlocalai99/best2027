# best2027: local SEO sites for Kadapa

Each folder is a separate Next.js site with its own Vercel project.

| Folder | Vercel project name | Live URL |
| --- | --- | --- |
| `best-hospital-in-kadapa/` | best-hospital-in-kadapa | https://best-hospital-in-kadapa.vercel.app |
| `best-lawyer-in-kadapa/` | best-lawyer-in-kadapa | https://best-lawyer-in-kadapa.vercel.app |

## Connect to Vercel (once per folder)

1. In Vercel, click **Add New → Project** and import `smartlocalai99/best2027`.
2. Enter the project name from the table.
3. Next to **Root Directory**, click **Edit** and choose that folder.
4. Vercel detects Next.js automatically. Leave the build settings as they are and click **Deploy**.

Every push to `main` then redeploys both sites.

To work on a site locally: `cd` into its folder, run `npm install`, then `npm run dev`. If a site moves to a different domain, set `NEXT_PUBLIC_SITE_URL` in that Vercel project.
