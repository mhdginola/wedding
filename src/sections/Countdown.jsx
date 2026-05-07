import { useCountdown } from '../hooks/useCountdown';
import { dummyImg } from '../data/dummyImages';
import { WEDDING_COUNTDOWN_ISO } from '../data/wedding';

export default function Countdown({ compact = false }) {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_COUNTDOWN_ISO);

  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  const shell = compact
    ? 'relative overflow-hidden py-16 text-white md:py-20'
    : 'relative min-h-screen overflow-hidden text-white';

  return (
    <section id="countdown" className={shell}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${dummyImg.countdown}')` }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-lg px-6 text-center">
        <h2 className="heading-serif text-3xl !text-white drop-shadow-sm md:text-4xl">
          Countdown Time
        </h2>

        <div className="mt-12 grid grid-cols-4 gap-2 md:gap-4">
          {units.map(({ value, label }) => (
            <div key={label}>
              <p className="heading-serif text-2xl !text-white tabular-nums drop-shadow-sm md:text-4xl">
                {String(value).padStart(2, '0')}
              </p>
              <p className="mt-2 font-serif text-[10px] italic text-white/90 md:text-xs">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            type="button"
            className="border border-white px-8 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
          >
            Save the Date
          </button>
        </div>
      </div>
    </section>
  );
}
