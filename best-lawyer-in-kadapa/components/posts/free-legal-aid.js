import { MAIN, A } from '@/lib/site';

export const meta = {
  slug: 'free-legal-aid-kadapa-who-qualifies',
  short: 'Free legal aid in Kadapa',
  title: 'Free legal aid in Kadapa: who qualifies and how to apply',
  seoTitle: 'Free Legal Aid in Kadapa: Who Qualifies and How to Apply',
  description:
    'Who can get a free lawyer in Kadapa under the Legal Services Authorities Act, 1987, where to apply, what legal aid covers, and how Lok Adalats settle cases without a long trial.',
  standfirst:
    'Many people who qualify for free legal help never ask for it. If you are a woman, a child, from a Scheduled Caste or Tribe, in custody, or on a low income, the law may entitle you to a lawyer at no cost.',
  date: '2026-11-16',
  minutes: 5,
  keypoints: [
    'Section 12 of the Legal Services Authorities Act, 1987 lists who is entitled to free legal aid, including all women and children.',
    'In Kadapa, apply to the District Legal Services Authority at the district court complex.',
    'Legal aid can cover an advocate, court fees and the cost of preparing your case.',
    'Lok Adalats settle disputes by agreement; the settlement is final and the court fee is refunded on a settled pending case.',
  ],
  related: [
    ['/free-legal-aid-kadapa', 'Free legal aid in Kadapa'],
    ['/blog/kadapa-pre-litigation-mediation-checklist', 'Pre-litigation mediation checklist'],
    ['/blog/kadapa-family-court-mediation', 'Mediation at the Family Court'],
    ['/blog/kadapa-legal-advisory-before-filing', 'Getting legal advice before you file'],
  ],
};

export default function Body() {
  return (
    <>
      <h2>Who qualifies</h2>
      <p>Under Section 12 of the Legal Services Authorities Act, 1987, these people are entitled to free legal services:</p>
      <ul>
        <li>a member of a Scheduled Caste or Scheduled Tribe</li>
        <li>a victim of human trafficking or forced labour (begar)</li>
        <li>a woman or a child</li>
        <li>a person with a disability</li>
        <li>a victim of a mass disaster, ethnic violence, caste atrocity, flood, drought, earthquake or industrial disaster</li>
        <li>an industrial workman</li>
        <li>a person in custody, including in a protective home, juvenile home or psychiatric hospital</li>
        <li>a person whose annual income is below the limit set by the state government</li>
      </ul>
      <p>
        You can apply whether you are the one filing a case or the one defending it. Legal aid is available in civil, criminal, family and other
        matters, and at every level from the district court upwards.
      </p>

      <h2>Where to apply in Kadapa</h2>
      <ul>
        <li>
          <strong>District Legal Services Authority (DLSA), Kadapa.</strong> Its office is in the district court complex. Ask at the court’s front
          office if you cannot find it.
        </li>
        <li><strong>Legal services committees</strong> work at the other court centres in the district, for cases filed there.</li>
        <li><strong>The national legal aid helpline, 15100,</strong> can guide you to the right office.</li>
      </ul>
      <p>Take an ID, any papers about your case, and, if you are applying on income grounds, proof of income or an affidavit about it.</p>

      <h2>What legal aid covers</h2>
      <ul>
        <li>an advocate to represent you, paid by the legal services authority</li>
        <li>court fees and other costs of the case</li>
        <li>drafting of petitions, replies and appeals</li>
        <li>legal advice, even if you do not have a case in court yet</li>
      </ul>

      <h2>Lok Adalats: settling without a long trial</h2>
      <p>
        A Lok Adalat is a forum where both sides settle a dispute by agreement, with the help of a judicial officer and other members. It can take up
        cases already pending in court or disputes that have not reached court yet. Common examples are money recovery, motor accident claims,
        family disputes, cheque bounce cases and bank loans.
      </p>
      <ul>
        <li>The settlement (award) is treated as a civil court decree. It is final, and there is no appeal against it.</li>
        <li>When a pending case is settled in a Lok Adalat, the court fee paid is refunded.</li>
        <li>National Lok Adalats are held on fixed days across the country, including in Kadapa. Ask at the DLSA for the next date.</li>
        <li>
          Permanent Lok Adalats deal with disputes about public utility services such as transport, post, telephone, electricity, water supply,
          hospitals and insurance.
        </li>
      </ul>

      <h2>If you prefer to choose your own advocate</h2>
      <p>
        Legal aid assigns an advocate from its panel. If you would rather choose your own, or your case needs a particular kind of experience, you can
        consult a private advocate at any time. Advocate {A.name} has practised in Kadapa since {A.since}. Call{' '}
        <a href={A.phone.tel}>{A.phone.display}</a>, or read his page on <a href={`${MAIN}/free-legal-aid-kadapa`}>free legal aid in Kadapa</a>.
      </p>
    </>
  );
}
