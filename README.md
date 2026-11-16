# best2027: local SEO sites for Kadapa

Each folder is a separate static site with its own Vercel project.

| Folder | Vercel project name | Live URL |
| --- | --- | --- |
| `best-hospital-in-kadapa/` | best-hospital-in-kadapa | https://best-hospital-in-kadapa.vercel.app |
| `best-lawyer-in-kadapa/` | best-lawyer-in-kadapa | https://best-lawyer-in-kadapa.vercel.app |

## Connect to Vercel (once per folder)

1. In Vercel, click **Add New → Project** and import `smartlocalai99/best2027`.
2. Enter the project name from the table.
3. Next to **Root Directory**, click **Edit** and choose that folder.
4. Leave Framework as **Other** and leave the build settings empty, then click **Deploy**.

Every push to `main` then redeploys both sites.

To edit a site, change its `build.mjs`, run `node build.mjs` inside the folder, and commit the regenerated `public/` folder.
