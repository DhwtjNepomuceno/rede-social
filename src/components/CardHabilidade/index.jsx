import "./style.css";

import { validarNivel } from "../../utils/validarNivel";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const boxStyles = {
  border: "1px solid white",
  borderRadius: 8,
  width: 300,
  padding: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function CardHabilidade(props) {
  const habilidade = props.habilidade.trim().length
    ? props.habilidade
    : "Habilidade desconhecida";
  const nivel = isNaN(props.nivel)
    ? "Erro. Insira apenas números"
    : validarNivel(props.nivel.trim())
      ? props.nivel
      : "Nível inválido";
  return (
    <Box component="div" sx={boxStyles}>
      <Typography component="h1" variant="h5">
        {habilidade}
      </Typography>
      <Slider
        defaultValue={nivel}
        valueLabelDisplay="auto"
        shiftStep={30}
        marks
        min={1}
        max={5}
        disabled
      />
    </Box>
  );
}

export default CardHabilidade;
