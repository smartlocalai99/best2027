import { MAIN, doctors, docUrl } from '@/lib/site';

export const meta = {
  slug: 'newborn-first-48-hours-in-hospital',
  short: 'Your newborn’s first 48 hours',
  title: 'Your newborn’s first 48 hours in hospital: checks, vaccines and feeding',
  seoTitle: 'Newborn’s First 48 Hours in Hospital: Checks, Vaccines, Feeding',
  description:
    'What happens to your baby in the first two days after birth: skin-to-skin, the Apgar score, vitamin K, birth vaccines, feeding, jaundice checks and the warning signs to watch for at home.',
  standfirst:
    'The first two days pass in a blur. Knowing what the doctors and nurses are checking, and why, makes it easier to ask the right questions before you take your baby home.',
  date: '2026-11-16',
  minutes: 6,
  keypoints: [
    'Skin-to-skin contact and breastfeeding within the first hour help your baby stay warm and start feeding.',
    'Babies usually get a vitamin K injection and, under India’s immunisation schedule, BCG, oral polio (zero dose) and hepatitis B vaccines.',
    'Yellow skin in the first 24 hours always needs a doctor’s check.',
    'Before you leave, make sure feeding is going well and you know the danger signs.',
  ],
  related: [
    ['/blog/breastfeeding-first-days', 'Breastfeeding in the first days'],
    ['/blog/newborn-jaundice', 'Newborn jaundice: when to worry'],
    ['/blog/baby-vaccination-schedule-india', 'Baby vaccination schedule in India'],
    ['/blog/newborn-care-at-home', 'Caring for your newborn at home'],
    ['/blog/newborn-danger-signs', 'Newborn danger signs'],
    ['/services/neonatal', 'Newborn care and NICU at Dhruva Hospitals'],
  ],
};

export default function Body() {
  return (
    <>
      <h2>In the first hour</h2>
      <p>
        If mother and baby are both well, the baby is dried and placed skin to skin on the mother’s chest. This keeps the baby warm, steadies
        breathing and heart rate, and is the best time to start breastfeeding. The World Health Organization recommends starting breastfeeding
        within the first hour after birth.
      </p>
      <p>
        At one minute and five minutes after birth, the team gives your baby an <strong>Apgar score</strong>. It is a quick check of heart rate,
        breathing, muscle tone, reflexes and colour, each scored from 0 to 2. A lower score at one minute is common and usually improves by five
        minutes. It tells the team whether the baby needs extra help, not how your child will do later.
      </p>
      <p>
        The baby is weighed and examined from head to toe, and is usually given a <strong>vitamin K injection</strong>. Newborns have low levels of
        vitamin K, which the blood needs to clot, and the injection protects against a rare but serious bleeding problem.
      </p>

      <h2>Vaccines given at birth</h2>
      <p>Under India’s Universal Immunisation Programme, three vaccines are due at birth:</p>
      <ul>
        <li><strong>BCG</strong>, against severe forms of tuberculosis, given in the upper arm</li>
        <li><strong>OPV zero dose</strong>, oral polio drops</li>
        <li><strong>Hepatitis B birth dose</strong>, an injection, best given within 24 hours of birth</li>
      </ul>
      <p>
        Ask for your baby’s vaccination card before you go home and keep it safe. The next vaccines are due at six weeks.{' '}
        <a href={`${MAIN}/blog/baby-vaccination-schedule-india`}>See the full schedule</a>.
      </p>

      <h2>Feeding</h2>
      <p>
        For the first few days, the breasts make a small amount of thick, yellowish milk called colostrum. It is exactly what a newborn needs, and
        small amounts are normal. Newborns feed often, usually 8 to 12 times in 24 hours. Ask the nurses to watch a feed and check the baby is
        latching well. It is much easier to fix early.
      </p>
      <p>Signs that feeding is going well include steady swallowing during feeds, a baby who seems settled afterwards, and wet and dirty nappies that increase over the first days.</p>

      <h2>Checks before you go home</h2>
      <ul>
        <li><strong>Jaundice.</strong> Many babies look slightly yellow on the second or third day. Yellow skin in the first 24 hours, or jaundice that spreads to the palms and soles, always needs a doctor’s check.</li>
        <li><strong>Temperature.</strong> Your baby should stay warm without being overheated.</li>
        <li><strong>Feeding and weight.</strong> Babies lose a little weight in the first days, then start to gain.</li>
        <li><strong>The cord.</strong> Keep it clean and dry; it falls off on its own in one to two weeks.</li>
        <li><strong>A full examination</strong> by the doctor, including heart, hips and eyes.</li>
      </ul>

      <h2>Take your baby to hospital straight away if they</h2>
      <ul>
        <li>are not feeding well or refuse feeds</li>
        <li>have a fit (convulsion)</li>
        <li>are breathing fast or the chest pulls in with each breath</li>
        <li>feel hot or unusually cold</li>
        <li>move only when stimulated, or not at all</li>
        <li>have yellow palms or soles</li>
      </ul>
      <p className="note">These are the newborn danger signs used by the World Health Organization.</p>

      <h2>At Dhruva Hospitals</h2>
      <p>
        Newborn care is led by paediatrician and neonatologist <a href={docUrl(doctors.sudarshan)}>Dr. Sudarshan Reddy K</a>, and the NICU is in
        the same building as the delivery rooms. The neonatal emergency team is on duty day and night.
      </p>
    </>
  );
}
