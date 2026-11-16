import { MAIN, A } from '@/lib/site';
import { pageGraph, pageMetadata, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { Shell, CallButton, SiteButton, Stamp, Facts, Register, Profile, Steps, Faq, Reading, FindUs, Closing, Crumbs } from '@/components/ui';

const path = '/best-criminal-lawyer-in-kadapa';
const title = 'Best Criminal Lawyer in Kadapa | Bail & Cheque Bounce Cases';
const description =
  'Criminal defence, bail, anticipatory bail, NDPS and cheque bounce cases in Kadapa with Advocate Rajesh Kumar Reddy, practising beside Kadapa District Court since 1990.';

export const metadata = pageMetadata({ path, title, description });

const faqs = [
  {
    q: 'Who is the best criminal lawyer in Kadapa?',
    a: `<p>For a criminal case, look for an advocate who appears regularly in the Sessions and Magistrate courts where your case is listed and who can move quickly on bail. ${A.name} has defended criminal cases in Kadapa since ${A.since} and has chambers beside the District Court.</p>`,
  },
  {
    q: 'Can I get anticipatory bail in Kadapa?',
    a: `<p>If you fear arrest for a non-bailable offence, you can apply for anticipatory bail before the Sessions Court or the High Court under Section 482 of the BNSS (Section 438 of the old CrPC). Whether it is granted depends on the facts of the case. <a href="${MAIN}/bail-lawyer-kadapa">Bail and anticipatory bail in Kadapa</a>.</p>`,
  },
  {
    q: 'Is a cheque bounce a criminal case?',
    a: `<p>Yes. Dishonour of a cheque for a debt is an offence under Section 138 of the Negotiable Instruments Act, punishable with imprisonment of up to two years, a fine of up to twice the cheque amount, or both. Strict time limits apply to the notice and the complaint.</p>`,
  },
  {
    q: 'Do you handle NDPS cases?',
    a: `<p>Yes. NDPS cases, sessions trials and offences such as those under Sections 498A, 307 and 376 of the IPC (and their BNS equivalents) are part of his criminal practice. <a href="${MAIN}/ndps-lawyer-kadapa">NDPS cases in Kadapa</a>.</p>`,
  },
  {
    q: 'Can a conviction be appealed?',
    a: `<p>Yes. Convictions and orders can be challenged by appeal or revision before the higher court, up to the High Court of Andhra Pradesh. Appeals have time limits, so act quickly. <a href="${MAIN}/criminal-appeals-kadapa">Criminal appeals in Kadapa</a>.</p>`,
  },
];

const graph = pageGraph({
  path,
  title,
  description,
  extra: [faqSchema(faqs), breadcrumbSchema([['/', 'Best lawyer in Kadapa'], [path, 'Best criminal lawyer in Kadapa']])],
});

export default function CriminalLawyer() {
  return (
    <Shell path={path} graph={graph}>
      <Crumbs items={[['/', 'Best lawyer in Kadapa'], [path, 'Criminal lawyer']]} />
      <section className="hero wide">
        <div className="wrap">
          <div>
            <h1>Best criminal lawyer in Kadapa for bail, trials and cheque bounce cases</h1>
            <p className="lede">
              Advocate Rajesh Kumar Reddy has defended criminal cases in the Kadapa courts since {A.since}: bail and anticipatory bail, sessions trials,
              NDPS cases, cheque bounce complaints, and appeals to the High Court.
            </p>
            <div className="actions">
              <CallButton />
              <SiteButton path="/criminal-lawyer-kadapa" label="Criminal law on his website" />
            </div>
          </div>
          <Stamp />
        </div>
      </section>

      <Facts
        items={[
          ['Bail', 'Regular and anticipatory'],
          ['Trials', 'Sessions and magistrate courts'],
          ['Cheque bounce', 'Section 138 NI Act'],
          ['Appeals', 'Up to the High Court'],
        ]}
      />

      <section className="section" aria-labelledby="practice-h">
        <div className="wrap">
          <div className="section-head"><h2 id="practice-h">Criminal matters he handles</h2></div>
          <Register
            items={[
              { matter: 'Bail and anticipatory bail', covers: 'Applications before the Magistrate, Sessions Court and High Court', href: '/bail-lawyer-kadapa' },
              { matter: 'Sessions trials', covers: 'Defence in serious offences, cross-examination and final arguments', href: '/sessions-trials-kadapa' },
              { matter: 'IPC and BNS offences', covers: 'Including cases under Sections 498A, 307 and 376 and their BNS equivalents', href: '/ipc-offences-kadapa' },
              { matter: 'NDPS cases', covers: 'Narcotics cases, including bail and trial', href: '/ndps-lawyer-kadapa' },
              { matter: 'Cheque bounce', covers: 'Legal notice, complaint and defence under Section 138 NI Act', href: '/cheque-bounce-lawyer-kadapa' },
              { matter: 'Criminal appeals', covers: 'Appeals against conviction or acquittal', href: '/criminal-appeals-kadapa' },
              { matter: 'Criminal revisions', covers: 'Challenging orders of the lower court', href: '/criminal-revisions-kadapa' },
            ]}
          />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="fir-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="fir-h">If a police case (FIR) has been registered against you</h2>
            <p className="section-intro">
              General steps people in Kadapa usually take. Your own situation may need a different approach, so speak to an advocate early.
            </p>
          </div>
          <Steps
            items={[
              ['Collect the papers.', 'Get a copy of the FIR and keep every notice or document the police give you.'],
              ['Check the sections.', 'The sections in the FIR decide whether the offence is bailable and which court will hear it.'],
              ['Speak to an advocate before you are arrested, if you can.', 'Anticipatory bail is applied for before arrest, in the Sessions Court or High Court.'],
              ['Answer notices and attend when called.', 'Keep copies of everything you sign or submit.'],
            ]}
          />
          <p className="law-note">
            Since 1 July 2024, the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA) have
            replaced the IPC, CrPC and Evidence Act. Cases registered earlier may still refer to the old section numbers.{' '}
            <a href={`${MAIN}/blog/kadapa-new-criminal-laws-bns-bnss-bsa-2025`}>What the new criminal laws change</a>.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="cheque-h">
        <div className="wrap">
          <div className="section-head"><h2 id="cheque-h">Cheque bounce cases: the time limits</h2></div>
          <Steps
            items={[
              ['Present the cheque', 'within its validity, which is three months from the date on it.'],
              ['The bank returns it unpaid', 'and gives you a return memo.'],
              ['Send a legal notice within 30 days', 'of receiving the memo, demanding payment.'],
              ['The drawer has 15 days', 'from receiving the notice to pay.'],
              ['File the complaint within one month', 'after those 15 days end, if payment is not made.'],
            ]}
          />
          <p className="law-note">
            Under Sections 138 and 142 of the Negotiable Instruments Act, 1881.{' '}
            <a href={`${MAIN}/blog/kadapa-cheque-bounce-case-process`}>The cheque bounce process in Kadapa, step by step</a>.
          </p>
        </div>
      </section>

      <section className="section section-tint" aria-label="About the advocate">
        <div className="wrap">
          <Profile>
            <p>
              Rajesh Kumar Reddy has practised before Kadapa District Court since {A.since}, including the Sessions Court, and takes appeals and
              revisions to the High Court of Andhra Pradesh. He is a former President of the Kadapa District Bar Association.
            </p>
          </Profile>
        </div>
      </section>

      <Faq faqs={faqs} />
      <Reading
        items={[
          ['/blog/criminal-lawyer-kadapa-fir-response', 'What to do after an FIR in Kadapa'],
          ['/blog/kadapa-bail-anticipatory-bail-guide', 'Bail and anticipatory bail in Kadapa'],
          ['/blog/kadapa-sessions-trial-preparation', 'Preparing for a sessions trial'],
          ['/blog/kadapa-cheque-bounce-case-process', 'The cheque bounce case process'],
          ['/blog/kadapa-new-criminal-laws-bns-bnss-bsa-2025', 'The new criminal laws: BNS, BNSS and BSA'],
          ['/blog/kadapa-cyber-fraud-legal-steps', 'Legal steps after a cyber fraud'],
        ]}
      />
      <FindUs heading="Criminal lawyer office beside Kadapa District Court" />
      <Closing heading="Facing a criminal case?" text={`Call or WhatsApp ${A.phone.display}. Bring the FIR and any notices you have received.`} />
    </Shell>
  );
}
