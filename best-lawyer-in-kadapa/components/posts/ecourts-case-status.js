import { MAIN, A } from '@/lib/site';

export const meta = {
  slug: 'check-case-status-online-kadapa-ecourts',
  short: 'Check your case status online',
  title: 'How to check your case status online for Kadapa courts (eCourts)',
  seoTitle: 'Kadapa Court Case Status Online: eCourts Step by Step',
  description:
    'Check the next hearing date, stage and orders of a case in Kadapa District Court or the High Court of Andhra Pradesh online, using the CNR number, case number or party name.',
  standfirst:
    'You do not need to visit the court to find out what happened at the last hearing. The eCourts system lets anyone check a case’s status, next date and orders for free.',
  date: '2026-11-16',
  minutes: 5,
  keypoints: [
    'Every district court case has a 16-character CNR number. It is the fastest way to find your case.',
    'Use the eCourts Services website or the free eCourts Services app; choose Andhra Pradesh and the Kadapa district.',
    'Check the daily cause list the day before a hearing to confirm your case is listed.',
    'High Court of Andhra Pradesh cases are checked on the High Court’s own website.',
  ],
  related: [
    ['/blog/kadapa-first-hearing-guide', 'Your first hearing at Kadapa court'],
    ['/blog/kadapa-court-timeline-expectations', 'How long cases take in Kadapa courts'],
    ['/blog/kadapa-district-court-filing-tips', 'Filing tips for Kadapa District Court'],
    ['/blog/kadapa-appeals-revisions-high-court', 'Appeals and revisions to the High Court'],
  ],
};

export default function Body() {
  return (
    <>
      <h2>What you need</h2>
      <p>Any one of these will find a case in the district courts:</p>
      <ul>
        <li><strong>CNR number</strong>: a 16-character code that is unique to each case, printed on case papers and summonses. Ask your advocate for it.</li>
        <li><strong>Case type, number and year</strong>, for example a suit or criminal case number</li>
        <li><strong>Party name</strong>, if you know the name of either side and the year</li>
        <li><strong>FIR number</strong> and police station, for criminal cases</li>
        <li><strong>Advocate name</strong>, to see all cases of an advocate</li>
      </ul>

      <h2>Step by step on the eCourts website</h2>
      <ol>
        <li>Open the eCourts Services website at <strong>services.ecourts.gov.in</strong>.</li>
        <li>To search by CNR, type the number on the home page. Otherwise, choose <strong>Case Status</strong>.</li>
        <li>Select the state <strong>Andhra Pradesh</strong>, the district <strong>Kadapa</strong>, and the court complex where the case is filed.</li>
        <li>Pick how you want to search (case number, party name, FIR number and so on), fill in the details and the captcha.</li>
        <li>Open the case to see the next hearing date, the current stage, the history of hearings and any orders you can download.</li>
      </ol>

      <h2>On your phone</h2>
      <p>
        The free <strong>eCourts Services</strong> app, published by the e-Committee of the Supreme Court, does the same searches. You can save your
        cases in the app and check them before each date.
      </p>

      <h2>Check the cause list the day before</h2>
      <p>
        A cause list is the list of cases each court will take up on a given day. The Kadapa district court website,{' '}
        <strong>kadapa.dcourts.gov.in</strong>, and the eCourts portal publish daily cause lists. Look up your court and case number the evening
        before a hearing so you know it is listed.
      </p>

      <h2>High Court of Andhra Pradesh cases</h2>
      <p>
        Appeals, revisions, writ petitions and anticipatory bail applications heard at the High Court in Amaravati are tracked on the High Court’s
        website, <strong>aphc.gov.in</strong>, which has its own case status and cause list search.
      </p>

      <h2>Reading what the status says</h2>
      <p>
        The status shows the <strong>stage</strong> of the case, such as appearance, framing of issues or charges, evidence, arguments or judgment.
        If a hearing was adjourned, the next date appears once the court updates it, which can take a day or two. Orders and judgments are usually
        uploaded as PDFs.
      </p>

      <h2>When to call your advocate</h2>
      <ul>
        <li>a hearing shows no next date after a few days</li>
        <li>a new order or judgment appears that you do not understand</li>
        <li>the status mentions a warrant, a notice to you, or a deadline to file something</li>
        <li>the case does not appear at all when you expected it to be listed</li>
      </ul>
      <p>
        Advocate {A.name} practises before Kadapa District Court and the High Court of Andhra Pradesh. Call <a href={A.phone.tel}>{A.phone.display}</a>{' '}
        or read about his <a href={`${MAIN}/services`}>legal services</a>.
      </p>
    </>
  );
}
