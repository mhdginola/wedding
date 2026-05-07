import { dummyImg } from '../data/dummyImages';
import { couple } from '../data/wedding';

export default function WeddingEventScreens() {
  return (
    <section aria-label="Wedding event highlights" className="bg-white">
      <div className="relative min-h-[88vh]">
        <img
          src={dummyImg.event1}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex min-h-[88vh] flex-col justify-end px-8 pb-24 text-center text-white">
          <h2 className="heading-serif text-2xl leading-tight md:text-[2.2rem]">{couple.bride.fullName}</h2>
          <p className="mt-4 font-sans text-xs font-light leading-relaxed text-white/90 md:mx-auto md:max-w-md md:text-sm">
            {couple.bride.parentsLine}
          </p>
        </div>
      </div>

      <div className="relative min-h-[72vh] border-t border-neutral-200">
        <img
          src={dummyImg.event2}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex min-h-[72vh] flex-col items-center justify-center gap-3 px-8 text-center text-white">
          <h2 className="heading-serif text-[1.75rem] md:text-[2.25rem]">{couple.groom.fullName}</h2>
          <p className="max-w-md font-sans text-xs font-light text-white/90 md:text-sm">{couple.groom.parentsLine}</p>
        </div>
      </div>
    </section>
  );
}
