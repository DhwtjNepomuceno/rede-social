import CardPerfil from "../../components/CardPerfil";
import "./style.css";
import CardHabilidade from "../../components/CardHabilidade";

function HomePage() {
  const nome = "Usuário";

  return (
    <>
      <header>
        <h1 className="titulo">Boas-vindas à Devisal, {nome}</h1>
      </header>

      <div className="Pefis">
        <CardPerfil
          nome="Jasmin"
          profissao="Engenheira Civil"
          cidade="Vitória"
          uf="SP"
          email="Jass@email.com"
        />
        <CardPerfil
          nome="Marina"
          profissao="Pediatra"
          cidade="Vila Velha"
          uf="ES"
          email="MariPediatria"
        />
        <CardPerfil
          nome="Marcos"
          profissao="Gerente"
          cidade="Cariacica"
          uf="ES"
          email="MarcoSiq"
        />

        <CardHabilidade habilidade="Liderança" nivel="5" />
      </div>
    </>
  );
}

export default HomePage;
