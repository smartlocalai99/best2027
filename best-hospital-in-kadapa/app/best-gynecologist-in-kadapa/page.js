import { MAIN, H, doctors, docUrl } from '@/lib/site';
import { pageGraph, pageMetadata, faqSchema, physicianSchema, breadcrumbSchema } from '@/lib/schema';
import { Shell, CallButton, DirectionsButton, SignBand, FeatureDoctor, AskList, Faq, Reading, FindUs, Closing, Crumbs } from '@/components/ui';

const path = '/best-gynecologist-in-kadapa';
const title = 'Best Gynecologist & Maternity Hospital in Kadapa | Dhruva';
const description =
  'Pregnancy care, normal and caesarean delivery, gynaecology and fertility treatment in Kadapa with Dr. S Mounika Reddy (MBBS, MS OBG) at Dhruva Hospitals, with a NICU in the same building.';

export const metadata = pageMetadata({ path, title, description });

const crumbs = [['/', 'Best hospital in Kadapa'], [path, 'Gynecologist and maternity']];

const faqs = [
  {
    q: 'Who is the best gynecologist in Kadapa?',
    a: `<p>Look for a gynaecologist with a postgraduate qualification in obstetrics and gynaecology who works in a hospital with an operation theatre and a NICU. At Dhruva Hospitals that is <a href="${docUrl(doctors.mounika)}">Dr. S Mounika Reddy</a> (MBBS, MS OBG), with further fellowships in reproductive medicine, minimal access surgery and fetal scans.</p>`,
  },
  {
    q: 'Which is the best maternity hospital in Kadapa?',
    a: `<p>For delivery, the hospital should have a gynaecologist, an operation theatre for caesarean section and a NICU in the same building. Dhruva Hospitals has all three, with painless labour options for normal delivery.</p>`,
  },
  {
    q: 'Do you offer painless normal delivery?',
    a: `<p>Yes, painless labour options are available for normal delivery. Your gynaecologist will discuss whether they suit you during your antenatal visits. <a href="${MAIN}/blog/painless-delivery-epidural">Read about painless delivery</a>.</p>`,
  },
  {
    q: 'Is there a fertility centre in Kadapa?',
    a: `<p>Dhruva Hospitals offers fertility tests and treatment, including semen analysis, ovulation study, IUI, IVF and ICSI, led by Dr. S Mounika Reddy. <a href="${MAIN}/services/fertility">Fertility treatment in Kadapa</a>.</p>`,
  },
  {
    q: 'Do you treat PCOD and irregular periods?',
    a: `<p>Yes. PCOD / PCOS, heavy, painful, irregular or missed periods, fibroids and ovarian cysts are all treated in the gynaecology department.</p>`,
  },
];

const graph = pageGraph({
  path,
  title,
  description,
  extra: [faqSchema(faqs), physicianSchema(doctors.mounika), breadcrumbSchema([['/', 'Best hospital in Kadapa'], [path, 'Best gynecologist in Kadapa']])],
});

export default function Gynecologist() {
  return (
    <Shell path={path} graph={graph}>
      <Crumbs items={crumbs} />
      <section className="hero wide">
        <div className="wrap">
          <div>
            <h1>Best gynecologist and maternity hospital in Kadapa</h1>
            <p className="lede">
              Pregnancy care, delivery, gynaecology and fertility treatment at Dhruva Hospitals are led by Dr. S Mounika Reddy, MBBS, MS (OBG). The
              operation theatre and the NICU are in the same building, so mother and baby are cared for under one roof.
            </p>
            <div className="actions">
              <CallButton />
              <DirectionsButton />
            </div>
          </div>
          <figure className="photo">
            <img
              src="/images/gynecologist-kadapa-pregnancy-consultation.webp"
              width="960"
              height="677"
              alt="Gynaecologist in a consultation with a pregnant woman"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <SignBand
        facts={[
          ['Delivery', 'Normal and caesarean'],
          ['Labour', 'Painless options'],
          ['Newborn care', 'NICU on site'],
          ['Fertility', 'IUI, IVF, ICSI'],
        ]}
      />

      <section className="section" aria-labelledby="cover-h">
        <div className="wrap">
          <div className="section-head"><h2 id="cover-h">Pregnancy, gynaecology and fertility care</h2></div>
          <div className="covers-grid three">
            <div>
              <h3>Pregnancy and delivery</h3>
              <ul className="ticks">
                <li>Pregnancy confirmation and antenatal check-ups</li>
                <li>Pregnancy scans</li>
                <li>Normal delivery, with painless labour options</li>
                <li>Planned and emergency caesarean section</li>
                <li>High-risk pregnancy, including high BP and diabetes in pregnancy</li>
                <li>Ectopic pregnancy treatment</li>
              </ul>
              <a href={`${MAIN}/services/pregnancy`}>Pregnancy care in Kadapa</a>
            </div>
            <div>
              <h3>Gynaecology</h3>
              <ul className="ticks">
                <li>PCOD / PCOS</li>
                <li>Heavy, painful, irregular or missed periods</li>
                <li>Fibroids and ovarian cysts</li>
                <li>Hysteroscopy</li>
                <li>Open and laparoscopic hysterectomy</li>
                <li>Family planning and adolescent gynaecology</li>
              </ul>
              <a href={`${MAIN}/services/gynaecology`}>Gynaecology in Kadapa</a>
            </div>
            <div>
              <h3>Fertility centre in Kadapa</h3>
              <ul className="ticks">
                <li>Semen analysis</li>
                <li>Ovulation study (follicular monitoring)</li>
                <li>IUI</li>
                <li>IVF and ICSI</li>
                <li>Treatment for male infertility</li>
              </ul>
              <a href={`${MAIN}/services/fertility`}>Fertility and IVF in Kadapa</a>
            </div>
          </div>
          <p className="pcpndt">
            Sex determination of the fetus is prohibited under the PC-PNDT Act, 1994. Dhruva Hospitals does not disclose the sex of the baby.
          </p>
        </div>
      </section>

      <section className="section section-tint" aria-label="The gynaecologist">
        <div className="wrap">
          <FeatureDoctor d={doctors.mounika}>
            <p>
              Dr. S Mounika Reddy treats pregnancy, gynaecological conditions and infertility, and performs laparoscopic gynaecological surgery.
              Training includes reproductive medicine at Hegde Hospitals, minimal access surgery at KIMS and fertility medicine at Ferty9 in
              Hyderabad, and a fellowship in fetal scans. Families living abroad can book a video consultation before travelling, through the{' '}
              <a href={`${MAIN}/nri`}>NRI desk</a>.
            </p>
          </FeatureDoctor>
        </div>
      </section>

      <section className="section" aria-labelledby="danger-h">
        <div className="wrap">
          <div className="alert">
            <h2 id="danger-h">In pregnancy, go to hospital straight away if you have</h2>
            <ul>
              <li>bleeding from the vagina</li>
              <li>a fit (convulsion)</li>
              <li>a severe headache with blurred vision</li>
              <li>a fever and feel too weak to get out of bed</li>
              <li>severe pain in the belly</li>
              <li>fast or difficult breathing</li>
              <li>noticed your baby moving less than usual</li>
            </ul>
            <p className="small">
              Based on the World Health Organization’s danger signs in pregnancy and NHS advice on baby movements. Emergency care at Dhruva Hospitals
              is open 24 hours. <a href={`${MAIN}/blog/bleeding-in-early-pregnancy`}>Bleeding in early pregnancy</a> and{' '}
              <a href={`${MAIN}/blog/high-bp-in-pregnancy-pre-eclampsia`}>high BP in pregnancy</a> explain more.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="choose-h">
        <div className="wrap">
          <div className="section-head"><h2 id="choose-h">Choosing a gynecologist in Kadapa: what to ask</h2></div>
          <AskList
            items={[
              ['Does the gynaecologist have a postgraduate degree?', <>Dr. S Mounika Reddy holds an <strong>MS in Obstetrics and Gynaecology</strong>, plus fellowships in reproductive medicine and minimal access surgery.</>],
              ['Can the hospital do an emergency caesarean at any hour?', <>Planned and emergency caesarean sections are done in the hospital’s <strong>operation theatres, 24 hours a day</strong>.</>],
              ['If the baby needs help after birth, is there a NICU?', <><strong>Yes</strong>, in the same building, led by neonatologist Dr. Sudarshan Reddy K.</>],
              ['Are scans and lab tests done in the hospital?', <><strong>Yes.</strong> Ultrasound, Doppler, blood and hormone tests are done in-house.</>],
            ]}
          />
        </div>
      </section>

      <Faq faqs={faqs} />
      <Reading
        items={[
          ['/blog/choosing-a-gynaecologist-kadapa', 'How to choose a gynaecologist in Kadapa'],
          ['/guides/gynaecology-appointment-kadapa', 'Booking a gynaecology appointment in Kadapa'],
          ['/blog/antenatal-check-up-schedule', 'Antenatal check-up schedule'],
          ['/blog/pregnancy-scans-guide', 'Pregnancy scans: which and when'],
          ['/blog/normal-delivery-vs-c-section', 'Normal delivery or C-section'],
          ['/blog/pcod-pcos-symptoms-treatment', 'PCOD / PCOS symptoms and treatment'],
          ['/blog/when-to-see-fertility-specialist', 'When to see a fertility specialist'],
          ['/blog/ivf-vs-icsi', 'IVF or ICSI: the difference'],
        ]}
      />
      <FindUs heading="Maternity hospital near Sandhya Circle, Kadapa" />
      <Closing
        heading="Book a visit with the gynaecologist"
        text={`Call or WhatsApp ${H.phone.display}. In an emergency in pregnancy, come straight in: emergency care is open 24 hours.`}
      />
    </Shell>
  );
}
