import { Link, Outlet } from "react-router-dom";


export function Layout(){
    return(
        <div>
            <nav>
                <div>
                    <Link to = "/"> Página inicial</Link>
                    <Link to = "/servicos">Serviços</Link>
                    <Link to = "/agendamentos">Agendamentos</Link>
                    <Link to = "/area_do_paciente">Área do paciente</Link>
                    <Link to = "/contato">Contato</Link>
                    <Link to = "/entrar">Entrar</Link>
                    <Link to = "/iniciar">Iniciar</Link>
                </div>
            </nav>
            <footer>
                <div>
                    <Link to = "/faq">Faq</Link>
                    <Link to = "/integrantes">Integrantes</Link>
                </div>
            </footer>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}