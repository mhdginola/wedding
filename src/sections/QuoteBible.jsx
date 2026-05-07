import { dummyImg } from '../data/dummyImages';

const verses = [
  '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."',
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
            QS. Ar-Rum: 21
          </p>
        </div>
      </div>
    </section>
  );
}
