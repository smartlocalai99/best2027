import { MAIN, A } from '@/lib/site';
import { pageGraph, pageMetadata, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { Shell, CallButton, SiteButton, Stamp, Facts, Register, Profile, Faq, Reading, FindUs, Closing, Crumbs } from '@/components/ui';

const path = '/best-property-lawyer-in-kadapa';
const title = 'Best Property & Land Lawyer in Kadapa | Rajesh Kumar Reddy';
const description =
  'Land and property disputes, partition and injunction suits, title verification and revenue record matters in Kadapa with Advocate Rajesh Kumar Reddy, practising since 1990.';

export const metadata = pageMetadata({ path, title, description });

const faqs = [
  {
    q: 'Who is the best property lawyer in Kadapa?',
    a: `<p>For a land or property dispute, look for an advocate who knows both the civil courts and the revenue side, because many Kadapa disputes involve records as well as title. ${A.name} has handled civil, property and revenue matters in Kadapa since ${A.since}.</p>`,
  },
  {
    q: 'What is an injunction?',
    a: `<p>An injunction is a court order stopping someone from doing something, such as interfering with your possession of land. A temporary injunction can be granted while the suit is pending; a permanent injunction is granted in the final decree. <a href="${MAIN}/injunction-cases-kadapa">Injunction suits in Kadapa</a>.</p>`,
  },
  {
    q: 'Can a mistake in the land records (Adangal / 1-B) be corrected?',
    a: `<p>Yes. Errors in revenue records can be corrected by applying to the revenue authorities, with appeals available if the application is refused. Where the dispute is about who owns the land, a civil suit may also be needed. <a href="${MAIN}/revenue-cases-kadapa">Revenue matters in Kadapa</a>.</p>`,
  },
  {
    q: 'Should I get the title checked before buying land?',
    a: `<p>Yes. A title check traces ownership through earlier deeds and the encumbrance certificate, and confirms the seller has the right to sell before you pay. <a href="${MAIN}/title-verification-kadapa">Title verification in Kadapa</a>.</p>`,
  },
  {
    q: 'How is family property divided?',
    a: `<p>Co-owners can divide property by agreement, through a registered partition deed. If they cannot agree, any co-owner can file a partition suit in the civil court. <a href="${MAIN}/partition-suits-kadapa">Partition suits in Kadapa</a>.</p>`,
  },
];

const graph = pageGraph({
  path,
  title,
  description,
  extra: [faqSchema(faqs), breadcrumbSchema([['/', 'Best lawyer in Kadapa'], [path, 'Best property lawyer in Kadapa']])],
});

export default function PropertyLawyer() {
  return (
    <Shell path={path} graph={graph}>
      <Crumbs items={[['/', 'Best lawyer in Kadapa'], [path, 'Property and civil lawyer']]} />
      <section className="hero wide">
        <div className="wrap">
          <div>
            <h1>Best property and civil lawyer in Kadapa</h1>
            <p className="lede">
              Land and property disputes, partition and injunction suits, title checks before you buy, and corrections to revenue records, handled by
              Advocate Rajesh Kumar Reddy in the Kadapa civil and revenue courts since {A.since}.
            </p>
            <div className="actions">
              <CallButton />
              <SiteButton path="/property-disputes-kadapa" label="Property law on his website" />
            </div>
          </div>
          <Stamp />
        </div>
      </section>

      <Facts
        items={[
          ['Suits', 'Partition and injunction'],
          ['Before buying', 'Title verification'],
          ['Records', 'Revenue corrections'],
          ['Appeals', 'Up to the High Court'],
        ]}
      />

      <section className="section" aria-labelledby="practice-h">
        <div className="wrap">
          <div className="section-head"><h2 id="practice-h">Civil and property matters he handles</h2></div>
          <Register
            items={[
              { matter: 'Property disputes', covers: 'Possession, boundary and ownership disputes', href: '/property-disputes-kadapa' },
              { matter: 'Land disputes', covers: 'Agricultural and urban land, encroachment', href: '/land-disputes-kadapa' },
              { matter: 'Partition suits', covers: 'Dividing family or jointly owned property', href: '/partition-suits-kadapa' },
              { matter: 'Injunction and declaration suits', covers: 'Stopping interference, declaring rights', href: '/injunction-cases-kadapa' },
              { matter: 'Title verification', covers: 'Checking ownership before you buy', href: '/title-verification-kadapa' },
              { matter: 'Sale deeds', covers: 'Drafting and checking sale deeds and registration papers', href: '/sale-deed-kadapa' },
              { matter: 'Succession and inheritance', covers: 'Succession certificates, wills and family settlements', href: '/succession-kadapa' },
              { matter: 'Revenue court matters', covers: 'Land record corrections and revenue disputes', href: '/revenue-cases-kadapa' },
              { matter: 'Civil suits and recovery', covers: 'Money recovery and other civil suits', href: '/civil-suits-kadapa' },
              { matter: 'Rent control and execution', covers: 'Eviction, rent disputes and enforcing decrees', href: '/rent-control-kadapa' },
            ]}
          />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="docs-h">
        <div className="wrap cols">
          <div>
            <h2 id="docs-h">Documents to gather for a land or property case</h2>
            <p className="section-intro">Bring whatever you have to the first meeting. Copies are fine to start with.</p>
          </div>
          <ul className="ticks">
            <li>Sale deed, gift deed or partition deed for the property</li>
            <li>Earlier (link) documents showing how ownership passed</li>
            <li>Encumbrance certificate (EC)</li>
            <li>Pattadar passbook and title deed</li>
            <li>Adangal and 1-B (ROR) extracts</li>
            <li>Survey number details and FMB sketch</li>
            <li>Property or house tax receipts</li>
            <li>Any legal notice, police complaint or court papers</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-label="About the advocate">
        <div className="wrap">
          <Profile>
            <p>
              Rajesh Kumar Reddy has handled civil suits, property and revenue matters before Kadapa District Court and the junior civil judge courts
              across the district since {A.since}, and takes appeals to the High Court of Andhra Pradesh.
            </p>
          </Profile>
        </div>
      </section>

      <Faq faqs={faqs} />
      <Reading
        items={[
          ['/blog/property-dispute-lawyer-kadapa-possession', 'Possession disputes over property'],
          ['/blog/kadapa-partition-suit-guide', 'Partition suits explained'],
          ['/blog/kadapa-injunction-order-guide', 'Getting an injunction order'],
          ['/blog/kadapa-property-title-verification', 'Property title verification'],
          ['/blog/kadapa-boundary-dispute-survey', 'Boundary disputes and land surveys'],
          ['/blog/kadapa-revenue-record-corrections', 'Correcting revenue records'],
          ['/blog/kadapa-sale-deed-registration', 'Sale deed registration'],
          ['/blog/kadapa-will-vs-family-settlement', 'Will or family settlement?'],
        ]}
      />
      <FindUs heading="Property lawyer office beside Kadapa District Court" />
      <Closing heading="Have a land or property problem?" text={`Call or WhatsApp ${A.phone.display} and bring your property documents to the first meeting.`} />
    </Shell>
  );
}
