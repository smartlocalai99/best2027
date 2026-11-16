import { MAIN, H } from '@/lib/site';

export const meta = {
  slug: 'night-emergency-plan-kadapa-families',
  short: 'Night-time emergency plan',
  title: 'Night-time emergencies in Kadapa: a simple plan for families with children or a pregnancy',
  seoTitle: '24 Hour Hospital in Kadapa: Night Emergency Plan for Families',
  description:
    'Ten minutes of planning now saves time at 2 AM: numbers to save, a file to keep ready, your route to a 24-hour hospital in Kadapa, and the signs that mean you should leave straight away.',
  standfirst:
    'Emergencies with small children and in pregnancy tend to happen at night, when it is hardest to think clearly. A plan made in daylight takes the guesswork out.',
  date: '2026-11-16',
  minutes: 5,
  keypoints: [
    'Save 108 (free ambulance in Andhra Pradesh) and your nearest 24-hour hospital in every family phone.',
    'Keep one file with the antenatal card, vaccination card, prescriptions and ID where everyone can find it.',
    'Drive the route to the hospital once in daylight and note a landmark.',
    'If you see a danger sign, go. Do not wait for morning.',
  ],
  related: [
    ['/blog/when-to-take-child-to-hospital', 'When to take a child to hospital'],
    ['/blog/fever-in-children', 'Fever in children: what to do at home'],
    ['/blog/febrile-seizures-fits-with-fever', 'Fits with fever (febrile seizures)'],
    ['/blog/bleeding-in-early-pregnancy', 'Bleeding in early pregnancy'],
    ['/blog/signs-of-labour-hospital-bag', 'Signs of labour and what to pack'],
  ],
};

export default function Body() {
  return (
    <>
      <h2>1. Save these numbers now</h2>
      <ul>
        <li><strong>108</strong>, the free emergency ambulance service in Andhra Pradesh</li>
        <li>Your nearest 24-hour hospital. For Dhruva Hospitals: <a href={H.phone.tel}>{H.phone.display}</a></li>
        <li>Your child’s paediatrician and your gynaecologist</li>
        <li>A neighbour or relative nearby who has a vehicle</li>
      </ul>
      <p>Write them on paper too, and stick it near the door. Phones run out of charge at the worst moments.</p>

      <h2>2. Keep one file ready</h2>
      <p>Put these in a single folder or bag that every adult in the house knows about:</p>
      <ul>
        <li>antenatal card and recent scan reports, if you are pregnant</li>
        <li>your child’s vaccination card and any discharge summaries</li>
        <li>current prescriptions and a written list of medicines and allergies</li>
        <li>Aadhaar or other ID, and your health insurance card</li>
        <li>a phone charger and some cash</li>
      </ul>

      <h2>3. Know your route</h2>
      <p>
        Drive to the hospital once in daylight, and note how long it takes and where you will park or get dropped off. Pick a landmark you can give an
        auto driver or ambulance crew. Dhruva Hospitals, for example, is the corner building beside Raithu Bazar, near Sandhya Circle (labelled Pylon
        Circle on Google Maps). <a href={H.directions} rel="noopener">Open directions in Google Maps</a>.
      </p>

      <h2>4. Know when to go straight away</h2>
      <h3>For a child</h3>
      <ul>
        <li>cannot drink or breastfeed, or vomits everything</li>
        <li>has a fit (convulsion)</li>
        <li>is unusually sleepy or hard to wake</li>
        <li>is breathing fast or with difficulty</li>
        <li>is younger than 2 months and has a fever, feels cold, or is not feeding well</li>
      </ul>
      <h3>In pregnancy</h3>
      <ul>
        <li>bleeding from the vagina</li>
        <li>a fit, or a severe headache with blurred vision</li>
        <li>severe pain in the belly</li>
        <li>fever, or fast or difficult breathing</li>
        <li>your baby moving less than usual</li>
        <li>fluid leaking from the vagina</li>
      </ul>

      <h2>5. What to say when you call</h2>
      <p>Speak slowly and give, in this order: who is ill and their age, what happened and since when, any medicines already given, and exactly where you are, with a landmark.</p>

      <h2>6. If a child has a fit</h2>
      <ul>
        <li>Lay the child on their side on a safe surface, away from hard edges.</li>
        <li>Do not put anything in the mouth and do not hold the child down.</li>
        <li>Note the time the fit started.</li>
        <li>Go to hospital, or call 108 if the fit lasts more than five minutes or the child does not wake up afterwards.</li>
      </ul>
      <p className="note">
        These danger signs follow World Health Organization guidance for children and for pregnancy, plus NHS advice on baby movements and leaking
        fluid. Read more about <a href={`${MAIN}/blog/febrile-seizures-fits-with-fever`}>fits with fever</a>.
      </p>

      <h2>Dhruva Hospitals at night</h2>
      <p>
        Emergency care at Dhruva Hospitals is open 24 hours, every day, for adults, children and newborns, and caesarean sections can be done at any
        hour. The address is {H.address.full}.
      </p>
    </>
  );
}
