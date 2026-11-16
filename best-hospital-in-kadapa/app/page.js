import { MAIN, H, doctors, docUrl, departments } from '@/lib/site';
import { pageGraph, pageMetadata, faqSchema, physicianSchema } from '@/lib/schema';
import {
  Shell, CallButton, DirectionsButton, SignBand, BuildingSpot, Directory, DoctorCard, AskList, Faq, Reading, FindUs, Closing, Star,
} from '@/components/ui';
import { PostList } from '@/components/blog';
import { posts } from '@/lib/posts';

const path = '/';
const title = 'Best Hospital in Kadapa for Mother & Child | Dhruva Hospitals';
const description =
  'Dhruva Hospitals, Kadapa: pregnancy and delivery, children’s care with a NICU, fertility, general medicine, surgery and 24-hour emergency care, beside Raithu Bazar near Sandhya Circle.';

export const metadata = pageMetadata({ path, title, description });

const faqs = [
  {
    q: 'Which is the best hospital in Kadapa for delivery?',
    a: `<p>Look for a hospital where an obstetrician, an operation theatre for caesarean section and a NICU are all in the same building, so neither mother nor baby has to be moved in an emergency. Dhruva Hospitals has all three. <a href="${docUrl(doctors.mounika)}">Dr. S Mounika Reddy</a> leads pregnancy care and <a href="${docUrl(doctors.sudarshan)}">Dr. Sudarshan Reddy K</a> leads newborn care.</p>`,
  },
  {
    q: 'Is there a children’s hospital near me in Kadapa?',
    a: `<p>Dhruva Hospitals, beside Raithu Bazar near Sandhya Circle, has a paediatrician-led children’s department, a children’s ward and a NICU. Paediatric emergency care is open 24 hours. See <a href="/best-childrens-hospital-in-kadapa">children’s care at Dhruva Hospitals</a>.</p>`,
  },
  {
    q: 'What are the OPD timings at Dhruva Hospitals?',
    a: `<p>Outpatient consultations run ${H.opd}. Emergency care is open 24 hours, every day. Call ${H.phone.display} to check when a particular doctor is available.</p>`,
  },
  {
    q: 'How do I book an appointment?',
    a: `<p>Call <a href="${H.phone.tel}">${H.phone.display}</a> or <a href="${H.phone2.tel}">${H.phone2.display}</a>, or <a href="${H.whatsapp}" rel="noopener">send a WhatsApp message</a>. There is no online form; the front desk books you in over the phone.</p>`,
  },
  {
    q: 'Where exactly is Dhruva Hospitals in Kadapa?',
    a: `<p>${H.address.full}. It is the corner building beside Raithu Bazar, near Sandhya Circle (shown as Pylon Circle on Google Maps). <a href="/hospital-near-me-kadapa">Directions and landmarks</a>.</p>`,
  },
  {
    q: 'Is Dhruva Hospitals a registered hospital?',
    a: `<p>Yes. It is registered under the A.P. Allopathic Private Medical Care Establishments (Registration and Regulation) Act, 2002, file no. ${H.registration.file}, valid until ${H.registration.validUntil}, for ${H.registration.beds} beds.</p>`,
  },
];

const graph = pageGraph({ path, title, description, extra: [faqSchema(faqs), ...Object.values(doctors).map(physicianSchema)] });

export default function Home() {
  return (
    <Shell path={path} graph={graph}>
      <section className="hero">
        <div className="wrap">
          <div>
            <h1>Best hospital in Kadapa for mothers and children</h1>
            <p className="lede">
              Dhruva Hospitals is a {H.registration.beds}-bed hospital beside Raithu Bazar, near Sandhya Circle. Pregnancy and delivery, children’s
              care with a NICU, fertility treatment, general medicine, surgery, eye care and orthopaedics are all under one roof, and emergency care
              is open 24 hours.
            </p>
            <div className="actions">
              <CallButton />
              <DirectionsButton />
            </div>
            <p className="rating">
              <strong>Rated 4.9 on Google</strong> by more than 100 patients.{' '}
              <a href={H.maps} rel="noopener">Read the reviews on Google Maps</a>
            </p>
          </div>
          <BuildingSpot caption="Look for the blue Dhruva Hospitals sign on the roof of the corner building, beside Raithu Bazar." />
        </div>
      </section>

      <SignBand
        facts={[
          ['Emergency', 'Open 24 hours'],
          ['Outpatient (OPD)', H.opd],
          ['Beds', String(H.registration.beds)],
          ['A.P. registration', `File no. ${H.registration.file}`],
        ]}
      />

      <section className="section" aria-labelledby="dept-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="dept-h">Departments at Dhruva Hospitals, Kadapa</h2>
            <p className="section-intro">
              Every department below has a full page on the hospital’s main website, with the treatments it offers and the doctor who leads it.
            </p>
          </div>
          <Directory items={departments} />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="doc-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="doc-h">Senior doctors</h2>
            <p className="section-intro">Between them, the doctors speak Telugu, English, Hindi, Kannada and Tamil.</p>
          </div>
          <div className="doctors">
            {[doctors.sudarshan, doctors.mounika, doctors.surya, doctors.vinay].map((d) => (
              <DoctorCard key={d.slug} d={d} />
            ))}
          </div>
          <p className="source-note">
            <a href={`${MAIN}/doctors`}>See every doctor at Dhruva Hospitals</a>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="choose-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="choose-h">How to choose the best hospital in Kadapa</h2>
            <p className="section-intro">
              The best hospital is the one that fits what your family needs. These are the questions worth asking any hospital before you need it,
              and how Dhruva Hospitals answers them.
            </p>
          </div>
          <AskList
            items={[
              ['Is emergency care open at night?', <><strong>Yes.</strong> Emergency care at Dhruva Hospitals is open 24 hours, every day, including for children and newborns.</>],
              ['If my newborn needs special care, will we have to move hospitals?', <>The <strong>NICU is in the same building</strong> as the delivery rooms, with CPAP, HFNC and ventilator support, so a newborn who needs help can be cared for on site.</>],
              ['Who are the specialists, and what are their qualifications?', <>Each senior doctor’s qualifications are listed above and on <a href={`${MAIN}/doctors`}>the doctors page</a>, including DNB Paediatrics, MS (OBG) and MD General Medicine from JIPMER.</>],
              ['Is the hospital registered with the state?', <><strong>Yes.</strong> Registered under the A.P. Allopathic Private Medical Care Establishments Act, 2002, file no. {H.registration.file}, valid until {H.registration.validUntil}.</>],
              ['Are tests, scans and medicines available inside?', <><strong>Yes.</strong> There is an in-house lab, digital X-ray, ultrasound and Doppler, ECG and a pharmacy.</>],
              ['Can I book without travelling first?', <><strong>Yes.</strong> Call <a href={H.phone.tel}>{H.phone.display}</a> or WhatsApp the same number.</>],
            ]}
          />
        </div>
      </section>

      <section className="section section-tint" aria-label="About the name Dhruva">
        <div className="wrap">
          <div className="meaning">
            <Star />
            <p>
              Dhruva is the pole star: the one star that stays fixed while the others turn, which travellers have long used to find their way.
              Paediatrician Dr. Sudarshan Reddy K opened Dhruva Hospitals in Kadapa on {H.opened}.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="guides-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="guides-h">Guides for families</h2>
            <p className="section-intro">Plain-language help with the decisions around pregnancy, birth and children’s health.</p>
          </div>
          <PostList posts={posts} />
          <p className="source-note"><a href="/blog">All family health guides</a></p>
        </div>
      </section>

      <FindUs />
      <Faq faqs={faqs} />
      <Reading
        items={[
          ['/blog/choosing-a-paediatrician-kadapa', 'How to choose a paediatrician in Kadapa'],
          ['/blog/choosing-a-gynaecologist-kadapa', 'How to choose a gynaecologist in Kadapa'],
          ['/blog/test-tube-baby-ivf-kadapa', 'Test tube baby (IVF) treatment in Kadapa'],
          ['/blog/general-physician-kadapa-when-to-see', 'When to see a general physician in Kadapa'],
          ['/guides/delivering-in-kadapa-from-dubai', 'Coming home from the Gulf to deliver in Kadapa', 'A guide for NRI families'],
          [H.familyGuide, 'Hospital in Kadapa for child care, pregnancy and fertility: a family guide', 'Open-access guide published by Dhruva Hospitals'],
        ]}
      />
      <Closing
        heading="Book an appointment at Dhruva Hospitals"
        text={`Call or WhatsApp ${H.phone.display}. Outpatient hours are ${H.opd}; emergency care is open 24 hours.`}
      />
    </Shell>
  );
}
