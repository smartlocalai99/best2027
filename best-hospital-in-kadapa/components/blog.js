import { MAIN, H } from '@/lib/site';
import { Crumbs, CallButton, DirectionsButton, Closing } from '@/components/ui';

const longDate = (iso) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export function PostLayout({ post, children }) {
  return (
    <>
      <Crumbs items={[['/', 'Best hospital in Kadapa'], ['/blog', 'Guides'], [`/blog/${post.slug}`, post.short]]} />
      <header className="post-head wrap">
        <h1>{post.title}</h1>
        <p className="standfirst">{post.standfirst}</p>
        <p className="post-meta">
          Published by Dhruva Hospitals, Kadapa. Updated <time dateTime={post.date}>{longDate(post.date)}</time>. {post.minutes} minute read.
        </p>
      </header>
      <div className="wrap post-body">
        <article className="prose">
          <section className="keypoints" aria-label="Key points">
            <h2>Key points</h2>
            <ul>
              {post.keypoints.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </section>
          {children}
          <h2>Read more on dhruvahospitals.com</h2>
          <ul>
            {post.related.map(([href, label]) => (
              <li key={href}>
                <a href={href.startsWith('http') ? href : MAIN + href}>{label}</a>
              </li>
            ))}
          </ul>
          <p className="note">
            This guide is general information for families. It does not replace advice from a doctor who has examined you or your child.
          </p>
        </article>
        <aside className="aside-card" aria-label="Contact Dhruva Hospitals">
          <h2>Dhruva Hospitals, Kadapa</h2>
          <p>Beside Raithu Bazar, near Sandhya Circle. Emergency care is open 24 hours; outpatient hours are {H.opd}.</p>
          <CallButton />
          <DirectionsButton />
        </aside>
      </div>
      <Closing heading="Questions about your own situation?" text={`Call or WhatsApp ${H.phone.display} to speak to the hospital.`} />
    </>
  );
}

export function PostList({ posts }) {
  return (
    <ul className="post-list">
      {posts.map((p) => (
        <li key={p.slug}>
          <a href={`/blog/${p.slug}`}>
            <span className="t">{p.title}</span>
            <span className="d">
              {p.description}
              <span className="m">{p.minutes} minute read</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
