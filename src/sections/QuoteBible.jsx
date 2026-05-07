import { dummyImg } from '../data/dummyImages';

const verses = [
  '“Love is patient, love is kind.',
  'It does not envy,',
  'it does not boast, it is not proud.',
  'It does not dishonor others,',
  'it is not self-seeking,',
  'it is not easily angered,',
  'it keeps no record of wrongs.',
  'Love does not delight in evil',
  'but rejoices with the truth.',
  'It always protects, always trusts,',
  'always hopes, always perseveres.”',
];

export default function QuoteBible() {
  return (
    <section id="quote" className="bg-white pb-16 pt-6">
      <div className="relative px-4 md:px-8">
        <div className="relative mx-auto aspect-[3/4] max-w-lg overflow-hidden md:aspect-[4/5]">
          <img
            src={dummyImg.quote}
            alt=""
            className="size-full object-cover"
          />
        </div>

        <div className="relative z-10 -mt-24 mx-auto max-w-lg border border-neutral-900 bg-white px-6 py-10 text-left md:-mt-28 md:px-10 md:py-12">
          {verses.map((line) => (
            <p key={line} className="heading-serif text-sm leading-relaxed text-neutral-900 md:text-base">
              {line}
            </p>
          ))}
          <p className="mt-8 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 md:text-[11px]">
            1 Corinthians 13:4–7 NIV
          </p>
        </div>
      </div>
    </section>
  );
}
