import { MAIN, H } from '@/lib/site';
import { pageGraph, pageMetadata, faqSchema, breadcrumbSchema } from '@/lib/schema';
import {
  Shell, CallButton, DirectionsButton, SignBand, BuildingSpot, Directory, AskList, Faq, Closing, Crumbs, MapFrame, PinIcon,
} from '@/components/ui';

const path = '/hospital-near-me-kadapa';
const title = 'Hospital Near Me in Kadapa: Directions to Dhruva Hospitals';
const description =
  'How to reach Dhruva Hospitals in Kadapa: beside Raithu Bazar, near Sandhya Circle, Dwaraka Nagar. Address, landmarks, Google Maps directions, OPD hours and 24-hour emergency care.';

export const metadata = pageMetadata({ path, title, description });

const crumbs = [['/', 'Best hospital in Kadapa'], [path, 'Hospital near me']];

const faqs = [
  {
    q: 'Is there a 24-hour hospital near me in Kadapa?',
    a: `<p>Dhruva Hospitals, beside Raithu Bazar near Sandhya Circle, has emergency care open 24 hours, every day, for adults, children and newborns.</p>`,
  },
  {
    q: 'Which hospital is beside Raithu Bazar in Kadapa?',
    a: `<p>Dhruva Hospitals is the corner building beside Raithu Bazar in Dwaraka Nagar, with blue Dhruva Hospitals signs in Telugu and English on the roof.</p>`,
  },
  {
    q: 'Which hospital is near Sandhya Circle, Kadapa?',
    a: `<p>Dhruva Hospitals is a short distance from Sandhya Circle, which Google Maps labels Pylon Circle. Search “Dhruva Hospitals Kadapa” in Google Maps or use <a href="${H.directions}" rel="noopener">these directions</a>.</p>`,
  },
  {
    q: 'What should I bring to my first visit?',
    a: `<p>Bring any earlier prescriptions and test reports, a list of the medicines you take and an ID such as Aadhaar. For pregnancy, bring your antenatal card and scan reports; for a child, bring the vaccination card.</p>`,
  },
];

const graph = pageGraph({
  path,
  title,
  description,
  extra: [faqSchema(faqs), breadcrumbSchema([['/', 'Best hospital in Kadapa'], [path, 'Hospital near me in Kadapa']])],
});

const careTypes = [
  { dept: 'Children’s hospital', covers: 'Paediatrician, vaccination, children’s ward, NICU, paediatric emergency', who: 'Dr. Sudarshan Reddy K', href: '/best-childrens-hospital-in-kadapa', local: true },
  { dept: 'Gynecologist and maternity', covers: 'Pregnancy, delivery, gynaecology and fertility treatment', who: 'Dr. S Mounika Reddy', href: '/best-gynecologist-in-kadapa', local: true },
  { dept: 'General physician', covers: 'Fever, diabetes, BP, ICU care and health check-ups', who: 'Dr. B Surya', href: `${MAIN}/services/general-medicine` },
  { dept: 'Surgeon', covers: 'General, laser and laparoscopic surgery', who: 'Dr. M Vinay Kumar', href: `${MAIN}/services/surgery` },
];

export default function HospitalNearMe() {
  return (
    <Shell path={path} graph={graph}>
      <Crumbs items={crumbs} />
      <section className="hero wide">
        <div className="wrap">
          <div>
            <h1>Hospital near me in Kadapa: how to reach Dhruva Hospitals</h1>
            <p className="lede">
              Dhruva Hospitals is the corner building beside Raithu Bazar in Dwaraka Nagar, a short way from Sandhya Circle. Emergency care is open
              24 hours; outpatient consultations run {H.opd}.
            </p>
            <div className="actions">
              <DirectionsButton label="Directions from where you are" />
              <CallButton />
            </div>
          </div>
          <BuildingSpot caption="This is what you will see when you arrive: the blue Dhruva Hospitals sign on the roof of the corner building." />
        </div>
      </section>

      <SignBand
        facts={[
          ['Emergency', 'Open 24 hours'],
          ['Outpatient (OPD)', H.opd],
          ['Landmark', 'Beside Raithu Bazar'],
          ['Plus code', H.plusCode],
        ]}
      />

      <section className="section" aria-labelledby="addr-h">
        <div className="wrap findus">
          <div>
            <h2 id="addr-h">Address and landmarks</h2>
            <address className="address">{H.address.full}</address>
            <ul className="ticks">
              <li>Beside Raithu Bazar, Dwaraka Nagar</li>
              <li>Near Sandhya Circle, which Google Maps labels Pylon Circle</li>
              <li>Next to Yerramukkapalli on Google Maps</li>
              <li>Map pin: {H.geo.lat}, {H.geo.lng}</li>
            </ul>
            <div className="actions">
              <a className="btn btn-line" href={H.maps} rel="noopener">
                <PinIcon />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
          <MapFrame />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="come-h">
        <div className="wrap">
          <div className="section-head"><h2 id="come-h">Before you set out</h2></div>
          <AskList
            items={[
              ['In an emergency', <>Come straight in: <strong>emergency care is open 24 hours</strong>. For an ambulance anywhere in Andhra Pradesh, dial <a href="tel:108">108</a>.</>],
              ['For a doctor’s appointment', <>Call <a href={H.phone.tel}>{H.phone.display}</a> or <a href={H.whatsapp} rel="noopener">WhatsApp</a> to check the doctor you need is in and book a time.</>],
              ['Travelling from outside Kadapa town', <>If you are coming from Proddatur, Rajampet, Rayachoti, Pulivendula, Badvel or Mydukur, call before you leave so your visit is booked when you arrive.</>],
              ['What to bring', <>Earlier prescriptions and reports, your list of medicines and an ID. For pregnancy, your antenatal card; for a child, the vaccination card.</>],
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="which-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="which-h">Which care do you need?</h2>
            <p className="section-intro">
              Dhruva Hospitals is closest to hand for families near Sandhya Circle, Dwaraka Nagar and the Raithu Bazar area. These pages explain each
              kind of care.
            </p>
          </div>
          <Directory items={careTypes} />
        </div>
      </section>

      <Faq faqs={faqs} />
      <Closing heading="Call before you come" text={`${H.phone.display} for appointments. Emergency care is open 24 hours.`} />
    </Shell>
  );
}
