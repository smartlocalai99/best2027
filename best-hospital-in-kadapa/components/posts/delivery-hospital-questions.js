import { MAIN, H, doctors, docUrl } from '@/lib/site';

export const meta = {
  slug: 'choosing-hospital-for-delivery-kadapa',
  short: 'Choosing a hospital for delivery',
  title: 'Choosing a hospital for delivery in Kadapa: 12 questions to ask',
  seoTitle: 'Best Hospital for Delivery in Kadapa: 12 Questions to Ask',
  description:
    'What to ask before you book a hospital for delivery in Kadapa: doctors at night, emergency caesarean, a NICU on site, costs, insurance and the birth certificate.',
  standfirst:
    'Most families choose a hospital for delivery by word of mouth. These twelve questions help you check the things that matter most if labour does not go to plan.',
  date: '2026-11-16',
  minutes: 6,
  keypoints: [
    'Visit and ask your questions well before your due date, ideally by the seventh month.',
    'The most important checks: a gynaecologist and an operation theatre available at any hour, and a NICU in the same building.',
    'Ask for a written cost estimate for both normal delivery and caesarean, and what each includes.',
    'Births must be registered within 21 days. Ask how the hospital reports the birth and when you get the certificate.',
  ],
  related: [
    ['/services/pregnancy', 'Pregnancy and delivery care at Dhruva Hospitals'],
    ['/blog/choosing-a-gynaecologist-kadapa', 'How to choose a gynaecologist in Kadapa'],
    ['/blog/normal-delivery-vs-c-section', 'Normal delivery or C-section: what to know'],
    ['/blog/signs-of-labour-hospital-bag', 'Signs of labour and what to pack'],
    ['/guides/baby-birth-certificate-aadhaar-passport-nri', 'Birth certificate, Aadhaar and passport for your baby'],
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A good hospital visit takes about half an hour. Go during the day, meet the front desk, and if you can, see the labour room and the
        newborn unit. Take this list with you and note the answers.
      </p>

      <h2>Doctors and cover at night</h2>
      <ol>
        <li>
          <strong>Is a gynaecologist available for deliveries 24 hours a day?</strong> Labour often starts at night. Ask who comes if your own
          doctor is not on duty.
        </li>
        <li>
          <strong>Can the hospital do an emergency caesarean at any hour?</strong> This needs an operation theatre ready around the clock and an
          anaesthetist who can be there quickly.
        </li>
        <li>
          <strong>What happens if there is a complication?</strong> Ask whether the hospital has an ICU, a blood arrangement and a plan for
          high-risk pregnancies such as high blood pressure or diabetes in pregnancy.
        </li>
      </ol>

      <h2>Care for your baby</h2>
      <ol start={4}>
        <li>
          <strong>Is there a NICU in the same building?</strong> If a newborn needs help with breathing or temperature, moving to another hospital
          costs time. A NICU on site means the baby stays close to the mother.
        </li>
        <li>
          <strong>Will a paediatrician check the baby after birth?</strong> Ask who examines the baby and how soon.
        </li>
        <li>
          <strong>Are birth vaccines given before you go home?</strong> Under India’s immunisation schedule, babies get BCG, the zero dose of oral
          polio vaccine and the hepatitis B birth dose soon after birth.
        </li>
      </ol>

      <h2>The labour room and your stay</h2>
      <ol start={7}>
        <li>
          <strong>Are painless labour options available?</strong> Ask what is offered and whether it depends on the time of day.
        </li>
        <li>
          <strong>Who can stay with you?</strong> Ask how many family members can be with you during labour and after the birth.
        </li>
        <li>
          <strong>How long is the usual stay?</strong> Stays are usually shorter after a normal delivery than after a caesarean. Ask what is
          typical at this hospital so you can plan at home.
        </li>
      </ol>

      <h2>Costs and paperwork</h2>
      <ol start={10}>
        <li>
          <strong>Can you have a written estimate?</strong> Ask for separate figures for normal delivery and caesarean, and what each includes:
          the room, medicines, the baby’s care and any NICU stay.
        </li>
        <li>
          <strong>Is your health insurance accepted?</strong> Bring your policy details and ask whether the hospital can do cashless admission or
          whether you claim afterwards.
        </li>
        <li>
          <strong>How is the birth registered?</strong> Under the Registration of Births and Deaths Act, 1969, a birth must be registered within
          21 days. Hospitals report the births that happen with them. Ask when and how you will receive the certificate. You will need it for the
          baby’s Aadhaar and, if you live abroad, the passport.
        </li>
      </ol>

      <h2>How Dhruva Hospitals answers</h2>
      <ul>
        <li>Emergency care is open 24 hours, and planned and emergency caesarean sections are done in the hospital’s operation theatres around the clock.</li>
        <li>
          The NICU is in the same building as the delivery rooms, with CPAP, HFNC and ventilator support, led by{' '}
          <a href={docUrl(doctors.sudarshan)}>Dr. Sudarshan Reddy K</a> (DNB Paediatrics, IAP Fellowship in Neonatology).
        </li>
        <li>
          Pregnancy care and deliveries are led by <a href={docUrl(doctors.mounika)}>Dr. S Mounika Reddy</a> (MS, Obstetrics and Gynaecology), and
          painless labour options are available.
        </li>
        <li>
          For costs and insurance, call <a href={H.phone.tel}>{H.phone.display}</a>. The hospital is registered under the A.P. Allopathic Private
          Medical Care Establishments Act, file no. {H.registration.file}.
        </li>
      </ul>
      <p>
        You can see the department’s full list of services on the <a href={`${MAIN}/services/pregnancy`}>pregnancy care page</a>.
      </p>
    </>
  );
}
