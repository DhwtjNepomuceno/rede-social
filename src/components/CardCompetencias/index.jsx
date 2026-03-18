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
  const nivel = validarNivel(props.nivel) ? Number(props.nivel) : 0;
  return (
    <Box component="div" sx={boxStyles}>
      <Typography component="h2" variant="h5">
        {habilidade}
      </Typography>
      <Slider
        defaultValue={nivel}
        valueLabelDisplay="auto"
        shiftStep={30}
        marks
        min={0}
        max={5}
        disabled
      />
    </Box>
  );
}

export default CardHabilidade;
