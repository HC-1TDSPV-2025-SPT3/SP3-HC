import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f1e9]">
      {/* NAVBAR */}
      <nav className="bg-[#0f1821] text-white border-b-[10px] border-[#66cccc] px-5 py-[15px] shadow-[1px_1px_5px_black]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto flex-wrap">
          
          {/* Links principais */}
          <ul className="flex gap-[15px] list-none flex-wrap">
            <li className="px-[10px] hover:border-b-4 hover:border-[#66cccc] transition duration-100">
              <Link to="/" className="font-medium hover:text-[#66cccc]">
                Página inicial                                                                             
              </Link>
            </li>
            <li className="px-[10px] hover:border-b-4 hover:border-[#66cccc] transition duration-100">
              <Link to="/servicos" className="font-medium hover:text-[#66cccc]">
                Serviços
              </Link>
            </li>
            <li className="px-[10px] hover:border-b-4 hover:border-[#66cccc] transition duration-100">
              <Link
                to="/agendamentos"
                className="font-medium hover:text-[#66cccc]"
              >
                Agendamentos
              </Link>
            </li>
            <li className="px-[10px] hover:border-b-4 hover:border-[#66cccc] transition duration-100">
              <Link
                to="/area_do_paciente"
                className="font-medium hover:text-[#66cccc]"
              >
                Área do paciente
              </Link>
            </li>
            <li className="px-[10px] hover:border-b-4 hover:border-[#66cccc] transition duration-100">
              <Link to="/contato" className="font-medium hover:text-[#66cccc]">
                Contato
              </Link>
            </li>
          </ul>

          {/* Botões */}
          <div className="flex gap-4 mt-3 sm:mt-0">
            <Link
              to="/entrar"
              className="bg-[#0673AC] text-white px-4 py-2 rounded-lg no-underline transition-colors duration-100 hover:bg-[#055a89]"
            >
              Entrar
            </Link>
            <Link
              to="/iniciar"
              className="bg-[#20A349] text-white px-4 py-2 rounded-lg no-underline transition-colors duration-100 hover:bg-[#1b8a3c]"
            >
              Iniciar
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <main className="flex-1 max-w-[1200px] mx-auto p-6">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0f1821] text-white border-t-[10px] border-[#66cccc] px-5 py-[15px] shadow-[1px_0px_5px_black]">
        <div className="flex justify-around items-center max-w-[1200px] mx-auto flex-wrap">
          <ul className="flex gap-[100px] list-none flex-wrap">
            <li className="hover:text-[#66cccc] hover:border-b-4 hover:border-[#66cccc] transition duration-100">
              <Link to="/faq" className="font-medium hover:text-[#66cccc]">
                FAQ
              </Link>
            </li>
            <li className="hover:text-[#66cccc] hover:border-b-4 hover:border-[#66cccc] transition duration-100">
              <Link
                to="/integrantes"
                className="font-medium hover:text-[#66cccc]"
              >
                Integrantes
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center mt-6 text-gray-400 text-sm">
          © 2025 Projeto HC — Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
