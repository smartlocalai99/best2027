import { MAIN, A } from '@/lib/site';
import { Crumbs, CallButton, SiteButton, Closing } from '@/components/ui';

const longDate = (iso) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export function PostLayout({ post, children }) {
  return (
    <>
      <Crumbs items={[['/', 'Best lawyer in Kadapa'], ['/blog', 'Guides'], [`/blog/${post.slug}`, post.short]]} />
      <header className="post-head wrap">
        <h1>{post.title}</h1>
        <p className="standfirst">{post.standfirst}</p>
        <p className="post-meta">
          Published by the {A.office}, Kadapa. Updated <time dateTime={post.date}>{longDate(post.date)}</time>. {post.minutes} minute read.
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
          <h2>Related guides on his website</h2>
          <ul>
            {post.related.map(([href, label]) => (
              <li key={href}>
                <a href={href.startsWith('http') ? href : MAIN + href}>{label}</a>
              </li>
            ))}
          </ul>
          <p className="note">
            This guide is general legal information, not legal advice, and does not create an advocate–client relationship. Laws and procedures
            change; for your own case, consult an advocate.
          </p>
        </article>
        <aside className="aside-card" aria-label="Contact the advocate">
          <h2>Advocate Rajesh Kumar Reddy</h2>
          <p>Enrolment {A.enrolment}. Chambers beside Kadapa District Court. {A.hoursShort}.</p>
          <CallButton />
          <SiteButton />
        </aside>
      </div>
      <Closing heading="Need advice on your own matter?" text={`Call or WhatsApp ${A.phone.display}. Office hours are ${A.hours}.`} />
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
