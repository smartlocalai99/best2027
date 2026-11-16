import { MAIN, A } from '@/lib/site';

export const meta = {
  slug: 'police-station-rights-kadapa',
  short: 'Your rights at a police station',
  title: 'Called to a police station in Kadapa? Your rights, in plain words',
  seoTitle: 'Your Rights at a Police Station in Kadapa: Notice, Arrest, Bail',
  description:
    'Your rights if police in Kadapa send you a notice or arrest you: grounds of arrest, informing family, meeting a lawyer, the 24-hour rule, statements to police, and bail.',
  standfirst:
    'A call from the police station is frightening, and people often say or sign things they regret. Knowing your basic rights helps you stay calm and protect yourself.',
  date: '2026-11-16',
  minutes: 6,
  keypoints: [
    'If you are arrested, you must be told the grounds, and you can consult a lawyer of your choice (Article 22 of the Constitution).',
    'An arrested person must be produced before a magistrate within 24 hours, not counting travel time.',
    'A confession made to a police officer cannot be used as evidence against you in court.',
    'If you fear arrest, speak to an advocate early: anticipatory bail is applied for before arrest.',
  ],
  related: [
    ['/criminal-lawyer-kadapa', 'Criminal defence in Kadapa'],
    ['/bail-lawyer-kadapa', 'Bail and anticipatory bail in Kadapa'],
    ['/blog/criminal-lawyer-kadapa-fir-response', 'What to do after an FIR in Kadapa'],
    ['/blog/kadapa-bail-anticipatory-bail-guide', 'Bail and anticipatory bail guide'],
    ['/blog/kadapa-new-criminal-laws-bns-bnss-bsa-2025', 'The new criminal laws: BNS, BNSS and BSA'],
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Since 1 July 2024, criminal procedure is governed by the Bharatiya Nagarik Suraksha Sanhita (BNSS), which replaced the Code of Criminal
        Procedure (CrPC). The basic protections below come from the Constitution and carry over into the new law.
      </p>

      <h2>If you receive a notice to appear</h2>
      <p>
        For many offences punishable with up to seven years, the police are expected to issue a notice asking you to appear, instead of arresting you
        straight away (Section 35 of the BNSS, earlier Section 41A of the CrPC).
      </p>
      <ul>
        <li>Keep the notice and note the date, time and police station.</li>
        <li>Show it to an advocate before you go.</li>
        <li>Attend as directed. Following the notice is usually your best protection against arrest.</li>
      </ul>

      <h2>If you are arrested</h2>
      <ul>
        <li><strong>You must be told why.</strong> The police must tell you the grounds of arrest, and in a bailable offence, that you can be released on bail.</li>
        <li><strong>Your family can be told.</strong> The police must inform a relative or friend you name about the arrest and where you are held.</li>
        <li><strong>You can consult a lawyer of your choice.</strong> This is a right under Article 22(1) of the Constitution, and you may meet your advocate during questioning, though not necessarily throughout it.</li>
        <li><strong>The 24-hour rule.</strong> You must be produced before a magistrate within 24 hours of arrest, not counting travel time (Article 22(2)). Longer custody needs the magistrate’s order.</li>
        <li><strong>An arrest memo</strong> should record the date and time of arrest and be signed by a witness. Ask for a copy, or note what it says.</li>
        <li><strong>Medical examination.</strong> You can ask to be examined by a doctor, which records any injuries.</li>
        <li><strong>Women</strong> should be arrested by or in the presence of a woman police officer, and ordinarily not after sunset or before sunrise except in exceptional circumstances with a magistrate’s permission.</li>
      </ul>

      <h2>About statements</h2>
      <p>
        A confession made to a police officer cannot be proved against you in court (Section 23 of the Bharatiya Sakshya Adhiniyam, earlier Section 25
        of the Evidence Act). Even so, be careful what you say and sign. Read any statement before signing it, and do not sign blank or partly filled
        papers.
      </p>

      <h2>Bail, in short</h2>
      <ul>
        <li><strong>Bailable offence:</strong> you have a right to be released on bail, by the police or the court.</li>
        <li><strong>Non-bailable offence:</strong> the court decides whether to grant bail, based on the facts.</li>
        <li><strong>Anticipatory bail:</strong> if you fear arrest, you can apply to the Sessions Court or High Court before you are arrested (Section 482 of the BNSS, earlier Section 438 of the CrPC).</li>
      </ul>

      <h2>If you are the one making a complaint</h2>
      <p>
        You can give information about a cognisable offence at a police station and ask for an FIR to be registered. The informant is entitled to a free
        copy of the FIR. If the police refuse to register it, the law provides further remedies, including approaching the Superintendent of Police or
        the magistrate.
      </p>

      <h2>Get an advocate involved early</h2>
      <p>
        The first hours and days of a criminal case shape everything that follows. Advocate {A.name} has defended criminal cases in Kadapa since{' '}
        {A.since}. Call <a href={A.phone.tel}>{A.phone.display}</a> or read about <a href={`${MAIN}/bail-lawyer-kadapa`}>bail</a> and{' '}
        <a href={`${MAIN}/criminal-lawyer-kadapa`}>criminal defence</a> on his website.
      </p>
    </>
  );
}
