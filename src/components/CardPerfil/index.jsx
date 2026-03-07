import { validarEmail } from "../../utils/validarEmail";
import { validarUF } from "../../utils/validarUF";
import "./style.css"

function CardPerfil(props) {
  const nome = props.nome.trim().length ? props.nome : "Nome não informado";
  const profissao = props.profissao.trim().length ? props.profissao : "Profissão não informada";
  const uf = validarUF(props.uf.trim()) ? props.uf : "Estado inválido";
  const cidade = props.cidade.trim().length ? props.cidade : "Cidade não informada.";
  const email = validarEmail(props.email.trim()) ? props.email : "E-mail não informado.";
  return (
    <div>
      <h2>{nome}</h2>
      <p>{profissao}</p>
      <p>{cidade}/{uf}</p>
      <p>{email}</p>
    </div>
  )
}

export default CardPerfil;