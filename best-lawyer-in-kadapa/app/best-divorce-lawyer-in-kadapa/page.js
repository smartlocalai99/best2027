import { MAIN, A } from '@/lib/site';
import { pageGraph, pageMetadata, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { Shell, CallButton, SiteButton, Stamp, Facts, Register, Profile, Steps, Faq, Reading, FindUs, Closing, Crumbs } from '@/components/ui';

const path = '/best-divorce-lawyer-in-kadapa';
const title = 'Best Divorce & Family Lawyer in Kadapa | Rajesh Kumar Reddy';
const description =
  'Divorce, maintenance, child custody and domestic violence cases at the Family Court, Kadapa, with Advocate Rajesh Kumar Reddy, practising beside Kadapa District Court since 1990.';

export const metadata = pageMetadata({ path, title, description });

const faqs = [
  {
    q: 'Who is the best divorce lawyer in Kadapa?',
    a: `<p>Look for an advocate who appears regularly in the Family Court in Kadapa, explains your options clearly, including settlement, and keeps your matter confidential. ${A.name} handles divorce, maintenance, custody and domestic violence cases from chambers beside Kadapa District Court.</p>`,
  },
  {
    q: 'How long does a mutual consent divorce take?',
    a: `<p>After the joint petition is filed, the law sets a six-month waiting period before the second motion. The court can waive this in suitable cases, and the Supreme Court has held that the waiting period is not mandatory.</p>`,
  },
  {
    q: 'Can I get maintenance while the case is going on?',
    a: `<p>Yes. A spouse without enough income can ask for interim maintenance and litigation expenses while the case is pending, for example under Section 24 of the Hindu Marriage Act. Separate maintenance claims can be made under Section 144 of the BNSS. <a href="${MAIN}/maintenance-kadapa">Maintenance cases in Kadapa</a>.</p>`,
  },
  {
    q: 'Who gets custody of the children?',
    a: `<p>The court decides custody on the welfare of the child, considering age, schooling, care and stability. The other parent is usually given visitation. <a href="${MAIN}/child-custody-kadapa">Child custody in Kadapa</a>.</p>`,
  },
  {
    q: 'Are family court cases kept private?',
    a: `<p>Under the Family Courts Act, 1984, the court can hold proceedings in private (in camera) if it wishes or if either party asks. Your consultation with the advocate is confidential.</p>`,
  },
];

const graph = pageGraph({
  path,
  title,
  description,
  extra: [faqSchema(faqs), breadcrumbSchema([['/', 'Best lawyer in Kadapa'], [path, 'Best divorce lawyer in Kadapa']])],
});

export default function DivorceLawyer() {
  return (
    <Shell path={path} graph={graph}>
      <Crumbs items={[['/', 'Best lawyer in Kadapa'], [path, 'Divorce and family lawyer']]} />
      <section className="hero wide">
        <div className="wrap">
          <div>
            <h1>Best divorce and family lawyer in Kadapa</h1>
            <p className="lede">
              Mutual and contested divorce, maintenance, child custody and domestic violence cases at the Family Court in Kadapa, handled
              confidentially by Advocate Rajesh Kumar Reddy, in practice since {A.since}.
            </p>
            <div className="actions">
              <CallButton />
              <SiteButton path="/family-court-kadapa" label="Family law on his website" />
            </div>
          </div>
          <Stamp />
        </div>
      </section>

      <Facts
        items={[
          ['Divorce', 'Mutual and contested'],
          ['Maintenance', 'Spouse, children, parents'],
          ['Custody', 'Custody and visitation'],
          ['Protection', 'Domestic violence cases'],
        ]}
      />

      <section className="section" aria-labelledby="practice-h">
        <div className="wrap">
          <div className="section-head"><h2 id="practice-h">Family matters he handles</h2></div>
          <Register
            items={[
              { matter: 'Divorce', covers: 'Mutual consent and contested divorce', href: '/divorce-lawyer-kadapa' },
              { matter: 'Maintenance and alimony', covers: 'Interim and permanent maintenance for spouse and children', href: '/maintenance-kadapa' },
              { matter: 'Child custody', covers: 'Custody, guardianship and visitation', href: '/child-custody-kadapa' },
              { matter: 'Domestic violence', covers: 'Protection, residence and monetary relief under the 2005 Act', href: '/domestic-violence-kadapa' },
              { matter: 'Restitution of conjugal rights', covers: 'Petitions to resume married life', href: '/rcr-kadapa' },
              { matter: 'Family Court, Kadapa', covers: 'All matters before the Family Court', href: '/family-court-kadapa' },
            ]}
          />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="mutual-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="mutual-h">Mutual consent divorce: how it works</h2>
            <p className="section-intro">
              Under Section 13B of the Hindu Marriage Act, 1955. Marriages under the Special Marriage Act follow a similar process under Section 28.
            </p>
          </div>
          <Steps
            items={[
              ['Live separately for at least a year', 'and agree to divorce, including on maintenance, custody and property.'],
              ['File a joint petition', 'in the Family Court (the first motion).'],
              ['Wait six months.', 'The court can waive this waiting period in suitable cases.'],
              ['Confirm at the second motion,', 'and the court grants the divorce decree.'],
            ]}
          />
          <p className="law-note">
            <a href={`${MAIN}/blog/kadapa-family-court-divorce-maintenance`}>Divorce and maintenance at the Kadapa Family Court</a> explains contested
            divorce as well.
          </p>
        </div>
      </section>

      <section className="section" aria-label="About the advocate">
        <div className="wrap">
          <Profile>
            <p>
              Rajesh Kumar Reddy appears before the Family Court in Kadapa in divorce, maintenance, custody and domestic violence cases, and helps
              families reach settlements where that is possible. He has practised in Kadapa since {A.since}.
            </p>
          </Profile>
        </div>
      </section>

      <Faq faqs={faqs} />
      <Reading
        items={[
          ['/blog/kadapa-family-court-divorce-maintenance', 'Divorce and maintenance in Kadapa'],
          ['/blog/kadapa-child-custody-visitation', 'Child custody and visitation'],
          ['/blog/kadapa-domestic-violence-protection', 'Protection from domestic violence'],
          ['/blog/kadapa-family-court-mediation', 'Mediation at the Family Court'],
          ['/blog/kadapa-family-court-digital-evidence', 'WhatsApp and digital evidence in family cases'],
        ]}
      />
      <FindUs heading="Family lawyer office beside Kadapa District Court" />
      <Closing heading="Talk it through in confidence" text={`Call or WhatsApp ${A.phone.display}. Office hours are ${A.hours}.`} />
    </Shell>
  );
}
