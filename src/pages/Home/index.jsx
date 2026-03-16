import "./style.css";

import CardPerfil from "../../components/CardPerfil";
import CardHabilidade from "../../components/CardHabilidade";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Gerando um número para ID do objeto (excluir depois)
function gerarID() {
  let numero = Math.random();
  numero *= 100000;
  return numero.toFixed();
}

function HomePage() {
  const nome = "Usuário";

  // Mockando uma lista de perfis (isso estaria vindo da API)
  const listaPerfis = [
    {
      id: gerarID(),
      nome: "Jasmin",
      profissao: "Engenheira Civil",
      cidade: "Vitória",
      uf: "ES",
      email: "jasmin@email.com"
    },
    {
      id: gerarID(),
      nome: "Carlos",
      profissao: "Desenvolvedor de Software",
      cidade: "São Paulo",
      uf: "SP",
      email: "carlos@email.com"
    },
    {
      id: gerarID(),
      nome: "Maria",
      profissao: "Designer Gráfico",
      cidade: "Rio de Janeiro",
      uf: "RJ",
      email: "maria@email.com"
    }
  ];

  const listaCompetencias = [
    {
      id: gerarID(),
      habilidade: "comunicação",
      nivel: "2"
    }
  ];

  return (
    <>
      <Box component="header" sx={{ p: 4, bgcolor: "main.primary" }}>
        <Typography component="h1" variant="h4" color="main.white">
          Boas-vindas à Devisal, {nome}
        </Typography>
      </Box>

    <main>
      <div className="Perfis">
        { listaPerfis.map((perfil) => ( // Renderizando lista da tela (JS básico)
          <CardPerfil
            key={perfil.id} // Cada elemento JSX precisa ter um ID único
            nome={perfil.nome}
            profissao={perfil.profissao}
            cidade={perfil.cidade}
            uf={perfil.uf}
            email={perfil.email}
          />
        )) }
      </div>
      { listaCompetencias.map((competencia) => (
          <CardHabilidade
            key={competencia.id} 
            habilidade={competencia.habilidade}
            nivel={competencia.nivel}
          />
        )) }
      <div>
        
      </div>
    </main>
    </>
  );
}

export default HomePage;
