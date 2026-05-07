import { couple } from '../data/wedding';
import { dummyImg } from '../data/dummyImages';

const profiles = [
  {
    label: 'The Bride',
    name: couple.bride.fullName,
    subtitle: couple.bride.nickName !== couple.bride.fullName ? `(${couple.bride.nickName})` : null,
    line: couple.bride.parentsLine,
    detail: couple.bride.address,
    image: dummyImg.bride,
  },
  {
    label: 'The Groom',
    name: couple.groom.fullName,
    subtitle: null,
    line: couple.groom.parentsLine,
    detail: couple.groom.address,
    image: dummyImg.groom,
  },
];

export default function BrideGroom() {
  return (
    <section id="couple" className="space-y-8 bg-white px-4 py-14 md:px-8">
      {profiles.map((p) => (
        <article
          key={p.label}
          className="fade-in overflow-hidden border border-neutral-900 shadow-sm"
        >
          <div className="relative aspect-[4/5] md:aspect-[16/10]">
            <img src={p.image} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            <p className="heading-script absolute left-6 top-6 text-3xl text-white md:text-4xl">
              {p.label}
            </p>
            <div className="absolute inset-x-0 bottom-0 px-6 pb-10 text-center text-white">
              <h2 className="heading-serif text-3xl !text-white drop-shadow-md md:text-4xl">{p.name}</h2>
              {p.subtitle ? (
                <p className="mt-2 font-sans text-sm font-light text-white/85">{p.subtitle}</p>
              ) : null}
              <p className="mt-4 font-sans text-xs font-light text-white/90 md:text-sm">{p.line}</p>
              <p className="mt-3 font-sans text-[11px] font-light leading-snug text-white/80 md:text-xs">
                {p.detail}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
