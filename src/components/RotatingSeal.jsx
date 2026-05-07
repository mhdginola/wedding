import { useId } from 'react';

import { SEAL_CIRCULAR_PHRASE } from '../data/wedding';

/** Radius path (match `d=` arc) untuk hitung keliling = panjang tulisan di path. */
const PATH_RADIUS = 72;
/** Keliling lingkaran ≈ panjang path `textPath` — dipakai agar teks tersebar satu putaran penuh. */
const PATH_LENGTH = 2 * Math.PI * PATH_RADIUS;

/** Segel bulat: satu kalimat mengelilingi lingkaran, berputar perlahan. */
export default function RotatingSeal({ className = '' }) {
  const uid = useId().replaceAll(':', '');
  const pathId = `${uid}-seal-path`;

  return (
    <div
      className={`relative flex h-[11rem] w-[11rem] items-center justify-center md:h-[13rem] md:w-[13rem] ${className}`}
      aria-label={SEAL_CIRCULAR_PHRASE}
      role="img"
    >
      <div className="rotating-seal-spin pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 200 200"
          className="size-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id={pathId}
              fill="none"
              d="M 28,100 a 72,72 0 1 1 144,0 a 72,72 0 1 1 -144,0"
            />
          </defs>
          <text
            className="fill-neutral-500"
            textLength={PATH_LENGTH}
            lengthAdjust="spacing"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            <textPath href={`#${pathId}`} startOffset="0%">
              {SEAL_CIRCULAR_PHRASE}
            </textPath>
          </text>
        </svg>
      </div>

      <span
        className="pointer-events-none absolute inset-[12%] rounded-full border border-neutral-300 md:inset-[11.5%]"
        aria-hidden
      />
    </div>
  );
}
