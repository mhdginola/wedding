import { useGuestName } from '../hooks/useGuestName';

export default function GuestGreeting() {
  const guestName = useGuestName();

  return (
    <section className="border-t border-neutral-200 bg-white px-6 py-16 text-center">
      <div className="mx-auto max-w-lg fade-in">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-text-light">
          Salam hangat
        </p>
        <p className="mt-6 font-sans text-sm leading-relaxed text-text md:text-base">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i
          berkenan hadir dan memberikan doa restu.
        </p>
        <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.18em] text-text-light">
          Kepada Yth.
        </p>
        <p className="mt-2 heading-serif text-2xl text-primary md:text-3xl">{guestName}</p>
      </div>
    </section>
  );
}
