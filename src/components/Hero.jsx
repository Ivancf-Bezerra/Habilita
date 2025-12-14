import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";


export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        min-h-[calc(100vh-72px)]
        bg-white
        z-20
      "
    >
      {/* Imagem à direita */}
      <div
        className="
          hidden md:block
          absolute bottom-0 right-0
          h-full w-1/2
          bg-cover bg-center
        "
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      <div className="relative z-10 h-full">
        <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-28 h-full">
          <div className="grid md:grid-cols-2 gap-16 items-center h-full">

            {/* Texto */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                O DA<span className="text-yellow-500">SETAAI</span> conecta quem ensina
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                  e quem quer conquistar a{" "}
                  <span className="text-yellow-500">habilitação</span>
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                Uma aplicação acessível, prática e segura que aproxima instrutores
                credenciados ao Detran de alunos que buscam aprender a dirigir com
                mais liberdade, clareza e confiança.
              </p>

              {/* BOTÕES */}
<div className="mt-10 flex gap-4">

  <a
    href="#cta"
    className="
      flex-1 text-center px-8 py-4 rounded-xl
      bg-gray-900 text-white font-semibold
      shadow-lg shadow-black/10
    "
  >
    Começar
  </a>

  <Link
    to="/instrutor"
    className="
      flex-1 text-center px-8 py-4 rounded-xl
      font-semibold bg-yellow-500 text-gray-900
      md:bg-transparent md:border md:border-gray-300 md:text-gray-700
    "
  >
    Ser instrutor
  </Link>

</div>

            </div>

            {/* Coluna direita vazia */}
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}
