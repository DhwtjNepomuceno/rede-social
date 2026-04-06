import "./style.css";

import { NavLink } from "react-router";

function HomePage() {

  return (
    <>
      <main>
        <h2>Olá mundo</h2>
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
