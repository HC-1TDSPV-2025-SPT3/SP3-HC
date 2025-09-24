import Kevin from "../assets/perfil Kevin.png";
import Raul from "../assets/perfil Raul.png";
import Larissa from "../assets/perfil_Larissa.png";
import { CardIntegrante } from "../components/cardIntegrantes";

export function Integrantes() {
  return (
    <>
      <header className="bg-blue-600 text-white py-6 text-center text-2xl font-bold">
        Integrantes do Grupo
      </header>

      <main className="flex justify-center flex-wrap gap-8 p-8 bg-gray-100">
        <CardIntegrante
          image={Kevin}
          alt="Foto de Kevin"
          name="Kevin Martins Campos"
          rm="563454"
          turma="1TDSPV"
        />
        <CardIntegrante
          image={Raul}
          alt="Foto de Raul"
          name="Raul Junior Bento dos Santos"
          rm="563458"
          turma="1TDSPV"
        />
        <CardIntegrante
          image={Larissa}
          alt="Foto de Larissa"
          name="Larissa Juvenal de Magalhães"
          rm="566457"
          turma="1TDSPV"
        />
      </main>
    </>
  );
}
