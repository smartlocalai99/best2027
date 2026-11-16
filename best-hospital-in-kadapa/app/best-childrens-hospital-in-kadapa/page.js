import { MAIN, H, doctors, docUrl } from '@/lib/site';
import { pageGraph, pageMetadata, faqSchema, physicianSchema, breadcrumbSchema } from '@/lib/schema';
import { Shell, CallButton, DirectionsButton, SignBand, FeatureDoctor, AskList, Faq, Reading, FindUs, Closing, Crumbs } from '@/components/ui';

const path = '/best-childrens-hospital-in-kadapa';
const title = 'Best Pediatrician & Children’s Hospital in Kadapa | Dhruva';
const description =
  'Children’s care in Kadapa led by paediatrician and neonatologist Dr. Sudarshan Reddy K: check-ups, vaccination, children’s ward, NICU and 24-hour paediatric emergency near Sandhya Circle.';

export const metadata = pageMetadata({ path, title, description });

const crumbs = [['/', 'Best hospital in Kadapa'], [path, 'Children’s hospital']];

const faqs = [
  {
    q: 'Who is the best pediatrician in Kadapa?',
    a: `<p>The right paediatrician for your family is qualified in paediatrics, reachable when your child is unwell, and backed by a hospital that can admit children and newborns. At Dhruva Hospitals that is <a href="${docUrl(doctors.sudarshan)}">Dr. Sudarshan Reddy K</a> (MBBS, DNB Paediatrics, IAP Fellowship in Neonatology), formerly a consultant at RIMS Kadapa.</p>`,
  },
  {
    q: 'Is there a NICU in Kadapa for premature babies?',
    a: `<p>Yes. Dhruva Hospitals has a NICU with CPAP, HFNC and ventilator support, phototherapy for jaundice and care for babies born before 37 weeks. It is in the same building as the delivery rooms.</p>`,
  },
  {
    q: 'Is a children’s doctor available at night?',
    a: `<p>The hospital’s neonatal and paediatric emergency team is on duty day and night. If your child is seriously unwell, come straight in.</p>`,
  },
  {
    q: 'Do you give baby vaccinations?',
    a: `<p>Yes. Vaccinations follow the Indian Academy of Paediatrics (IAP) schedule. Bring your child’s vaccination card to each visit. <a href="${MAIN}/blog/baby-vaccination-schedule-india">See the vaccination schedule</a>.</p>`,
  },
  {
    q: 'Can my child be admitted at Dhruva Hospitals?',
    a: `<p>Yes. There is a children’s ward with round-the-clock nursing, and intensive care with ventilator support for children who are critically ill.</p>`,
  },
];

const graph = pageGraph({
  path,
  title,
  description,
  extra: [faqSchema(faqs), physicianSchema(doctors.sudarshan), breadcrumbSchema([['/', 'Best hospital in Kadapa'], [path, 'Best children’s hospital in Kadapa']])],
});

export default function ChildrensHospital() {
  return (
    <Shell path={path} graph={graph}>
      <Crumbs items={crumbs} />
      <section className="hero wide">
        <div className="wrap">
          <div>
            <h1>Best children’s hospital and pediatrician in Kadapa</h1>
            <p className="lede">
              Children’s care at Dhruva Hospitals is led by paediatrician and neonatologist Dr. Sudarshan Reddy K. Check-ups, vaccinations, a
              children’s ward and a NICU for newborns are in one building near Sandhya Circle, and the paediatric emergency team is on duty day and
              night.
            </p>
            <div className="actions">
              <CallButton />
              <DirectionsButton />
            </div>
          </div>
          <figure className="photo">
            <img
              src="/images/paediatrician-kadapa-checking-baby.webp"
              width="960"
              height="640"
              alt="Paediatrician listening to a baby’s chest with a stethoscope while the mother holds the baby"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <SignBand
        facts={[
          ['Paediatric emergency', 'Day and night'],
          ['Newborn care', 'NICU on site'],
          ['Vaccination', 'IAP schedule'],
          ['Doctor speaks', 'Telugu, English, Kannada'],
        ]}
      />

      <section className="section" aria-labelledby="cover-h">
        <div className="wrap">
          <div className="section-head"><h2 id="cover-h">What the children’s department covers</h2></div>
          <div className="covers-grid">
            <div>
              <h3>Children</h3>
              <ul className="ticks">
                <li>Check-ups and illness visits for babies and children</li>
                <li>Vaccination as per the IAP schedule</li>
                <li>Growth and development monitoring</li>
                <li>Children’s ward with round-the-clock nursing</li>
                <li>Intensive care with ventilator support</li>
                <li>24-hour paediatric emergency</li>
              </ul>
              <a href={`${MAIN}/services/paediatrics`}>Paediatrics in Kadapa: full department page</a>
            </div>
            <div>
              <h3>Newborns and the NICU</h3>
              <ul className="ticks">
                <li>Care for babies born before 37 weeks</li>
                <li>Continuous monitoring of oxygen, heart rate and temperature</li>
                <li>CPAP and HFNC breathing support</li>
                <li>Ventilator support</li>
                <li>Phototherapy for newborn jaundice</li>
                <li>24-hour neonatal emergency</li>
              </ul>
              <a href={`${MAIN}/services/neonatal`}>NICU in Kadapa: full department page</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-label="The paediatrician">
        <div className="wrap">
          <FeatureDoctor d={doctors.sudarshan}>
            <p>
              Dr. Sudarshan Reddy K founded Dhruva Hospitals and opened it in Kadapa on {H.opened}. He trained at Apollo Hospitals, Mysore and Ankura
              Hospital, Hyderabad, and was formerly a consultant at RIMS Kadapa and PES Medical College, Kuppam.
            </p>
          </FeatureDoctor>
        </div>
      </section>

      <section className="section" aria-labelledby="danger-h">
        <div className="wrap">
          <div className="alert">
            <h2 id="danger-h">Bring your child to hospital straight away if they</h2>
            <ul>
              <li>cannot drink or breastfeed</li>
              <li>vomit everything they take</li>
              <li>have had a fit (convulsion)</li>
              <li>are unusually sleepy or hard to wake</li>
              <li>are breathing fast or with difficulty, or the chest pulls in with each breath</li>
              <li>are younger than 2 months and have a fever, feel cold, or are not feeding well</li>
            </ul>
            <p className="small">
              Based on the World Health Organization’s danger signs for children. Emergency care at Dhruva Hospitals is open 24 hours.{' '}
              <a href={`${MAIN}/blog/newborn-danger-signs`}>Newborn danger signs</a> and{' '}
              <a href={`${MAIN}/blog/when-to-take-child-to-hospital`}>when to take a child to hospital</a> explain more.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="choose-h">
        <div className="wrap">
          <div className="section-head"><h2 id="choose-h">Choosing a pediatrician in Kadapa: what to ask</h2></div>
          <AskList
            items={[
              ['Is the paediatrician trained in newborn care?', <>Dr. Sudarshan Reddy K holds an <strong>IAP Fellowship in Neonatology</strong> on top of DNB Paediatrics.</>],
              ['Can the hospital admit my child if needed?', <><strong>Yes.</strong> There is a children’s ward and intensive care with ventilator support.</>],
              ['If my baby is born early, is there a NICU on site?', <><strong>Yes</strong>, in the same building as the delivery rooms.</>],
              ['Which vaccination schedule do you follow?', <>The <strong>IAP schedule</strong>, recorded on your child’s card at every visit.</>],
            ]}
          />
        </div>
      </section>

      <Faq faqs={faqs} />
      <Reading
        items={[
          ['/blog/choosing-a-paediatrician-kadapa', 'How to choose a paediatrician in Kadapa'],
          ['/guides/paediatrician-appointment-kadapa', 'Booking a paediatrician appointment in Kadapa'],
          ['/blog/baby-vaccination-schedule-india', 'Baby vaccination schedule in India'],
          ['/blog/fever-in-children', 'Fever in children: what to do at home'],
          ['/blog/newborn-jaundice', 'Newborn jaundice'],
          ['/blog/premature-baby-nicu-care', 'Premature babies and NICU care'],
          ['/guides/nicu-levels-of-care', 'NICU levels of care explained'],
          ['/blog/child-development-milestones', 'Child development milestones'],
        ]}
      />
      <FindUs heading="Children’s hospital near Sandhya Circle, Kadapa" />
      <Closing
        heading="Book a visit with the paediatrician"
        text={`Call or WhatsApp ${H.phone.display}. If your child is seriously unwell, come straight in: emergency care is open 24 hours.`}
      />
    </Shell>
  );
}
