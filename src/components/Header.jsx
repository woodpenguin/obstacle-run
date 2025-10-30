export default function Header() {
  return (
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
  );
}
