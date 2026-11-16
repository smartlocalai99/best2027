import { MAIN, H, docUrl, nav } from '@/lib/site';

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
export const Star = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M32 2 37.2 26.8 62 32 37.2 37.2 32 62 26.8 37.2 2 32 26.8 26.8Z" fill="#F5B700" />
  </svg>
);

// ---------- Buttons ----------
export const CallButton = ({ label = `Call ${H.phone.display}` }) => (
  <a className="btn btn-call" href={H.phone.tel}>
    <PhoneIcon />
    <span>{label}</span>
  </a>
);
export const DirectionsButton = ({ label = 'Get directions' }) => (
  <a className="btn btn-line" href={H.directions} rel="noopener">
    <PinIcon />
    <span>{label}</span>
  </a>
);

// ---------- JSON-LD ----------
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
          <a className="brand" href="/" aria-label="Dhruva Hospitals, Kadapa: home">
            <img src="/images/dhruva-hospitals-logo.png" width="800" height="230" alt="Dhruva Hospitals logo" />
          </a>
          <nav className="nav" aria-label="Main">
            {nav.map((n) => (
              <a key={n.href} href={n.href} aria-current={n.href === path ? 'page' : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-call btn-sm" href={H.phone.tel}>
            <PhoneIcon />
            <span>
              Call<span className="long"> {H.phone.display}</span>
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
          <div className="cols">
            <div>
              <h2>
                <Star className="star" />
                Dhruva Hospitals, Kadapa
              </h2>
              <address>{H.address.full}</address>
              <p style={{ marginTop: 12 }}>
                <a href={H.phone.tel}>{H.phone.display}</a>
                <br />
                <a href={H.phone2.tel}>{H.phone2.display}</a>
                <br />
                <a href={H.landline.tel}>{H.landline.display}</a>
                <br />
                <a href={`mailto:${H.email}`}>{H.email}</a>
              </p>
            </div>
            <div>
              <h2>On this site</h2>
              <ul>
                <li><a href="/">Best hospital in Kadapa</a></li>
                <li><a href="/best-childrens-hospital-in-kadapa">Best children’s hospital in Kadapa</a></li>
                <li><a href="/best-gynecologist-in-kadapa">Best gynecologist in Kadapa</a></li>
                <li><a href="/hospital-near-me-kadapa">Hospital near me in Kadapa</a></li>
              </ul>
            </div>
            <div>
              <h2>dhruvahospitals.com</h2>
              <ul>
                <li><a href={`${MAIN}/`}>Dhruva Hospitals home</a></li>
                <li><a href={`${MAIN}/doctors`}>Our doctors</a></li>
                <li><a href={`${MAIN}/services`}>All departments</a></li>
                <li><a href={`${MAIN}/blog`}>Health blog</a></li>
                <li><a href={`${MAIN}/nri`}>Care for NRI families</a></li>
                <li><a href={`${MAIN}/contact`}>Contact the hospital</a></li>
              </ul>
            </div>
            <div>
              <h2>Follow</h2>
              <ul>
                <li><a href={H.socials.instagram} rel="noopener">Instagram</a></li>
                <li><a href={H.socials.facebook} rel="noopener">Facebook</a></li>
                <li><a href={H.socials.youtube} rel="noopener">YouTube</a></li>
                <li><a href={H.maps} rel="noopener">Google Maps</a></li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <p>
              This site is published by Dhruva Hospitals, Kadapa. Registered under the A.P. Allopathic Private Medical Care Establishments
              (Registration and Regulation) Act, 2002, file no. {H.registration.file}. Health information here is general. For advice about your
              own situation, see a doctor.
            </p>
            <p>© 2026 Dhruva Hospitals</p>
          </div>
        </div>
      </footer>
      <nav className="callbar" aria-label="Contact the hospital">
        <a className="call" href={H.phone.tel}><PhoneIcon />Call</a>
        <a href={H.whatsapp} rel="noopener"><ChatIcon />WhatsApp</a>
        <a href={H.directions} rel="noopener"><PinIcon />Directions</a>
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
export const SignBand = ({ facts }) => (
  <section className="signband on-sign" aria-label="Key facts">
    <div className="wrap">
      <dl>
        {facts.map(([dt, dd]) => (
          <div className="fact" key={dt}>
            <dt>{dt}</dt>
            <dd>{dd}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export const BuildingSpot = ({ caption }) => (
  <figure className="spot">
    <div className="spot-frame">
      <img
        src="/images/dhruva-hospitals-kadapa-building.webp"
        width="753"
        height="1024"
        alt="Dhruva Hospitals building in Kadapa, a corner building with blue Dhruva Hospitals signs in Telugu and English on the roof"
        fetchPriority="high"
      />
      <span className="spot-ring" aria-hidden="true" />
    </div>
    <figcaption>{caption}</figcaption>
  </figure>
);

export const Directory = ({ items }) => (
  <ul className="directory on-sign">
    {items.map((d) => (
      <li key={d.dept}>
        <a href={d.href.startsWith('/') && !d.local ? MAIN + d.href : d.href}>
          <span className="dept">{d.dept}</span>
          <span className="covers">{d.covers}</span>
          <span className="who">{d.who}</span>
        </a>
      </li>
    ))}
  </ul>
);

export const DoctorCard = ({ d }) => (
  <figure className="doctor">
    <img src={d.img} width={d.w} height={d.h} alt={d.name} loading="lazy" style={{ objectPosition: d.pos }} />
    <figcaption>
      <h3><a href={docUrl(d)}>{d.name}</a></h3>
      <p className="role">{d.role}</p>
      <p className="creds">{d.creds} Speaks {d.langs}.</p>
    </figcaption>
  </figure>
);

export const FeatureDoctor = ({ d, children }) => (
  <div className="feature">
    <img src={d.img} width={d.w} height={d.h} alt={d.name} loading="lazy" style={{ objectPosition: d.pos }} />
    <div>
      <h2>{d.name}</h2>
      <p className="role">{d.role}</p>
      {children}
      <dl>
        <div><dt>Qualifications</dt><dd>{d.creds}</dd></div>
        <div><dt>Languages</dt><dd>{d.langs}</dd></div>
      </dl>
      <p style={{ marginTop: 20 }}>
        <a href={docUrl(d)}>Read {d.name}’s full profile on dhruvahospitals.com</a>
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

// FAQ answers are trusted, hand-written HTML strings so the same text feeds the FAQPage schema.
export const Faq = ({ faqs, heading = 'Questions families ask' }) => (
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

export const Reading = ({ items, heading = 'Read more on dhruvahospitals.com' }) => (
  <section className="section section-tint" aria-labelledby="read-h">
    <div className="wrap">
      <div className="section-head"><h2 id="read-h">{heading}</h2></div>
      <ul className="reading">
        {items.map(([href, label, note]) => (
          <li key={href}>
            <a href={href.startsWith('http') ? href : MAIN + href}>{label}</a>
            {note && <small>{note}</small>}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const MapFrame = () => (
  <iframe
    className="map"
    src={H.mapEmbed}
    title="Map showing Dhruva Hospitals beside Raithu Bazar, Kadapa"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />
);

export const FindUs = ({ heading = 'Find Dhruva Hospitals near Sandhya Circle' }) => (
  <section className="section" aria-labelledby="find-h" id="find-us">
    <div className="wrap findus">
      <div>
        <h2 id="find-h">{heading}</h2>
        <address className="address">{H.address.full}</address>
        <ul className="contact-list">
          <li><span>Landmarks</span><b>Beside Raithu Bazar, near Sandhya Circle</b></li>
          <li><span>Emergency</span><b>Open 24 hours</b></li>
          <li><span>Outpatient (OPD)</span><b>{H.opd}</b></li>
          <li><span>Appointments</span><a href={H.phone.tel}>{H.phone.display}</a></li>
          <li><span>WhatsApp</span><a href={H.whatsapp} rel="noopener">Message the hospital</a></li>
        </ul>
        <div className="actions">
          <DirectionsButton />
          <a className="btn btn-line" href="/hospital-near-me-kadapa">How to find the building</a>
        </div>
      </div>
      <MapFrame />
    </div>
  </section>
);

export const Closing = ({ heading, text }) => (
  <section className="closing on-sign" aria-label="Book an appointment">
    <div className="wrap">
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="actions">
        <CallButton />
        <a className="btn btn-line" href={H.whatsapp} rel="noopener">
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
