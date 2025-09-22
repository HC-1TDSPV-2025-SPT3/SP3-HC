import { Link } from "react-router-dom";
import medica from "../assets/medica.hc.png";

export function Inicial() {
  return (
    <>
      {/* HEADER */}
      <header className="bg-[#f5f5f5] text-left px-5 pt-10">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold text-[#111]">
            Conheça os serviços oferecidos pelo{" "}
            <strong>Hospital das Clínicas da FMUSP</strong>
          </h1>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main>
        <section className="bg-[#f5f5f5] p-5">
          <div className="flex flex-row items-center justify-between gap-10 max-w-[1200px] mx-auto flex-wrap">
            
            {/* TEXTO */}
            <div className="flex-1 min-w-[400px]">
              <p className="text-base text-[#333] mb-5 leading-relaxed">
                O Hospital das Clínicas oferece uma ampla gama de serviços
                especializados para atender às suas necessidades com excelência,
                humanização e tecnologia. Explore abaixo os principais tipos de
                serviços disponíveis e saiba como acessá-los com facilidade.
                Estamos aqui para cuidar de você em todas as etapas da sua
                jornada de saúde.
              </p>
              <div>
                <Link
                  to="/servicos"
                  className="bg-black text-white px-6 py-3 rounded-md font-medium no-underline transition-colors duration-300 hover:bg-[#333]"
                >
                  Serviços
                </Link>
              </div>
            </div>

            {/* IMAGEM */}
            <div className="flex-1 min-w-[300px]">
              <img
                src={medica}
                alt="Atendimento médico por vídeo chamada"
                className="w-full max-w-[500px] rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
