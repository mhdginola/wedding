const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#couple', label: 'Couple' },
  { href: '#countdown', label: 'Countdown' },
  { href: '#event', label: 'Acara' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#wishes', label: 'Wishes' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/95 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl justify-center overflow-x-auto px-4">
        <ul className="flex items-center gap-5 whitespace-nowrap md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-text-light transition hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
