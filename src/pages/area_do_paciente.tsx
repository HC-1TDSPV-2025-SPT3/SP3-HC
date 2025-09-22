import calendario from "../assets/05-calendario.png";

export function Area_do_paciente() {
    return (
        <div className="font-sans bg-white text-[#111] min-h-screen m-0 p-0">
            
            {/* Header */}
            <header className="p-5">
                <h1 className="text-[1.8rem] font-bold">Nome do Paciente</h1>
            </header>

            {/* Main */}
            <main className="flex flex-wrap justify-between items-start gap-10 px-5 pb-10">
                
                {/* Consultas */}
                <section className="flex-1 min-w-[280px]">
                    <div className="mb-5">
                        <strong className="block text-base mb-1">Consulta Médica Online</strong>
                        <p className="text-gray-500 m-0">22/07/2025</p>
                    </div>
                    <div className="mb-5">
                        <strong className="block text-base mb-1">Acompanhamento de Doenças Crônicas</strong>
                        <p className="text-gray-500 m-0">01/08/2025</p>
                    </div>
                    <div className="mb-5">
                        <strong className="block text-base mb-1">Atendimento em Saúde Mental</strong>
                        <p className="text-gray-500 m-0">13/09/2025</p>
                    </div>
                </section>

                {/* Calendário */}
                <section className="flex-1 min-w-[300px] text-center">
                    <img 
                        src={calendario} 
                        alt="Calendário com eventos marcados" 
                        className="max-w-full h-auto rounded-md"
                    />
                </section>
            </main>
        </div>
    )
}
