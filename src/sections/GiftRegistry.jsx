import { useState } from 'react';
import { dummyImg } from '../data/dummyImages';

const BANK_LINE = 'BCA — GINOLA WEDDING — 1234567890';

export default function GiftRegistry() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText('1234567890');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="gift" className="bg-white px-4 py-16 md:px-8">
      <div className="relative mx-auto max-w-lg overflow-hidden rounded-2xl">
        <img src={dummyImg.giftHero} alt="" className="h-48 w-full object-cover md:h-56" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <p className="heading-script absolute inset-0 flex items-center justify-center text-4xl text-white drop-shadow md:text-5xl">
          Token of Love
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-lg text-center fade-in">
        <p className="font-sans text-sm leading-relaxed text-text md:text-[15px]">
          Tanpa mengurangi rasa hormat, bagi tamu undangan yang ingin memberikan hadiah pernikahan
          kepada kedua mempelai, dapat dikirimkan melalui rekening di bawah ini.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <div className="flex min-h-[48px] flex-1 items-center justify-between rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-left font-sans text-[11px] font-medium text-sky-800 md:text-xs">
            <span className="pr-2">{BANK_LINE}</span>
            <span className="shrink-0 text-neutral-400" aria-hidden>
              ⌄
            </span>
          </div>
          <button
            type="button"
            onClick={copy}
            className="shrink-0 bg-black px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white sm:py-0"
          >
            {copied ? 'COPIED' : 'COPY'}
          </button>
        </div>

        <p className="heading-script mt-16 text-4xl text-primary md:text-5xl">Journey of Love</p>
      </div>
    </section>
  );
}
