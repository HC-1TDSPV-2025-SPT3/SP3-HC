import perfil from "../assets/04-perfil.webp";

export function AgendamentoForm() {
  return (
    <>
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white p-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-8">
          {/* Texto */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Agende sua consulta</h1>
            <p className="text-gray-600">
              Escolha a especialidade, a data e o horário disponíveis para ser atendido de forma simples e rápida.
            </p>
          </div>

          {/* Imagem */}
          <div>
            <img
              src={perfil}
              alt="Paciente sorrindo"
              className="w-44 h-44 object-cover rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Formulário */}
      <main>
        <section className="p-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Insira seus dados</h2>
          <form className="flex flex-col gap-4">
            {/* Nome e Sobrenome */}
            <div className="flex gap-4 flex-wrap">
              <input
                type="text"
                placeholder="Nome"
                required
                className="flex-1 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Sobrenome"
                required
                className="flex-1 p-3 border border-gray-300 rounded-md"
              />
            </div>

            <input
              type="text"
              placeholder="Data de nascimento"
              required
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Número do cartão SUS"
              required
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Especialidade desejada"
              required
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Tipo de consulta (Presencial / remoto)"
              required
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Data e horário preferido"
              required
              className="p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 border border-gray-300 rounded-md"
            />

            <textarea
              placeholder="Observações adicionais"
              className="p-3 border border-gray-300 rounded-md min-h-[100px] resize-y"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Agendar Consulta
            </button>
          </form>
        </section>
      </main>
      </div>
    </>
  );
}
