import { AKAD, RESEPSI, MAP_URL, TURUT_MENGUNDANG, INVITATION_META } from '../data/wedding';

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
      Share Lokasi
    </a>
  );
}

export default function EventDetails() {
  return (
    <section id="event" className="border-y border-neutral-200 bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-md space-y-10 md:max-w-lg">
        <div className="fade-in border-4 border-double border-neutral-900 px-6 py-10 text-center md:px-8 md:py-12">
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

        <div className="fade-in border-4 border-double border-neutral-900 px-6 py-10 text-center md:px-8 md:py-12">
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

        <div className="fade-in text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900">
            Turut mengundang
          </p>
          <div className="mx-auto mt-5 max-w-sm space-y-2 font-sans text-sm leading-relaxed text-text">
            {TURUT_MENGUNDANG.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <p className="fade-in text-center font-sans text-[10px] uppercase tracking-[0.12em] text-text-light">
          Katalog undangan {INVITATION_META.catalog} · Jumlah {INVITATION_META.quantity}
        </p>
      </div>
    </section>
  );
}
