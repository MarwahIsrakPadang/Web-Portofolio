import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Projek", href: "#projek" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "px-6"
          : "px-6"
      }`}
    >
      <div className={`max-w-4xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 border ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}>
        <a href="#hero" className="text-xl font-bold text-white tracking-tighter">
          Marwah<span className="text-violet-500">.</span>
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="md:hidden mt-2 mx-6 bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <ul className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
