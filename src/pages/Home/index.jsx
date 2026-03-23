import "./style.css";

import { NavLink } from "react-router";

function HomePage() {

  return (
    <>
      <main>
        <h1>Olá mundo</h1>
        <NavLink to="/perfis">Perfis de usuário</NavLink>
      </main>
    </>
  );
}

export default HomePage;
