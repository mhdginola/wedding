import RotatingSeal from '../components/RotatingSeal';
import { dummyImg } from '../data/dummyImages';
import { COUPLE_DISPLAY } from '../data/wedding';

export default function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="relative min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${dummyImg.hero}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />

        <div className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-6 py-24 text-center text-white">
          <p className="heading-script text-5xl md:text-6xl drop-shadow">The Wedding</p>
          <p className="mt-4 font-sans text-lg font-light tracking-[0.38em] md:text-xl">
            {COUPLE_DISPLAY}
          </p>
          <div className="mt-16 space-y-2 font-sans text-xs font-medium uppercase tracking-[0.18em] md:text-sm">
            <p>Two souls.</p>
            <p>One day.</p>
            <p>A lifetime</p>
            <p>of love.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-white px-6 py-14">
        <RotatingSeal />
      </div>
    </section>
  );
}
