export default function Instrutor() {
  return (
    <section
      id="instrutor"
      className="min-h-screen bg-gray-50 pt-32 pb-24"
    >
      <div id="instrutor-inicio" className="max-w-5xl mx-auto px-6">
        
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Credenciamento de Instrutor de Trânsito
        </h1>

        {/* Introdução */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          O exercício da atividade de instrutor de trânsito está condicionado ao
          cumprimento de requisitos legais e regulamentares estabelecidos pelos
          órgãos executivos de trânsito, nos termos do Código de Trânsito
          Brasileiro (CTB) e das normas expedidas pelo Departamento Estadual de
          Trânsito (Detran).
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          As informações abaixo apresentam, de forma objetiva e institucional,
          os critérios mínimos exigidos para a atuação regular do instrutor,
          bem como as obrigações inerentes ao exercício da atividade.
        </p>

        {/* Veículo */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Requisitos do veículo utilizado nas aulas
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            O veículo empregado na instrução prática de direção veicular deverá
            atender integralmente às exigências previstas na legislação de
            trânsito vigente, observando-se, obrigatoriamente, os seguintes
            critérios:
          </p>

          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Manutenção preventiva e corretiva realizada de forma regular;</li>
            <li>Presença de todos os equipamentos obrigatórios exigidos pelo CTB;</li>
            <li>Documentação veicular válida e atualizada;</li>
            <li>
              Identificação visível como veículo destinado à instrução de
              aprendizagem veicular.
            </li>
          </ul>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Quanto ao tempo máximo de fabricação, deverão ser observados os
            seguintes limites:
          </p>

          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Motocicletas: até 8 (oito) anos de fabricação;</li>
            <li>Automóveis: até 12 (doze) anos de fabricação;</li>
            <li>Veículos de carga: até 20 (vinte) anos de fabricação.</li>
          </ul>
        </div>

        {/* Instrutor */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Requisitos legais do instrutor
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Para atuar como instrutor de trânsito devidamente credenciado, o
            profissional deverá preencher, cumulativamente, os seguintes
            requisitos:
          </p>

          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Ter idade mínima de 21 (vinte e um) anos;</li>
            <li>
              Possuir Carteira Nacional de Habilitação válida há, no mínimo,
              2 (dois) anos;
            </li>
            <li>
              Não ter cometido infração de trânsito de natureza gravíssima nos
              últimos 60 (sessenta) dias;
            </li>
            <li>
              Não ter sofrido penalidade de cassação da Carteira Nacional de
              Habilitação;
            </li>
            <li>Comprovar conclusão do ensino médio;</li>
            <li>
              Possuir formação específica em habilidades pedagógicas, com foco
              em legislação de trânsito e direção segura;
            </li>
            <li>
              Ser aprovado em avaliação técnica, com emissão de certificado
              correspondente;
            </li>
            <li>
              Possuir certificado de curso específico reconhecido pelo órgão
              executivo de trânsito competente;
            </li>
            <li>
              Ter seu nome devidamente registrado nos cadastros oficiais do
              Detran estadual e do Ministério dos Transportes.
            </li>
          </ul>
        </div>

        {/* Obrigações */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Obrigações durante a prestação do serviço
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Durante a realização das aulas práticas de direção veicular, o
            instrutor deverá cumprir as seguintes obrigações:
          </p>

          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              Registrar e validar a presença e participação do aluno em cada
              aula ministrada;
            </li>
            <li>
              Atuar em conformidade com as normas legais, técnicas e éticas
              aplicáveis à atividade;
            </li>
            <li>
              Portar, obrigatoriamente, durante as aulas:
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Carteira Nacional de Habilitação (CNH);</li>
                <li>Credencial de Instrutor ou crachá oficial;</li>
                <li>Licença de Aprendizagem Veicular;</li>
                <li>
                  Certificado de Registro e Licenciamento do Veículo (CRLV).
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Atuação independente */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            Atuação profissional
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            O instrutor de trânsito, ainda que vinculado a uma autoescola, poderá
            exercer a atividade de forma independente, desde que cumpra
            integralmente as exigências legais e mantenha sua situação regular
            junto aos órgãos competentes.
          </p>
        </div>

        {/* Papel da plataforma */}
        <div className="mt-14 border-t border-gray-200 pt-8">
          <p className="text-gray-700 leading-relaxed">
            O DASETAAI atua exclusivamente como plataforma de conexão entre
            instrutores legalmente credenciados e alunos interessados em aulas
            de direção, não substituindo, em nenhuma hipótese, as exigências
            legais impostas pelos órgãos reguladores de trânsito.
          </p>
        </div>
      </div>
    </section>
  );
}
