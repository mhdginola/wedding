import { AKAD, RESEPSI, MAP_URL } from '../data/wedding';
import eventMotifBg from '../assets/event-motif-bg.png';
import Countdown from './Countdown';

function MapButton({ className = 'mt-8' }) {
  return (
    <a
      href={MAP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 border border-neutral-900 px-8 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white ${className}`}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Lokasi
    </a>
  );
}

export default function EventDetails() {
  return (
    <>
      <section
        id="event"
        className="border-y border-neutral-200/90 bg-[#e7eaed] px-4 py-16 md:px-8"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(230, 234, 238, 0.45) 100%), url(${eventMotifBg})`,
          backgroundSize: '100% 100%, cover',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'center, left top',
        }}
      >
        <div className="mx-auto max-w-md space-y-10 md:max-w-lg">
          <div className="event-paper-card fade-in border-4 border-double border-neutral-900 px-6 py-10 text-center md:px-8 md:py-12">
            <p className="heading-script text-4xl text-primary md:text-[3rem]">{AKAD.title}</p>
            <div className="mx-auto mt-10 h-px w-16 bg-neutral-300" />

            <p className="heading-serif mt-10 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-primary md:text-xs">
              {AKAD.day}, {AKAD.dateLine}
              <br />
              {AKAD.time}
            </p>
            <p className="mt-6 font-sans text-sm font-medium text-neutral-900">{AKAD.venue}</p>
            <MapButton />
          </div>

          <div className="event-paper-card fade-in border-4 border-double border-neutral-900 px-6 py-10 text-center md:px-8 md:py-12">
            <p className="heading-script text-4xl text-primary md:text-[3rem]">{RESEPSI.title}</p>
            <div className="mx-auto mt-10 h-px w-16 bg-neutral-300" />

            <p className="heading-serif mt-10 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-primary md:text-xs">
              {RESEPSI.day}, {RESEPSI.dateLine}
              <br />
              {RESEPSI.time}
            </p>
            <p className="mt-6 font-sans text-sm font-medium text-neutral-900">{RESEPSI.venue}</p>
            <p className="mx-auto mt-3 max-w-sm font-sans text-xs leading-relaxed text-text-light">
              {RESEPSI.address}
            </p>
            <MapButton />
          </div>
        </div>
      </section>

      <Countdown compact />
    </>
  );
}
