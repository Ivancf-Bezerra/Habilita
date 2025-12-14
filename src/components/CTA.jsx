import StoreBadge from "./StoreBadge";

import googleBadge from "../assets/images/google-1.png";
import appStoreBadge from "../assets/images/app-store.png";

export default function CTA() {
  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-gray-900
        via-gray-800
        to-gray-900
      "
    >
      {/* Fade superior — neutraliza o About */}
      <div
        className="
          absolute top-0 left-0 w-full h-16
          bg-gradient-to-b
          from-gray-900
          via-gray-900/80
          to-transparent
          pointer-events-none
          z-0
        "
      />

      {/* Glow sutil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28">
        
        {/* Card principal */}
        <div
          className="
            max-w-4xl mx-auto
            rounded-3xl
            bg-gradient-to-br from-gray-800 to-gray-900
            border border-white/10
            shadow-2xl
            px-8 md:px-16 py-16
            text-center
          "
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Baixe agora e comece a usar
          </h2>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
Tenha no celular uma solução simples e segura para conectar instrutores e alunos e organizar todo o processo de ensino.
          </p>

          {/* Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <StoreBadge
              src={googleBadge}
              alt="Disponível no Google Play"
              href="https://play.google.com/store/apps/details?id=SEU_APP_ID"
            />

            <StoreBadge
              src={appStoreBadge}
              alt="Disponível na App Store"
              href="https://apps.apple.com/br/app/SEU_APP_ID"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
