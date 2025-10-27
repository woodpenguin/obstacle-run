// src/layouts/Site.jsx
export default function Site({ children }) {
  return (
    <div className="min-h-dvh bg-ink text-cream font-body">
      <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-[--spacing-gutter] py-4 flex items-center justify-between">
          <div className="font-display tracking-widest text-sm uppercase">
            Beer Run
          </div>
          <nav className="flex gap-6 text-sm opacity-80 hover:[&_a]:opacity-100 transition">
            <a href="#info">Info</a>
            <a href="#perks">Perks</a>
            <a href="#venue">Venue</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-[--spacing-gutter]">
        {children}
      </main>

      <footer className="mx-auto max-w-7xl px-[--spacing-gutter] py-16 opacity-70 text-sm">
        © {new Date().getFullYear()} Beer Run
      </footer>
    </div>
  );
}
