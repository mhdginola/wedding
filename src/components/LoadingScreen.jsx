export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-cream">
      <div className="relative mb-8">
        <div className="h-16 w-16 rounded-full border-2 border-secondary animate-spin" 
             style={{ borderTopColor: 'var(--color-primary)' }} />
      </div>
      <p className="heading-script text-3xl text-primary animate-pulse-soft md:text-4xl">
        Ginola & Ade Risma Lestari
      </p>
      <p className="mt-3 text-xs tracking-[0.3em] uppercase text-text-light">
        Memuat...
      </p>
    </div>
  );
}
