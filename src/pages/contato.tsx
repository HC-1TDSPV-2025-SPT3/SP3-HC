import metro from "../assets/07-metro.png";
import mapa from "../assets/06-mapa.png";

export function Contato() {
    return (
        <div className="font-sans bg-[#f5f0ea] min-h-screen m-0 p-0">
            <header className="pt-10 px-16">
                <h1 className="text-2xl font-bold">contato</h1>
            </header>

            <main className="px-16 py-5">
                <div className="flex flex-wrap items-start gap-16">
                    
                    {/* Informações de contato */}
                    <div className="min-w-[300px] mt-2 space-y-2">
                        <p>contato@hc.com.br</p>
                        <p>(11)1234-5678</p>
                        <p>
                            <a 
                                href="#" 
                                className="text-black underline"
                            >
                                Av. Dr. Enéas Carvalho de Aguiar, 255 – Cerqueira César, São Paulo – SP, 05403-000
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            <img src={metro} alt="Ícone metrô" className="inline-block" />
                            Próximo à linha 2 Clínicas 
                            <span className="text-green-600">●</span>
                        </p>
                    </div>

                    {/* Mapa */}
                    <div className="map">
                        <img 
                            src={mapa} 
                            alt="Mapa com localização do Hospital das Clínicas" 
                            className="max-w-full h-auto rounded-md shadow-md"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
