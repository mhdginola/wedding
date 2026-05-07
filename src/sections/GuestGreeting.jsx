import { useGuestName } from '../hooks/useGuestName';
import { dummyImg } from '../data/dummyImages';

export default function GuestGreeting() {
  const guestName = useGuestName();

  const shadow = 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]';
  const shadowSm = 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)]';

  return (
    <section className="relative border-t border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${dummyImg.guestGreeting}')` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden />

      <div className="relative z-10 px-5 py-14 md:px-8 md:py-16">
        <div className={`mx-auto max-w-lg fade-in text-center ${shadowSm}`}>
          <div className="mx-auto mb-8 h-px w-12 bg-white/35" aria-hidden />
          <p className={`font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/75 ${shadowSm}`}>
            Salam hangat
          </p>
          <p className={`mt-6 font-sans text-sm leading-relaxed text-white md:text-[15px] ${shadow}`}>
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan doa restu.
          </p>
          <p className={`mt-8 font-sans text-[11px] uppercase tracking-[0.18em] text-white/70 ${shadowSm}`}>
            Kepada Yth.
          </p>
          <p
            className={`heading-serif mt-2 text-2xl !text-white md:text-3xl ${shadow}`}
          >
            {guestName}
          </p>
        </div>
      </div>
    </section>
  );
}
