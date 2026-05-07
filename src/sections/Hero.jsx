import RotatingSeal from '../components/RotatingSeal';
import { dummyImg } from '../data/dummyImages';
import { COUPLE_DISPLAY } from '../data/wedding';

/** Framing foto hero (full-body + latar taman). */
const HERO_IMG_POSITION = '50% 38%';

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="relative min-h-[92vh] overflow-hidden">
        <img
          src={dummyImg.hero}
          alt=""
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: HERO_IMG_POSITION }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50" />

        <div className="relative z-10 flex min-h-[92vh] flex-col px-6 pb-14 pt-16 text-center md:px-8 md:pt-20">
          <div className="shrink-0">
            <p className="heading-script text-5xl !text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] md:text-6xl">
              The Wedding
            </p>
            <p className="mt-3 font-sans text-lg font-light tracking-[0.38em] text-white drop-shadow-md md:mt-4 md:text-xl">
              {COUPLE_DISPLAY}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-white px-6 py-6 md:py-8">
        <RotatingSeal />
      </div>
    </section>
  );
}
