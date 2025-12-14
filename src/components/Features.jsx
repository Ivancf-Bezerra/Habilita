export default function Features() {
  const items = [
    {
      icon: "🗂️",
      title: "Perfis verificados e visibilidade real",
      text: "Instrutores credenciados podem criar um perfil profissional completo, informando experiência, disponibilidade e região de atendimento. Alunos acessam perfis confiáveis e escolhem com quem aprender, com base em informações claras e atualizadas."
    },
    {
      icon: "⚡",
      title: "Conexão direta, rápida e sem intermediários",
      text: "O contato acontece dentro do próprio aplicativo, garantindo agilidade, organização e mais autonomia para ambas as partes. Instrutores recebem solicitações em tempo real. Alunos conseguem resposta rápida para iniciar suas aulas."
    },
    {
      icon: "🔒",
      title: "Segurança em todas as etapas",
      text: "O DASETAAI adota padrões modernos de segurança e verificação, garantindo: instrutores credenciados e identificados; proteção dos dados pessoais; ambiente confiável para comunicação e negociação. Mais tranquilidade para quem ensina. Mais confiança para quem aprende."
    },
    {
      icon: "✨",
      title: "Experiência simples para todos",
      text: "O aplicativo foi pensado para ser fácil de usar tanto para instrutores quanto para alunos: navegação intuitiva; processos claros; funções objetivas. Sem sistemas complexos. Sem etapas desnecessárias."
    }
  ];

  return (
    <section id="features" className="relative bg-white">

      {/* CABEÇALHO */}
      <div className="relative bg-gray-900">
        <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Agende suas aulas com segurança e praticidade
          </h2>

          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            O DASETAAI foi desenvolvido para tornar o processo de ensino para CNH
            mais simples, transparente e eficiente, acompanhando a modernização
            oficial do sistema de habilitação.
            <br /><br />
            O aplicativo cria um ambiente confiável onde instrutores e alunos se
            conectam de forma direta, sem burocracia e com total segurança.
          </p>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div
        className="
          relative
          bg-white
          rounded-t-[3rem]
          shadow-2xl
          -mt-16
        "
      >
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
