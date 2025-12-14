import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function FloatingInstructor() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/instrutor") return null;

  const handleVerInstrucoes = () => {
    navigate("/instrutor"); // navega para a página Instrutor
    setOpen(false);

    // pequeno delay para garantir que a página foi renderizada
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end hidden md:flex">
      
      {/* Botão totalmente arredondado */}
      <button
        onClick={() => setOpen(!open)}
        className="
          bg-yellow-500
          text-gray-900
          w-64
          flex items-center justify-center
          cursor-pointer
          hover:bg-yellow-400
          transition
          rounded-t-lg rounded-b-lg
          py-4
          z-10
          translate-y-2
        "
        aria-label="Quero ser instrutor"
      >
        <span className="transform font-bold tracking-wide whitespace-nowrap">
          Quero ser instrutor
        </span>
      </button>

      {/* Modal encaixado abaixo do botão */}
      <div
        className={`
          w-64
          bg-white border border-gray-200 shadow-2xl p-4
          rounded-r-none rounded-b-lg rounded-t-none
          transform transition-all duration-300 ease-in-out origin-top
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <p className="text-sm text-gray-700 leading-relaxed">
          Saiba como se tornar um instrutor credenciado, quais são as
          exigências legais e como atuar de forma regular e segura.
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={handleVerInstrucoes}
            className="text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Ver instruções
          </button>

          <button
            onClick={() => setOpen(false)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
