import "./style.css";

import { NavLink } from "react-router";
import { gerarID } from "../../utils/gerarID";

// Gerando um número para ID do objeto (excluir depois)

function HomePage() {

  const listaCompetencias = [
    {
      id: gerarID(),
      habilidade: "comunicação",
      nivel: "2"
    }
  ];

  return (
    <>
      <main>
        <h1>Olá mundo</h1>
        <NavLink to="/perfis">Perfis de usuário</NavLink>

        {/* 

        {listaCompetencias.map((competencia) => (
          <CardHabilidade
            key={competencia.id}
            habilidade={competencia.habilidade}
            nivel={competencia.nivel}
          />
        ))} */}
      </main>
    </>
  );
}

export default HomePage;
