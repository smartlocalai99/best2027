import { MAIN, A } from '@/lib/site';

export const meta = {
  slug: 'land-records-andhra-pradesh-adangal-1b-ec-passbook',
  short: 'Land records in Andhra Pradesh',
  title: 'Land records in Andhra Pradesh explained: Adangal, 1-B, EC and pattadar passbook',
  seoTitle: 'Adangal, 1-B, EC and Pattadar Passbook Explained | Kadapa Land Records',
  description:
    'What Adangal, 1-B (ROR), the encumbrance certificate, the pattadar passbook and the FMB sketch each show, what they do not prove, and what to do when a land record in Kadapa is wrong.',
  standfirst:
    'Buying land, dividing family property or fighting a boundary dispute in Kadapa all start with the same pile of records. Here is what each one shows, and what it does not.',
  date: '2026-11-16',
  minutes: 6,
  keypoints: [
    'Adangal and 1-B are revenue records. You can view them online on the MeeBhoomi portal.',
    'The encumbrance certificate (EC) lists registered transactions on a property; unregistered deals do not appear.',
    'Revenue entries help prove possession and history, but disputes over ownership are decided by civil courts.',
    'Wrong entries are corrected by applying to the revenue authorities, starting with the Tahsildar.',
  ],
  related: [
    ['/revenue-cases-kadapa', 'Revenue matters in Kadapa'],
    ['/title-verification-kadapa', 'Title verification in Kadapa'],
    ['/blog/kadapa-revenue-record-corrections', 'Correcting revenue records'],
    ['/blog/kadapa-property-title-verification', 'Property title verification'],
    ['/blog/kadapa-boundary-dispute-survey', 'Boundary disputes and land surveys'],
  ],
};

export default function Body() {
  return (
    <>
      <h2>The main records</h2>
      <dl>
        <dt>Adangal (also called pahani)</dt>
        <dd>
          The village revenue account for each survey number: its extent, the type of land, and who holds or cultivates it. It is kept by the revenue
          department and can be viewed online on the <strong>MeeBhoomi</strong> portal.
        </dd>
        <dt>1-B, the Record of Rights (ROR)</dt>
        <dd>A register of the pattadars (land holders) in a village, with their survey numbers and extents. It is also available on MeeBhoomi.</dd>
        <dt>Pattadar passbook and title deed</dt>
        <dd>
          Issued to the pattadar under the Andhra Pradesh Rights in Land and Pattadar Pass Books Act, 1971. It lists the land held and is often asked
          for by banks and buyers.
        </dd>
        <dt>Encumbrance certificate (EC)</dt>
        <dd>
          Issued by the Registration Department, and searchable online through the department’s IGRS portal. It lists the registered transactions on
          a property, such as sales, gifts and mortgages, for the period you search. Transactions that were never registered do not appear.
        </dd>
        <dt>FMB sketch</dt>
        <dd>The Field Measurement Book sketch: a survey map of the boundaries and measurements of a survey number. It matters most in boundary disputes.</dd>
        <dt>Sale deed and link documents</dt>
        <dd>The registered deed by which the current owner acquired the land, and the earlier deeds that show how ownership passed down.</dd>
      </dl>

      <h2>What these records do not prove</h2>
      <p>
        Revenue entries are kept for revenue purposes. They are useful evidence of possession and history, but a name in Adangal or 1-B does not by
        itself settle who owns the land. When ownership is disputed, the civil court decides it, looking at the deeds, the records and the evidence as
        a whole. That is why a title check looks at all of these documents together, not one.
      </p>

      <h2>Before you buy land in Kadapa</h2>
      <ul>
        <li>Match the seller’s name across the sale deed, link documents, passbook, Adangal and 1-B.</li>
        <li>Get an EC for a long period, often 30 years, and read every entry.</li>
        <li>Check the survey number and extent against the FMB sketch, and visit the land.</li>
        <li>Ask whether any case is pending about the land, and check for loans or mortgages.</li>
        <li>If the land came through inheritance, make sure every heir has joined in the sale or given up their share in writing.</li>
      </ul>

      <h2>When a record is wrong</h2>
      <p>
        Mistakes in names, extents or survey numbers happen, especially after a death, a division or a sale. Corrections are made by applying to the
        revenue authorities, starting with the Tahsildar, with documents that support the change. If the application is refused, there are appeals
        to higher revenue officers. If the real question is who owns the land, the dispute usually has to go to the civil court as well.
      </p>
      <p>
        Advocate {A.name} handles property, land and revenue matters in Kadapa. Call <a href={A.phone.tel}>{A.phone.display}</a> or read about{' '}
        <a href={`${MAIN}/revenue-cases-kadapa`}>revenue cases</a> and <a href={`${MAIN}/land-disputes-kadapa`}>land disputes</a> on his website.
      </p>
    </>
  );
}
