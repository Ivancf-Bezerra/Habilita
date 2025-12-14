import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setEmail("");
    setMessage("");
    setOpen(false);
  };

  const Form = () => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Seu email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="voce@email.com"
          className="
            w-full bg-transparent
            border border-white/20
            rounded-xl px-4 py-3
            text-white placeholder-gray-400
            focus:outline-none focus:border-sky-500
          "
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Mensagem
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Escreva sua mensagem..."
          className="
            w-full bg-transparent
            border border-white/20
            rounded-xl px-4 py-3
            text-white placeholder-gray-400
            focus:outline-none focus:border-sky-500
          "
        />
      </div>

      <button
        type="submit"
        className="
          w-full rounded-xl
          bg-white text-gray-900
          font-semibold py-3
          hover:bg-gray-100 transition
        "
      >
        Enviar mensagem
      </button>
    </form>
  );

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Vamos conversar
        </h2>

        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Tem dúvidas ou quer saber mais?
Entre em contato com nosso time.
        </p>

        {/* MOBILE */}
        <div className="mt-10 flex flex-col gap-4 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="
              w-full rounded-xl
              bg-white text-gray-900
              font-semibold py-4
              shadow-md
            "
          >
            Enviar email
          </button>

          <a
            href="https://wa.me/SEUNUMERO?text=Olá!"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full rounded-xl
              border border-white
              py-4 text-white font-semibold
              bg-green-500 b"
          >
            Abrir WhatsApp
          </a>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid mt-16 max-w-4xl mx-auto grid-cols-2 gap-12 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-2xl px-14 py-14 text-left">
          <Form />

          <div className="flex flex-col justify-center ">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Atendimento rápido
            </h3>
            <p className="text-gray-300 mb-8 text-center">
              Prefere falar diretamente?
Fale conosco pelo WhatsApp.
            </p>

            <a
              href="https://wa.me/SEUNUMERO?text=Olá!"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex justify-center
                rounded-xl border border-whithe
                px-6 py-4 text-white font-semibold bg-green-500
              "
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* MODAL MOBILE */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl bg-gray-900 border border-white/10 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Enviar mensagem
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-2xl"
              >
                ✕
              </button>
            </div>

            <Form />
          </div>
        </div>
      )}
    </section>
  );
}
