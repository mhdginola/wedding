import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer({ canPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (canPlay && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [canPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source
          src="/music/background.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center 
                   rounded-full bg-primary/90 text-cream shadow-lg backdrop-blur-sm 
                   transition-all duration-300 hover:bg-primary hover:scale-110
                   hover:shadow-xl"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <div className="flex items-center gap-0.5">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-0.5 bg-cream rounded-full"
                style={{
                  height: `${10 + i * 3}px`,
                  animation: `pulse-soft ${0.5 + i * 0.2}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        ) : (
          <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
