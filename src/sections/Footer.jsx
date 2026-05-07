import { dummyImg } from '../data/dummyImages';

const previewMessages = [
  {
    name: 'Notaris …, SH',
    text: 'Selamat menempuh hidup baru. Semoga bahagia selalu.',
    ago: '2 hari, 10 jam lalu',
  },
  {
    name: 'Keluarga dari Bandung',
    text: 'Doa terbaik untuk kalian berdua.',
    ago: '5 hari lalu',
  },
];

function ClockIcon() {
  return (
    <svg className="mr-1.5 inline h-3 w-3 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="thanks" className="bg-white px-4 pb-20 pt-4 md:px-8">
      <div className="mx-auto max-w-lg space-y-4">
        {previewMessages.map((m) => (
          <article
            key={m.name}
            className="rounded-xl border border-neutral-200 px-4 py-4 text-left"
          >
            <p className="font-sans text-sm font-semibold text-neutral-900">{m.name}</p>
            <p className="mt-2 font-sans text-sm text-text">{m.text}</p>
            <p className="mt-3 flex items-center font-sans text-[11px] text-text-light">
              <ClockIcon />
              {m.ago}
            </p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-lg text-center">
        <h2 className="heading-serif text-4xl md:text-5xl">Thank You.</h2>
        <div className="relative mx-auto mt-10 aspect-square max-w-md overflow-hidden rounded-sm">
          <img src={dummyImg.thankYou} alt="" className="size-full object-cover" />
        </div>
        <p className="mx-auto mt-10 max-w-md text-left font-sans text-sm leading-relaxed text-text">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan
          hadir dan memberikan doa serta restu.
        </p>
        <p className="mt-12 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-text-light">
          Wedding e-invitation
        </p>
      </div>
    </footer>
  );
}
