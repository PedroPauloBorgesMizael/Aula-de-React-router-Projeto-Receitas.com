import "./Rodape.css";
import Logo from "assets/logo.png";
import Freepik from "assets/freepik.png";
import Alura from "assets/Alura.png";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="logo-eu">
        <img src={Logo} className="logo" />
        <p>Desenvolvido por Pedro Paulo Borges Mizael</p>
      </div>
      <div className="creditos">
        <section>
          <p>Créditos das imagens:</p>
          <a href="https://br.freepik.com/">
            <img src={Freepik} className="imagens-creditos" />
          </a>
        </section>

        <section>
          <p>Desing desenvolvido por Alura:</p>
          <a href="https://alura.com.br">
            <img src={Alura} className="imagens-creditos" />
          </a>
        </section>
      </div>
    </footer>
  );
}
