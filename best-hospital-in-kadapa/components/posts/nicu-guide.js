import { MAIN, H, doctors, docUrl } from '@/lib/site';

export const meta = {
  slug: 'nicu-guide-for-parents-kadapa',
  short: 'When your baby needs the NICU',
  title: 'When your baby needs the NICU: a guide for parents in Kadapa',
  seoTitle: 'NICU in Kadapa: A Guide for Parents',
  description:
    'Why newborns are admitted to the NICU, what CPAP, HFNC, ventilators and phototherapy do, how you can help your baby, and the questions to ask the NICU team.',
  standfirst:
    'Seeing your baby in an incubator, surrounded by wires and monitors, is frightening. This guide explains what the equipment does and how much you can still do for your baby.',
  date: '2026-11-16',
  minutes: 7,
  keypoints: [
    'Common reasons for NICU care are early birth, low birth weight, breathing difficulty and jaundice that needs treatment.',
    'Most equipment either watches your baby (monitors) or supports one job, such as breathing or keeping warm.',
    'Your breast milk and skin-to-skin contact (kangaroo care) are among the most useful things you can give.',
    'Ask the team every day what has changed and what the next step is.',
  ],
  related: [
    ['/services/neonatal', 'Newborn care and NICU at Dhruva Hospitals'],
    ['/guides/nicu-levels-of-care', 'NICU levels of care explained'],
    ['/blog/premature-baby-nicu-care', 'Premature babies and NICU care'],
    ['/blog/newborn-jaundice', 'Newborn jaundice: when to worry'],
    ['/blog/breastfeeding-first-days', 'Breastfeeding in the first days'],
  ],
};

export default function Body() {
  return (
    <>
      <h2>Why babies are admitted</h2>
      <p>A newborn intensive care unit (NICU) looks after babies who need more help than a normal postnatal ward can give. Common reasons include:</p>
      <ul>
        <li>being born early, before 37 weeks of pregnancy</li>
        <li>low birth weight</li>
        <li>difficulty breathing after birth</li>
        <li>jaundice high enough to need treatment</li>
        <li>infection, or low blood sugar</li>
        <li>a difficult birth, when the baby needs close watching for a while</li>
      </ul>
      <p>Many babies stay only a few days. Others, especially those born very early, stay for weeks.</p>

      <h2>What the equipment does</h2>
      <ul>
        <li><strong>Monitor.</strong> Small sensors show heart rate, breathing and oxygen level. Alarms often go off when a baby moves; the nurses know which ones matter.</li>
        <li><strong>Incubator or radiant warmer.</strong> Keeps the baby at the right temperature, because small babies lose heat quickly.</li>
        <li><strong>HFNC (high-flow nasal cannula).</strong> Soft prongs in the nose deliver warmed, moistened air or oxygen, to make breathing easier.</li>
        <li><strong>CPAP.</strong> Gives a steady, gentle air pressure through the nose that keeps the small air sacs in the lungs open.</li>
        <li><strong>Ventilator.</strong> Breathes for the baby, or helps each breath, when the baby cannot yet breathe well enough alone.</li>
        <li><strong>Phototherapy.</strong> A special blue light on the skin breaks down bilirubin, the substance that causes jaundice. The baby’s eyes are covered to protect them.</li>
        <li><strong>Drip or feeding tube.</strong> Gives fluids, nutrition or milk until the baby can feed by mouth.</li>
      </ul>

      <h2>What you can do for your baby</h2>
      <h3>Give your breast milk</h3>
      <p>
        If your baby cannot breastfeed yet, ask the nurses to show you how to express milk by hand or with a pump, starting as soon as you can
        after the birth. Even a few drops of early milk (colostrum) can be given to the baby.
      </p>
      <h3>Kangaroo care</h3>
      <p>
        Once your baby is stable, the team may encourage kangaroo mother care: holding your baby, in only a nappy, upright against your bare chest.
        The World Health Organization recommends it for small and preterm babies. It helps with warmth, breathing, feeding and bonding, and fathers
        can do it too.
      </p>
      <h3>Be there and ask</h3>
      <p>
        Wash your hands every time you enter, learn your baby’s routine, and help with nappy changes and feeds when the nurses say you can. Keep a
        notebook of questions.
      </p>

      <h2>Questions to ask the NICU team</h2>
      <ul>
        <li>Why is my baby here, and what is the main problem today?</li>
        <li>What support is my baby on, and what needs to happen to reduce it?</li>
        <li>How is my baby feeding, and when can I try breastfeeding?</li>
        <li>When can I hold my baby skin to skin?</li>
        <li>What would need to happen before we can go home?</li>
      </ul>

      <h2>Going home</h2>
      <p>
        Babies usually go home when they are breathing comfortably without support, keeping warm, feeding well and gaining weight. Before discharge,
        ask about follow-up visits, vaccinations and the danger signs that mean you should come back straight away.
      </p>

      <h2>The NICU at Dhruva Hospitals</h2>
      <p>
        The NICU is in the same building as the delivery rooms, with CPAP, HFNC and ventilator support, phototherapy and care for babies born before
        37 weeks. It is led by <a href={docUrl(doctors.sudarshan)}>Dr. Sudarshan Reddy K</a>, who holds an IAP Fellowship in Neonatology, and the
        neonatal emergency team is on duty day and night. Call <a href={H.phone.tel}>{H.phone.display}</a> or see the{' '}
        <a href={`${MAIN}/services/neonatal`}>newborn care page</a>.
      </p>
    </>
  );
}
