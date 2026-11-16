import { MAIN, A, nav, link } from '@/lib/site';

// ---------- Icons ----------
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
export const PinIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
export const ChatIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
export const WebIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// ---------- Buttons ----------
export const CallButton = ({ label = `Call ${A.phone.display}` }) => (
  <a className="btn btn-call" href={A.phone.tel}>
    <PhoneIcon />
    <span>{label}</span>
  </a>
);
export const SiteButton = ({ path = '/', label = 'Visit his website' }) => (
  <a className="btn btn-line" href={link(path)}>
    <WebIcon />
    <span>{label}</span>
  </a>
);

export const JsonLd = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
);

// ---------- Page shell ----------
function Header({ path }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="topbar">
        <div className="wrap">
          <a className="brand" href="/">
            <b>Rajesh Kumar Reddy</b>
            <span>Advocate, Kadapa</span>
          </a>
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <a key={n.href} href={n.href} aria-current={n.href === path ? 'page' : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-call btn-sm" href={A.phone.tel}>
            <PhoneIcon />
            <span>
              Call<span className="long"> {A.phone.display}</span>
            </span>
          </a>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="cols4">
            <div>
              <h2>{A.office}</h2>
              <address>{A.address}</address>
              <p style={{ marginTop: 12 }}>
                <a href={A.phone.tel}>{A.phone.display}</a>
                <br />
                <a href={`mailto:${A.email}`}>{A.email}</a>
                <br />
                {A.hoursShort}
              </p>
            </div>
            <div>
              <h2>On this site</h2>
              <ul>
                <li><a href="/">Best lawyer in Kadapa</a></li>
                <li><a href="/best-criminal-lawyer-in-kadapa">Best criminal lawyer in Kadapa</a></li>
                <li><a href="/best-property-lawyer-in-kadapa">Best property lawyer in Kadapa</a></li>
                <li><a href="/best-divorce-lawyer-in-kadapa">Best divorce lawyer in Kadapa</a></li>
              </ul>
            </div>
            <div>
              <h2>Official website</h2>
              <ul>
                <li><a href={`${MAIN}/`}>rajeshkumarreddyadvocatekadapa.com</a></li>
                <li><a href={`${MAIN}/about`}>About the advocate</a></li>
                <li><a href={`${MAIN}/services`}>Legal services</a></li>
                <li><a href={`${MAIN}/blog`}>Legal guides</a></li>
                <li><a href={`${MAIN}/contact`}>Contact the office</a></li>
              </ul>
            </div>
            <div>
              <h2>Follow</h2>
              <ul>
                <li><a href={A.socials.youtube} rel="noopener">YouTube</a></li>
                <li><a href={A.socials.instagram} rel="noopener">Instagram</a></li>
                <li><a href={A.socials.facebook} rel="noopener">Facebook</a></li>
                <li><a href={A.socials.linkedin} rel="noopener">LinkedIn</a></li>
                <li><a href={A.maps} rel="noopener">Google Maps</a></li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <p>
              Under the Bar Council of India Rules, advocates may not solicit work or advertise. This site gives information about {A.name}, Advocate
              (enrolment {A.enrolment}, {A.council}), his practice areas and how to reach his office, for people who are looking for it. It is not
              legal advice and does not create an advocate–client relationship. For advice about your own case, consult an advocate.
            </p>
            <p>© 2026 {A.office}</p>
          </div>
        </div>
      </footer>
      <nav className="callbar" aria-label="Contact the office">
        <a className="call" href={A.phone.tel}><PhoneIcon />Call</a>
        <a href={A.whatsapp} rel="noopener"><ChatIcon />WhatsApp</a>
        <a href={A.maps} rel="noopener"><PinIcon />Office</a>
      </nav>
    </>
  );
}

export function Shell({ path, graph, children }) {
  return (
    <>
      <JsonLd data={graph} />
      <Header path={path} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

// ---------- Content blocks ----------
export const Facts = ({ items }) => (
  <section className="facts" aria-label="Key facts">
    <div className="wrap">
      <dl>
        {items.map(([dt, dd]) => (
          <div className="fact" key={dt}>
            <dt>{dt}</dt>
            <dd>{dd}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

// Security-print style background, like Indian non-judicial stamp paper.
const Guilloche = () => (
  <svg className="guilloche" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <pattern id="g" width="48" height="16" patternUnits="userSpaceOnUse">
        <path d="M0 8 Q12 -4 24 8 T48 8" fill="none" stroke="#9DC2AA" strokeWidth="0.9" />
        <path d="M0 8 Q12 20 24 8 T48 8" fill="none" stroke="#9DC2AA" strokeWidth="0.9" />
      </pattern>
    </defs>
    <rect width="400" height="500" fill="url(#g)" opacity="0.55" />
    <rect x="10" y="10" width="380" height="480" fill="none" stroke="#2F6B4F" strokeWidth="2" />
    <rect x="17" y="17" width="366" height="466" fill="none" stroke="#9DC2AA" strokeWidth="1" />
  </svg>
);

export const Stamp = () => (
  <figure style={{ margin: 0 }}>
    <div className="stamp">
      <Guilloche />
      <div className="denom">
        <small>Enrolment no., {A.council}</small>
        <strong>{A.enrolment}</strong>
      </div>
      <img
        src="/images/advocate-rajesh-kumar-reddy-kadapa.webp"
        width="640"
        height="982"
        alt="Advocate Rajesh Kumar Reddy in his court gown and bands"
        fetchPriority="high"
      />
    </div>
    <figcaption className="stamp-caption">
      Every advocate in India is enrolled with a State Bar Council. You can ask for the enrolment number before you hire.
    </figcaption>
  </figure>
);

export const Register = ({ items }) => (
  <ul className="register">
    {items.map((p) => (
      <li key={p.href}>
        <a href={link(p.href)}>
          <span className="matter">{p.matter}</span>
          <span className="covers">{p.covers}</span>
        </a>
      </li>
    ))}
  </ul>
);

export const Profile = ({ children }) => (
  <div className="profile">
    <figure className="photo">
      <img
        src="/images/rajesh-kumar-reddy-advocate-office-kadapa.webp"
        width="900"
        height="1200"
        alt="Advocate Rajesh Kumar Reddy reading case papers at his desk in his chambers in Kadapa, with court gowns hanging behind"
        loading="lazy"
      />
      <figcaption>In his chambers beside Kadapa District Court.</figcaption>
    </figure>
    <div>
      <h2>About Advocate Rajesh Kumar Reddy</h2>
      {children}
      <dl>
        <div><dt>Enrolment</dt><dd>{A.enrolment}, {A.council} (enrolled {A.since})</dd></div>
        <div><dt>Bar Association</dt><dd>Former President, Kadapa District Bar Association</dd></div>
        <div><dt>Chambers</dt><dd>Beside Kadapa District Court, Sarajupeta</dd></div>
        <div><dt>Languages</dt><dd>{A.languages}</dd></div>
      </dl>
      <p style={{ marginTop: 20 }}>
        <a href={`${MAIN}/about`}>Read the full profile of Advocate Rajesh Kumar Reddy</a>
      </p>
    </div>
  </div>
);

export const AskList = ({ items }) => (
  <ul className="asklist">
    {items.map(([q, a]) => (
      <li key={q}>
        <span className="q">{q}</span>
        <span className="a">{a}</span>
      </li>
    ))}
  </ul>
);

export const Steps = ({ items }) => (
  <ol className="steps">
    {items.map(([b, rest]) => (
      <li key={b}>
        <b>{b}</b> {rest}
      </li>
    ))}
  </ol>
);

// FAQ answers are trusted, hand-written HTML strings so the same text feeds the FAQPage schema.
export const Faq = ({ faqs, heading = 'Questions people ask' }) => (
  <section className="section" aria-labelledby="faq-h">
    <div className="wrap">
      <div className="section-head"><h2 id="faq-h">{heading}</h2></div>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <div className="answer" dangerouslySetInnerHTML={{ __html: f.a }} />
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const Reading = ({ items, heading = 'Legal guides on his website' }) => (
  <section className="section section-tint" aria-labelledby="read-h">
    <div className="wrap">
      <div className="section-head"><h2 id="read-h">{heading}</h2></div>
      <ul className="reading">
        {items.map(([href, label]) => (
          <li key={href}><a href={link(href)}>{label}</a></li>
        ))}
      </ul>
    </div>
  </section>
);

export const FindUs = ({ heading = 'Advocate office beside Kadapa District Court' }) => (
  <section className="section" aria-labelledby="find-h" id="office">
    <div className="wrap findus">
      <div>
        <h2 id="find-h">{heading}</h2>
        <address className="address">{A.address}</address>
        <ul className="contact-list">
          <li><span>Office hours</span><b>{A.hoursShort}</b></li>
          <li><span>Phone</span><a href={A.phone.tel}>{A.phone.display}</a></li>
          <li><span>WhatsApp</span><a href={A.whatsapp} rel="noopener">Message the office</a></li>
          <li><span>Email</span><a href={`mailto:${A.email}`}>{A.email}</a></li>
        </ul>
        <div className="actions">
          <a className="btn btn-line" href={A.maps} rel="noopener">
            <PinIcon />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
      <iframe
        className="map"
        src={A.mapEmbed}
        title="Map showing Rajesh Kumar Reddy Advocate Office beside Kadapa District Court"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  </section>
);

export const Closing = ({ heading, text }) => (
  <section className="closing" aria-label="Contact the advocate">
    <div className="wrap">
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="actions">
        <CallButton />
        <a className="btn btn-line" href={A.whatsapp} rel="noopener">
          <ChatIcon />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
);

export const Crumbs = ({ items }) => (
  <nav className="crumbs wrap" aria-label="Breadcrumb">
    <ol>
      {items.map(([href, label], i) =>
        i === items.length - 1 ? (
          <li key={label} aria-current="page">{label}</li>
        ) : (
          <li key={label}><a href={href}>{label}</a></li>
        )
      )}
    </ol>
  </nav>
);
