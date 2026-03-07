import "./style.css";

function CardHabilidade(props) {
  const habilidade = props.habilidade.trim().length ? props.habilidade : "Habilidade desconhecida";
  const nivel = isNaN(props.nivel) ? "Número incorreto" : props.nivel.trim() ? props.nivel : "Número não informado";
  return (
    <div>
      <h3>{habilidade}</h3>
      <p>{nivel}</p>
    </div>
  )
}

export default CardHabilidade;