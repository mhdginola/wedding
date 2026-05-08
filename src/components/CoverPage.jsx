import { useCallback, useRef } from 'react';

import { useGuestName } from '../hooks/useGuestName';
import { dummyImg } from '../data/dummyImages';
import { COUPLE_DISPLAY } from '../data/wedding';

const OPEN_INVITATION_EVENT = 'wedding:open-invitation';

export default function CoverPage({ onOpen }) {
  const guestName = useGuestName();
  const openedRef = useRef(false);

  const openOnce = useCallback(() => {
    if (openedRef.current) return;
    openedRef.current = true;
    globalThis.dispatchEvent(new CustomEvent(OPEN_INVITATION_EVENT));
    onOpen();
  }, [onOpen]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
    >
      <div className="relative min-h-[118vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${dummyImg.cover}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-14 pb-10 text-center text-white">
          <div className="mt-8 animate-fade-in">
            <p className="heading-script text-5xl text-white drop-shadow-sm md:text-6xl">
              The Wedding
            </p>
            <p className="mt-4 font-sans text-xl font-light tracking-[0.35em] md:text-2xl">
              {COUPLE_DISPLAY}
            </p>
          </div>

          <div className="mb-4">
            <p className="font-sans text-xs font-light tracking-[0.08em] text-white/90">Kepada Yth.</p>
            <p className="mt-2 font-sans text-sm font-light text-white/95 md:text-base">{guestName}</p>
          </div>

          <div className="flex flex-col items-center gap-5 pb-2">
            <button
              type="button"
              onClick={openOnce}
              className="inline-block w-full max-w-xs rounded-md bg-black px-8 py-3.5 font-sans text-xs font-medium tracking-[0.2em] text-white transition hover:bg-neutral-900 md:max-w-sm"
            >
              OPEN INVITATION
            </button>
            <p className="font-sans text-[10px] font-light tracking-[0.2em] text-white/65 md:text-[11px]">
              klik tombol untuk membuka
            </p>
          </div>
        </div>

        <div
          className="relative z-10 flex justify-center pb-12 pt-2"
          aria-hidden
        >
          <span className="animate-float text-white/55">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
