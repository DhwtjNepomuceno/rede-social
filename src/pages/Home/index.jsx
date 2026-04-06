import "./style.css";

import { NavLink } from "react-router";

function HomePage() {

  return (
    <>
      <main>
        
        <NavLink to="/perfis">Perfis de usuário</NavLink>
      </main>
    </>
  );
}

export default HomePage;
