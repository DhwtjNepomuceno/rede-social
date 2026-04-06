import "./style.css";

import { useNavigate } from "react-router";

function VoltarPaginas() {
  const navigate = useNavigate();

  return (
      <button className="Voltar" onClick={() => (navigate(-1))} >
        {"<"}
      </button>
  );
}

export default VoltarPaginas;
