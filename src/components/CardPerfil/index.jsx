import "./style.css";

import { validarEmail } from "../../utils/validarEmail";
import { validarUF } from "../../utils/validarUF";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Link } from "react-router";

const boxStyles = {
  border: '1px solid white',
  borderRadius: 8,
  width: 300,
  padding: 4,
  display: 'flex',
  gap: 0.25,
  flexDirection: 'column',
  alignItems: 'center',
}

const avatarStyles = { 
  bgcolor: "main.secondary", 
  color: "main.black", 
  width: 180, 
  height: 180, 
  fontSize: 80,
  marginBottom: 0.75
}

const chipStyles = { 
  bgcolor: 'main.secondary',
  color: 'main.black'
}

function CardPerfil(props) {
  const nome = props.nome.trim().length ? props.nome : "Nome não informado";
  const profissao = props.profissao.trim().length ? props.profissao : "Profissão não informada";
  const uf = !props.uf.trim().length ? "Estado não informado" : validarUF(props.uf.trim()) ? props.uf : "Estado inválido";
  const cidade = props.cidade.trim().length ? props.cidade : "Cidade não informada.";
  const email = validarEmail(props.email.trim()) ? props.email : "E-mail não informado.";
  return (
    <Link to={`${props.id}`}>
      <Box component="div" sx={boxStyles}>
        <Avatar sx={avatarStyles}>{nome[0]}</Avatar>
        <Typography component="h2" variant="h4">{nome}</Typography>
        <Chip label={profissao} sx={chipStyles} />
        <Typography component="p" variant="h6">{email}</Typography>
        <Typography component="p" variant="p">{cidade}/{uf}</Typography>
      </Box>
    </Link>
  )
}

export default CardPerfil;