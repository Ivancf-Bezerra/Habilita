import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderInstrutor() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold tracking-tight text-gray-900">
          DA<span className="text-yellow-500">SETAAI</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-yellow-500 transition">
            Início
          </Link>
          <Link to="/pages/contact" className="hover:text-yellow-500 transition">
            Contato
          </Link>
          {/* Aqui você pode adicionar novos itens específicos */}
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
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block w-full text-left px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
          >
            Início
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-left px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
          >
            Contato
          </Link>
          {/* Novos itens podem ser adicionados aqui */}
        </nav>
      )}
    </header>
  );
}
