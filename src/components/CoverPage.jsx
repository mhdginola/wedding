import { useGuestName } from '../hooks/useGuestName';
import { dummyImg } from '../data/dummyImages';
import { COUPLE_DISPLAY } from '../data/wedding';

export default function CoverPage({ onOpen }) {
  const guestName = useGuestName();

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${dummyImg.cover}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between px-6 py-14 text-center text-white">
        <div className="mt-8 animate-fade-in">
          <p className="heading-script text-5xl md:text-6xl text-white drop-shadow-sm">
            The Wedding
          </p>
          <p className="mt-4 font-sans text-xl font-light tracking-[0.35em] md:text-2xl">
            {COUPLE_DISPLAY}
          </p>
        </div>

        <div className="mb-4">
          <p className="font-sans text-xs font-light tracking-[0.08em] text-white/90">
            Kepada Yth.
          </p>
          <p className="mt-2 font-sans text-sm font-light text-white/95 md:text-base">{guestName}</p>
        </div>

        <div className="pb-6">
          <button
            type="button"
            onClick={onOpen}
            className="inline-block w-full max-w-xs rounded-md bg-black px-8 py-3.5 font-sans text-xs font-medium tracking-[0.2em] text-white transition hover:bg-neutral-900 md:max-w-sm"
          >
            OPEN INVITATION
          </button>
        </div>
      </div>
    </div>
  );
}
