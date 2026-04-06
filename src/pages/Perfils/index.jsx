import "./style.css";

import CardPerfil from "../../components/CardPerfil";
import { UsuariosService } from "../../services/usuariosService";

const usuariosService = new UsuariosService();

async function listarUsuarios() {
  return usuariosService
    .get()
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("Erro ao listar usuários: ", error);
      alert("Erro ao listar usuários");
      return []
    });
}

const listaPerfis = await listarUsuarios();

function PerfisPage() {
  

  return (
    <main>
      <h2>Perfis de usuários</h2>
      <div className="Perfis">
        {listaPerfis.map((perfil) => (
          <CardPerfil
            key={perfil.id}
            id={perfil.id}
            nome={perfil.nome}
            profissao={perfil.profissao}
            cidade={perfil.cidade}
            uf={perfil.uf}
            email={perfil.email}
          />
        ))}
      </div>
    </main>
  );
}

export default PerfisPage;
