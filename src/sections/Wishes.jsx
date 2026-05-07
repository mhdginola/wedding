import { useState } from 'react';
import { dummyImg } from '../data/dummyImages';

const initialComments = [
  {
    id: '1',
    name: 'Opa & Oma — Yogyakarta',
    text: 'Happy wedding, Tuhan memberkati.',
    ago: '2 hari lalu',
  },
  {
    id: '2',
    name: 'Keluarga besar',
    text: 'Semoga menjadi keluarga yang sakinah mawaddah warahmah.',
    ago: '1 minggu lalu',
  },
];

function ClockIcon() {
  return (
    <svg className="mr-1.5 inline h-3 w-3 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function Wishes() {
  const [comments, setComments] = useState(initialComments);
  const [nama, setNama] = useState('');
  const [ucapan, setUcapan] = useState('');

  const kirim = (e) => {
    e.preventDefault();
    if (!nama.trim() || !ucapan.trim()) return;
    setComments((c) => [
      {
        id: String(Date.now()),
        name: nama.trim(),
        text: ucapan.trim(),
        ago: 'Baru saja',
      },
      ...c,
    ]);
    setNama('');
    setUcapan('');
  };

  return (
    <section id="wishes" className="border-t border-neutral-200 bg-white px-4 py-16 md:px-8">
      <div className="relative mx-auto max-w-lg text-center">
        <img
          src={dummyImg.wishesThumb}
          alt=""
          className="absolute left-0 top-1 h-12 w-12 rounded-lg object-cover md:h-14 md:w-14"
        />
        <h2 className="heading-script text-5xl text-primary md:text-6xl">Wishes</h2>
      </div>

      <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-neutral-300 bg-white px-4 py-6 md:px-6">
        <p className="border-b border-neutral-200 pb-3 text-center font-sans text-sm font-semibold text-neutral-900">
          {comments.length} Comments
        </p>

        <form onSubmit={kirim} className="mt-6 space-y-4">
          <input
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 font-sans text-sm outline-none focus:border-neutral-900"
          />
          <textarea
            value={ucapan}
            onChange={(e) => setUcapan(e.target.value)}
            placeholder="Ucapan"
            rows={4}
            className="w-full resize-none rounded-lg border border-neutral-300 px-3 py-2.5 font-sans text-sm outline-none focus:border-neutral-900"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-neutral-700 py-2.5 font-sans text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Kirim
          </button>
        </form>

        <ul className="mt-8 divide-y divide-neutral-200">
          {comments.map((c) => (
            <li key={c.id} className="py-5 first:pt-2">
              <p className="font-sans text-sm font-semibold text-neutral-900">{c.name}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-text">{c.text}</p>
              <p className="mt-3 flex items-center font-sans text-[11px] text-text-light">
                <ClockIcon />
                {c.ago}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
