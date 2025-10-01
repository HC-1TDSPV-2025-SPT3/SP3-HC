export function Faq() {
    return (
        <div className="font-sans bg-[#f7f1e9] text-[#1a1a1a] min-h-screen flex flex-col">
            
            {/* Header */}
            <header className="p-8 text-center">
                <h1 className="text-2xl font-bold">FAQ - Perguntas Frequentes</h1>
            </header>

            {/* Main (Card centralizado) */}
            <main className="flex justify-center px-4">
                <div className="bg-white rounded-2xl shadow-md max-w-3xl w-full p-8 space-y-8">
                    
                    <section>
                        <h2 className="text-lg font-bold mb-2 text-[#0d0d0d]">
                            Como posso agendar uma consulta?
                        </h2>
                        <p className="text-base leading-relaxed text-[#4d4d4d]">
                            Você pode agendar sua consulta preenchendo o formulário na página inicial com seus dados e preferências de horário.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-2 text-[#0d0d0d]">
                            Quais especialidades estão disponíveis?
                        </h2>
                        <p className="text-base leading-relaxed text-[#4d4d4d]">
                            Oferecemos atendimentos em diversas especialidades como Clínica Geral, Saúde Mental e acompanhamento de doenças crônicas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-2 text-[#0d0d0d]">
                            O atendimento pode ser remoto?
                        </h2>
                        <p className="text-base leading-relaxed text-[#4d4d4d]">
                            Sim! Mas a primeira consulta deve ser presencial e o restantes por teleatendimento no momento do agendamento.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-2 text-[#0d0d0d]">
                            Como recebo a confirmação da consulta?
                        </h2>
                        <p className="text-base leading-relaxed text-[#4d4d4d]">
                            A confirmação será enviada para o e-mail informado no cadastro.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-2 text-[#0d0d0d]">
                            É necessário ter o número do cartão SUS?
                        </h2>
                        <p className="text-base leading-relaxed text-[#4d4d4d]">
                            Sim, o número do cartão SUS é necessário para concluir o agendamento.
                        </p>
                    </section>

                </div>
            </main>
        </div>
    )
}
