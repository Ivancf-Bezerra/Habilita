import React from "react";
import { useLocation } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();
  const isInstrutor = location.pathname === "./pages/instrutor";

  return (
    <footer
      id="footer"
      className="bg-gray-950 border-t border-white/10 text-gray-400"
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo */}
          <div className="text-xl font-extrabold tracking-tight text-white">
            DA<span className="text-yellow-500">SETAAI</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-10 text-sm font-medium">
            {isInstrutor ? (
              // Links específicos para a página Instrutor
              <>
                <a href="/" className="hover:text-white transition">Início</a>
                <a href="/instrutor#instrutor-inicio" className="hover:text-white transition">Instrutor</a>
                <a href="/contact" className="hover:text-white transition">Contato</a>
              </>
            ) : (
              // Links da página inicial
              <>
                <a href="#hero" className="hover:text-white transition">Início</a>
                <a href="#about" className="hover:text-white transition">Sobre</a>
                <a href="#cta" className="hover:text-white transition">Baixar</a>
                <a href="#contact" className="hover:text-white transition">Contato</a>
              </>
            )}
          </nav>

          {/* Redes sociais */}
          <div className="flex gap-5 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DASETAAI. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
