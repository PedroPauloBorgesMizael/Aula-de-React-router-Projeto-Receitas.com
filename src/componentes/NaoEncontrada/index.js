import { useNavigate } from "react-router-dom"
import "./NaoEncontrada.css"
import erro404 from "assets/erro404.webp"

export default function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
        <div className="container__nencontrada">
            <span className="texto404">404</span>
            <h1 className="titulo404">
                Ops! Página não encontrada.
            </h1>
            <p className="paragrafo404">
            Tem certeza de que era isso que você estava procurando? <br />
            Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div className="botaoContainer" onClick={() => navegar(-1)}>
                <button className="botaoLer btn_principal">Voltar</button>
            </div>

            <img 
             className="imagem404"
             src={erro404}
            />
        </div>
        <div className="espacoEmBranco">

        </div>
        </>
    )
}