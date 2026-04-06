import "./style.css"
import { gerarID } from "../../utils/gerarID";

import CardPerfil from "../../components/CardPerfil";

function PerfisPage() {
    // Mockando uma lista de perfis (isso estaria vindo da API)
    const listaPerfis = [
        {
            id: gerarID(),
            nome: "Jasmin",
            profissao: "Engenheira Civil",
            cidade: "Vitória",
            uf: "ES",
            email: "jasmin@email.com"
        },
        {
            id: gerarID(),
            nome: "Carlos",
            profissao: "Desenvolvedor de Software",
            cidade: "São Paulo",
            uf: "SP",
            email: "carlos@email.com"
        },
        {
            id: gerarID(),
            nome: "Maria",
            profissao: "Designer Gráfico",
            cidade: "Rio de Janeiro",
            uf: "RJ",
            email: "maria@email.com"
        }
    ];

    return (
        <main>
            <h2>Perfis de usuário</h2>
            <div className="Perfis">
                {listaPerfis.map((perfil) => ( // Renderizando lista da tela (JS básico)
                    <CardPerfil
                        key={perfil.id} // Cada elemento JSX precisa ter um ID único
                        nome={perfil.nome}
                        profissao={perfil.profissao}
                        cidade={perfil.cidade}
                        uf={perfil.uf}
                        email={perfil.email}
                    />
                ))}
            </div>
        </main>
    )
}

export default PerfisPage;