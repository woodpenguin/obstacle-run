import logo from '../assets/BeerRun.png';

export default function Header() {
  return (
    <header className="p-6 bg-slate-900 text-white bg-center">
      <img src={logo} alt="Logo" className="h-12" />
    </header>
  );
}
