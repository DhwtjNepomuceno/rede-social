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
        <CardPerfil
          nome="Jasmin"
          profissao="Engenheira Civil"
          cidade="Vitória"
          uf="ES"
          email="Jass@email.com"
        />
      </div>
    </>
  );
}

export default HomePage;
