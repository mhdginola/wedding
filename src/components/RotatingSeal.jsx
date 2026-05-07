import { useId } from 'react';

import { SEAL_CIRCULAR_PHRASE } from '../data/wedding';

const PATH_D = 'M 50,100 a 50,50 0 1 1 100,0 a 50,50 0 1 1 -100,0';

/** Radius path (match `d=`) — lebih kecil = lingkaran teks lebih rapat. */
const PATH_RADIUS = 50;
const PATH_LENGTH = 2 * Math.PI * PATH_RADIUS;

/** Segel bulat: satu kalimat mengelilingi lingkaran, berputar perlahan. */
export default function RotatingSeal({ className = '' }) {
  const uid = useId().replaceAll(':', '');
  const pathId = `${uid}-seal-path`;

  return (
    <div
      className={`relative flex h-36 w-36 items-center justify-center md:h-40 md:w-40 ${className}`}
      aria-label={SEAL_CIRCULAR_PHRASE.trim()}
      role="img"
    >
      <div className="rotating-seal-spin pointer-events-none absolute inset-0">
        <svg
          viewBox="0 0 200 200"
          className="size-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path id={pathId} d={PATH_D} fill="none" />
          </defs>
          <text
            className="fill-neutral-800"
            textLength={PATH_LENGTH}
            lengthAdjust="spacing"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <textPath href={`#${pathId}`} startOffset="0%">
              {SEAL_CIRCULAR_PHRASE}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
