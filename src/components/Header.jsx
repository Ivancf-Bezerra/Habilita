import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    ["hero", "Início"],
    ["about", "Sobre"],
    ["cta", "Baixar"],
    ["contact", "Contato"],
  ];

  const handleScroll = (id) => {
    // Se não estiver na página inicial, navega para ela primeiro
    if (window.location.pathname !== "/") {
      navigate("/"); 
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // pequeno delay para garantir renderização
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold tracking-tight text-gray-900">
          DA<span className="text-yellow-500">SETAAI</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          {menuItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="hover:text-yellow-500 transition cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-900 focus:outline-none"
          aria-label="Abrir menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-black/5">
          {menuItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="block w-full text-left px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
