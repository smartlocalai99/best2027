import { MAIN, A, practice, courts } from '@/lib/site';
import { pageGraph, pageMetadata, faqSchema } from '@/lib/schema';
import { Shell, CallButton, SiteButton, Stamp, Facts, Register, Profile, AskList, Faq, Reading, FindUs, Closing } from '@/components/ui';

const path = '/';
const title = 'Best Lawyer in Kadapa | Advocate Rajesh Kumar Reddy (Since 1990)';
const description =
  'Advocate Rajesh Kumar Reddy, Kadapa: enrolled 1990 (AP/104/1990), former President of the Kadapa District Bar Association. Civil, criminal, bail, cheque bounce, property and divorce cases, beside Kadapa District Court.';

export const metadata = pageMetadata({ path, title, description });

const faqs = [
  {
    q: 'Who is the best lawyer in Kadapa?',
    a: `<p>The right lawyer depends on your case. Look for an advocate enrolled with the Bar Council, with years of practice in the court where your case will be heard and in your type of matter. ${A.name} was enrolled in ${A.since} (${A.enrolment}), is a former President of the Kadapa District Bar Association, and handles civil, criminal, property and family cases from chambers beside Kadapa District Court.</p>`,
  },
  {
    q: 'How do I check that a lawyer is genuine?',
    a: `<p>Every advocate who practises in India must be enrolled with a State Bar Council and has an enrolment number. Ask for it before you hire. ${A.name}’s enrolment number is ${A.enrolment} with the ${A.council}.</p>`,
  },
  {
    q: 'Where is the office of Advocate Rajesh Kumar Reddy?',
    a: `<p>${A.address}. <a href="${A.maps}" rel="noopener">Open it in Google Maps</a>.</p>`,
  },
  {
    q: 'What are the office hours?',
    a: `<p>${A.hours}. Call ${A.phone.display} first so the advocate is not in court when you arrive.</p>`,
  },
  {
    q: 'What should I bring to the first meeting?',
    a: `<p>Bring any notices, agreements, FIR or court papers you have, and an ID. For a property matter, also bring the title deeds, encumbrance certificate, survey details and tax receipts.</p>`,
  },
  {
    q: 'Which courts does he appear in?',
    a: `<p>Kadapa District Court and the Family Court in Kadapa, courts across YSR Kadapa and Annamayya districts including Proddatur, Rajampet, Badvel and Rayachoty, and the High Court of Andhra Pradesh for appeals and revisions.</p>`,
  },
  {
    q: 'Can I get free legal aid in Kadapa?',
    a: `<p>If you cannot afford a lawyer, you may qualify for free legal aid from the District Legal Services Authority at the district court, under the Legal Services Authorities Act, 1987. The national legal aid helpline is <a href="tel:15100">15100</a>. <a href="${MAIN}/free-legal-aid-kadapa">More on free legal aid in Kadapa</a>.</p>`,
  },
];

const graph = pageGraph({ path, title, description, extra: [faqSchema(faqs)] });

export default function Home() {
  return (
    <Shell path={path} graph={graph}>
      <section className="hero">
        <div className="wrap">
          <div>
            <h1>Best lawyer in Kadapa: Advocate Rajesh Kumar Reddy</h1>
            <p className="lede">
              Rajesh Kumar Reddy has practised law in Kadapa for {A.years} years, since his enrolment in {A.since}. A former President of the Kadapa
              District Bar Association, he handles civil, criminal, property and family cases from chambers beside Kadapa District Court.
            </p>
            <div className="actions">
              <CallButton />
              <SiteButton />
            </div>
            <p className="verify">
              Enrolment {A.enrolment}, {A.council}. Speaks {A.languages}.
            </p>
          </div>
          <Stamp />
        </div>
      </section>

      <Facts
        items={[
          ['Practising since', String(A.since)],
          ['Bar Association', 'Former President'],
          ['Chambers', 'Beside District Court'],
          ['Office hours', A.hoursShort],
        ]}
      />

      <section className="section" aria-labelledby="practice-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="practice-h">Cases he handles</h2>
            <p className="section-intro">
              Each matter below has its own page on the advocate’s official website, explaining how that kind of case is prepared and argued in
              Kadapa.
            </p>
          </div>
          <Register items={practice} />
          <p className="source-note">
            <a href={`${MAIN}/services`}>See every legal service on rajeshkumarreddyadvocatekadapa.com</a>
          </p>
        </div>
      </section>

      <section className="section section-tint" aria-label="About the advocate">
        <div className="wrap">
          <Profile>
            <p>
              Rajesh Kumar Reddy was enrolled with the {A.council} in {A.since} and has practised before Kadapa District Court ever since. He served
              as President of the Kadapa District Bar Association and was instrumental in setting up the State Bank of India branch inside the Kadapa
              District Court complex, used daily by advocates and litigants.
            </p>
            <p>
              Clients come to his office from Kadapa town and from across the district, including Proddatur, Badvel, Pulivendula and Rajampet. Fees
              are discussed after he has reviewed your documents.
            </p>
          </Profile>
        </div>
      </section>

      <section className="section" aria-labelledby="choose-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="choose-h">How to choose the best lawyer in Kadapa</h2>
            <p className="section-intro">Questions worth asking any advocate before you hand over your case, and how {A.name} answers them.</p>
          </div>
          <AskList
            items={[
              ['Are you enrolled with the Bar Council, and what is your enrolment number?', <><strong>{A.enrolment}</strong>, {A.council}, enrolled in {A.since}.</>],
              ['Do you regularly appear in the court where my case will be heard?', <>His chambers are <strong>beside Kadapa District Court</strong>, and he appears in courts across the district and in the High Court of Andhra Pradesh.</>],
              ['Have you handled cases like mine?', <>His practice covers criminal defence and bail, cheque bounce, civil and property suits, revenue matters, and divorce and family cases. Ask about your specific matter when you call.</>],
              ['How will fees be decided?', <>Fees are <strong>explained after a first review of your documents</strong>, based on the work your case needs.</>],
              ['Can I speak to you in Telugu?', <><strong>Yes.</strong> He speaks {A.languages}.</>],
            ]}
          />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="courts-h">
        <div className="wrap">
          <div className="section-head"><h2 id="courts-h">Courts he practises in</h2></div>
          <ul className="courts">
            {courts.map(([c, n]) => (
              <li key={c}>
                <b>{c}</b>
                {n && <span>{n}</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" lang="te" aria-labelledby="te-h">
        <div className="wrap telugu">
          <h2 id="te-h">కడపలో ఉత్తమ న్యాయవాది కోసం చూస్తున్నారా?</h2>
          <p>
            న్యాయవాది రాజేష్ కుమార్ రెడ్డి 1990 నుండి కడప కోర్టులో ప్రాక్టీస్ చేస్తున్నారు (ఎన్‌రోల్‌మెంట్ నంబర్ {A.enrolment}, బార్ కౌన్సిల్ ఆఫ్
            ఆంధ్రప్రదేశ్). ఆయన కడప జిల్లా బార్ అసోసియేషన్ మాజీ అధ్యక్షులు. సివిల్, క్రిమినల్, బెయిల్, చెక్ బౌన్స్, భూమి మరియు ఆస్తి వివాదాలు, విడాకులు
            మరియు కుటుంబ కేసులు చూస్తారు.
          </p>
          <p>
            ఆఫీసు కడప జిల్లా కోర్టు పక్కన ఉంది. ఫోన్: <a href={A.phone.tel}>93463 62201</a> (సోమవారం నుండి శనివారం, ఉదయం 9 నుండి సాయంత్రం 7
            వరకు).
          </p>
        </div>
      </section>

      <FindUs />
      <Faq faqs={faqs} />
      <Reading
        items={[
          ['/blog/how-to-choose-lawyer-kadapa', 'How to choose a lawyer in Kadapa'],
          ['/blog/best-advocate-kadapa-hiring-checklist', 'Checklist for hiring an advocate in Kadapa'],
          ['/blog/kadapa-first-hearing-guide', 'Your first hearing at Kadapa court'],
          ['/blog/kadapa-legal-notice-guide', 'Sending or answering a legal notice'],
          ['/blog/kadapa-court-timeline-expectations', 'How long cases take in Kadapa courts'],
          ['/blog/kadapa-legal-document-checklist', 'Documents to keep ready for a court case'],
        ]}
      />
      <Closing heading="Speak to Advocate Rajesh Kumar Reddy" text={`Call or WhatsApp ${A.phone.display}. Office hours are ${A.hours}.`} />
    </Shell>
  );
}
