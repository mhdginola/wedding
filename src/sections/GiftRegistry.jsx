import { useState } from 'react';
import { dummyImg } from '../data/dummyImages';

const BANK_NAME = 'BANK BCA';
const ACCOUNTS = [
  { name: 'GINOLA', number: '8880524900' },
  { name: 'ADE RISMA LESTARI', number: '7610811552' },
];

export default function GiftRegistry() {
  const [copiedNumber, setCopiedNumber] = useState('');

  const copy = async (number) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedNumber(number);
      setTimeout(() => setCopiedNumber(''), 2000);
    } catch {
      setCopiedNumber('');
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

        <div className="mt-8 space-y-4">
          {ACCOUNTS.map((account) => (
            <div key={account.number}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 text-left shadow-sm md:p-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500 md:text-xs">
                  {BANK_NAME}
                </p>
                <p className="mt-3 font-sans text-2xl font-semibold tracking-[0.06em] text-neutral-900 md:text-[30px]">
                  {account.number}
                </p>
                <div className="mt-5 flex items-end justify-between border-t border-neutral-100 pt-4">
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-neutral-500">Atas Nama</p>
                    <p className="mt-1 font-sans text-sm font-medium tracking-[0.08em] text-neutral-900 md:text-base">
                      {account.name}
                    </p>
                  </div>
                  <p className="font-sans text-xs font-semibold tracking-[0.22em] text-neutral-600">BCA</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copy(account.number)}
                className="mt-3 w-full rounded-xl border border-neutral-900 bg-white px-8 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                {copiedNumber === account.number ? 'COPIED' : 'COPY'}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
