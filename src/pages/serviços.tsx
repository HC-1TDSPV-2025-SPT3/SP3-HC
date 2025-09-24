import saude1 from "../assets/saude1.webp";
import saude2 from "../assets/saude2.jpg";
import saude3 from "../assets/saude3.jpg";
import { Card } from "../components/card";

export function Servicos() {
  return (
    <>
      <header className="bg-white py-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">
            Conheça os serviços oferecidos pelo{" "}
            <strong>Hospital das Clínicas da FMUSP</strong>
          </h1>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Tipos de serviços
          </h2>
        </div>
      </header>

      <main>
        <section className="py-10 px-5 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <p className="text-gray-700 text-lg">
              O Hospital das Clínicas oferece uma ampla gama de serviços
              especializados para atender às suas necessidades com excelência,
              humanização e tecnologia. Explore abaixo os principais tipos de
              serviços disponíveis e saiba como acessá-los com facilidade.
              Estamos aqui para cuidar de você em todas as etapas da sua
              jornada de saúde.
            </p>
          </div>

          <section className="flex flex-wrap justify-center gap-8" id="servicos">
            <Card
              image={saude1}
              alt="Consulta Médica Online"
              title="Consulta Médica Online"
              description="Atendimento com especialistas de diversas áreas sem sair de casa, via chamada de vídeo, para diagnóstico, orientação e acompanhamento."
            />
            <Card
              image={saude2}
              alt="Retorno Ambulatorial Virtual"
              title="Retorno Ambulatorial Virtual"
              description="Realize o retorno da sua consulta presencial de forma online, facilitando o acompanhamento do tratamento com segurança e comodidade."
            />
            <Card
              image={saude3}
              alt="Avaliação Pré-Operatória Remota"
              title="Avaliação Pré-Operatória Remota"
              description="Consulta virtual para avaliação médica antes de procedimentos cirúrgicos, otimizando tempo e evitando deslocamentos desnecessários."
            />
          </section>
        </section>
      </main>
    </>
  );
}
