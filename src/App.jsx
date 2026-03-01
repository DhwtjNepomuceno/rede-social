import "./App.css";

function CardPerfil(props) {
  const nome = props.nome.trim().length ? props.nome : "Nome não informado";
  const profissao = props.profissao.trim().length ? props.profissao : "Profissão não informada";
  return (
    <div>
      <h2>{nome}</h2>
      <p>{profissao}</p>
    </div>
  )
}

function CartaoHabilidade(props) {
  const habilidade = props.habilidade.trim().length ? props.habilidade : "Habilidade desconhecida";
  const nivel = isNaN(props.nivel) ? "Número incorreto" : props.nivel.trim() ? props.nivel : "Número não informado";
  return (
    <div>
      <h3>{habilidade}</h3>
      <p>{nivel}</p>
    </div>
  )
}

function App() {
  const nome = "wallace";
  const tituloBoasVindas = document.getElementsByClassName("titulo__boas-vindas");
  
  tituloBoasVindas.addEventListener("click", (event) => 
  )
  
  return (
    <>
    <div className="titulo__boas-vindas">
      <h1>Bem-vindo à página, {nome}</h1>
    </div>
    

    
    </>
  );
}

export default App;

