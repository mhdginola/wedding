import { useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { dummyImg } from '../data/dummyImages';
import { WEDDING_COUNTDOWN_ISO } from '../data/wedding';

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_COUNTDOWN_ISO);
  const [form, setForm] = useState({ name: '', guests: '', confirm: 'Ya, saya akan datang' });

  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="countdown" className="relative min-h-screen overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${dummyImg.countdown}')` }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-lg px-6 py-20 text-center">
        <h2 className="heading-serif text-3xl md:text-4xl">Countdown Time</h2>

        <div className="mt-12 grid grid-cols-4 gap-2 md:gap-4">
          {units.map(({ value, label }) => (
            <div key={label} className="fade-in">
              <p className="heading-serif text-2xl md:text-4xl tabular-nums">
                {String(value).padStart(2, '0')}
              </p>
              <p className="mt-2 font-serif text-[10px] italic text-white/80 md:text-xs">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button
            type="button"
            className="border border-white px-8 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
          >
            Save the Date
          </button>
        </div>

        <div className="mt-20">
          <h3 className="heading-serif text-3xl">RSVP</h3>
          <form onSubmit={handleSubmit} className="mt-10 space-y-8 text-left">
            <label className="block">
              <span className="font-sans text-xs text-white/80">Nama</span>
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="mt-2 w-full border-0 border-b border-white/60 bg-transparent py-2 font-sans text-sm text-white outline-none placeholder:text-white/35"
                placeholder="Nama lengkap"
              />
            </label>
            <label className="block">
              <span className="font-sans text-xs text-white/80">Jumlah</span>
              <input
                value={form.guests}
                onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
                type="number"
                min={1}
                className="mt-2 w-full border-0 border-b border-white/60 bg-transparent py-2 font-sans text-sm text-white outline-none placeholder:text-white/35"
                placeholder="1"
              />
            </label>
            <label className="block">
              <span className="font-sans text-xs text-white/80">Konfirmasi</span>
              <div className="relative mt-2">
                <select
                  value={form.confirm}
                  onChange={(e) => setForm((f) => ({ ...f, confirm: e.target.value }))}
                  className="w-full appearance-none border-0 border-b border-white/60 bg-transparent py-2 pr-8 font-sans text-sm text-white outline-none"
                >
                  <option className="text-black" value="Ya, saya akan datang">
                    Ya, saya akan datang
                  </option>
                  <option className="text-black" value="Maaf, belum bisa hadir">
                    Maaf, belum bisa hadir
                  </option>
                </select>
                <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-white/70">
                  ▾
                </span>
              </div>
            </label>
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full bg-black py-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-white md:max-w-xs"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
