import trafficImg from '../assets/images/traffic.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-gray-900
        via-gray-900
        to-gray-800
      "
    >
      {/* Imagem lateral – apenas desktop */}
      <div
        className="
          hidden md:block
          absolute top-0 right-0
          h-full w-1/2
          bg-cover bg-center
        "
        style={{ backgroundImage: `url(${trafficImg})` }}
      />

      {/* Overlay para leitura + integração */}
      <div
        className="
          hidden md:block
          absolute inset-y-0 right-0 w-1/2
          bg-gradient-to-l
          from-black/60
          via-black/30
          to-transparent
        "
      />

      {/* Conteúdo */}
      <div className="max-w-300 mx-auto px-6 py-16 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Um aplicativo que
              <span className="block text-sky-400">
                organiza, conecta <span className="text-white"> e </span> simplifica
              </span>
              <span>o ensino para sua</span>
              <span className="text-sky-400"> Habilitação</span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg sm:max-w-md">
              O DASETAAI nasceu para conectar quem quer ensinar com quem quer aprender, de forma justa e transparente.
              Aqui, ninguém fica de fora: o aplicativo foi pensado para valorizar o trabalho do instrutor e, ao mesmo tempo, facilitar a jornada de quem sonha com a CNH.
              Tudo isso com mais simplicidade, confiança e liberdade para ambos os lados.
            </p>

            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-lg sm:max-w-md">
              Uma solução moderna feita para quem ensina com dedicação e para quem aprende com propósito.
            </p>
          </div>
        </div>
      </div>

      {/* Fade inferior */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-16
          bg-gradient-to-b
          from-transparent
          via-gray-900/40
          to-gray-900/70
          pointer-events-none
        "
      />

      {/* Fade superior */}
      <div
        className="
          absolute top-0 left-0 w-full h-16
          bg-gradient-to-t
          from-transparent
          via-gray-900/40
          to-gray-900/70
          pointer-events-none
        "
      />
    </section>
  );
}
