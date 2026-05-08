import { useState, useRef, useEffect } from 'react';

const OPEN_INVITATION_EVENT = 'wedding:open-invitation';
const COVER_SCROLL_GESTURE_EVENT = 'wedding:cover-scroll-gesture';
const DIRECT_PLAY_FN = '__weddingDirectPlayFromGesture';

export default function MusicPlayer({ canPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const needsUserGestureRef = useRef(false);
  const pausedByUserRef = useRef(false);

  const tryPlay = async () => {
    if (!audioRef.current) return false;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      needsUserGestureRef.current = false;
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (pausedByUserRef.current) return;
    tryPlay().then((ok) => {
      if (!ok) needsUserGestureRef.current = true;
    });
  }, []);

  useEffect(() => {
    if (!canPlay || isPlaying || pausedByUserRef.current) return;
    tryPlay().then((ok) => {
      if (!ok) needsUserGestureRef.current = true;
    });
  }, [canPlay, isPlaying]);

  useEffect(() => {
    const playFromOpenGesture = () => {
      if (pausedByUserRef.current) return;
      tryPlay().then((ok) => {
        if (!ok) needsUserGestureRef.current = true;
      });
    };

    globalThis.addEventListener(OPEN_INVITATION_EVENT, playFromOpenGesture);
    return () => {
      globalThis.removeEventListener(OPEN_INVITATION_EVENT, playFromOpenGesture);
    };
  }, []);

  useEffect(() => {
    const playFromCoverScroll = () => {
      if (pausedByUserRef.current || isPlaying) return;
      tryPlay().then((ok) => {
        if (!ok) needsUserGestureRef.current = true;
      });
    };

    globalThis.addEventListener(COVER_SCROLL_GESTURE_EVENT, playFromCoverScroll);
    return () => {
      globalThis.removeEventListener(COVER_SCROLL_GESTURE_EVENT, playFromCoverScroll);
    };
  }, [isPlaying]);

  useEffect(() => {
    globalThis[DIRECT_PLAY_FN] = () => {
      if (pausedByUserRef.current || isPlaying) return;
      tryPlay().then((ok) => {
        if (!ok) needsUserGestureRef.current = true;
      });
    };

    return () => {
      delete globalThis[DIRECT_PLAY_FN];
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!canPlay) return;

    const resumeOnGesture = () => {
      if (!needsUserGestureRef.current || isPlaying || pausedByUserRef.current) return;
      tryPlay();
    };

    const opts = { passive: true };
    globalThis.addEventListener('pointerdown', resumeOnGesture, opts);
    globalThis.addEventListener('touchstart', resumeOnGesture, opts);
    globalThis.addEventListener('wheel', resumeOnGesture, opts);
    globalThis.addEventListener('keydown', resumeOnGesture);

    return () => {
      globalThis.removeEventListener('pointerdown', resumeOnGesture);
      globalThis.removeEventListener('touchstart', resumeOnGesture);
      globalThis.removeEventListener('wheel', resumeOnGesture);
      globalThis.removeEventListener('keydown', resumeOnGesture);
    };
  }, [canPlay, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      pausedByUserRef.current = true;
      needsUserGestureRef.current = false;
      setIsPlaying(false);
    } else {
      pausedByUserRef.current = false;
      tryPlay();
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source
          src="/music/I Think They Call This Love - Elliot James Reay (Saxophone Cover by Dori Wirawan) - dori wirawan.mp3"
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
