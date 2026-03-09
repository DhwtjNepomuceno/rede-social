import CardPerfil from "../../components/CardPerfil";
import "./style.css";
import CardHabilidade from "../../components/CardHabilidade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function HomePage() {
  const nome = "Usuário";

  return (
    <>
      <Box component="header" sx={{ p: 4, bgcolor: "main.primary" }}>
        <Typography component="h1" variant="h4" color="main.white">
          Boas-vindas à Devisal, {nome}
        </Typography>
      </Box>

      <div className="Pefis">
        <Box className="boxPerfis">
          <Avatar className="avatarPerfil" sx={{ bgcolor: "main.white", color: "main.black" }}>J</Avatar>
          <CardPerfil
            nome="Jasmin"
            profissao="Engenheira Civil"
            cidade="Vitória"
            uf="Sp"
            email="Jass@email.com"
          />
          <CardHabilidade className="habilidade" habilidade="Liderança" nivel="2" />
        </Box>

        <Box className="boxPerfis">
          <Avatar className="avatarPerfil" sx={{ bgcolor: "main.white", color: "main.black" }}>J</Avatar>
          <CardPerfil
            nome="Marina"
            profissao="Pediatra"
            cidade="Vila Velha"
            uf="ES"
            email="MariPediatria@email.com"
          />
          <CardHabilidade className="habilidade" habilidade="Autodidata" nivel="5" />
        </Box>

        <Box className="boxPerfis">
          <Avatar className="avatarPerfil" sx={{ bgcolor: "main.white", color: "main.black" }}>J</Avatar>
          <CardPerfil
            nome="Marcos"
            profissao="Gerente"
            cidade="Cariacica"
            uf="ES"
            email="MarcoSiq@email.com"
          />
          <CardHabilidade className="habilidade" habilidade="Observação" nivel="27"/>
        </Box>
      </div>
    </>
  );
}

export default HomePage;
