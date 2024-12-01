import "./Banner.css";
import circuloColorido from 'assets/ciculo.png';
import fotoBanner from 'assets/banner.png';

export default function Banner() {
  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Bem-vindos ao Receitas.com!</h1>

        <p className="paragrafo">
          No Receitas.com, você encontra uma seleção incrível de receitas
          saudáveis para todos os gostos. Nosso objetivo é inspirar uma
          alimentação equilibrada, prática e saborosa, com opções que valorizam
          ingredientes naturais e nutritivos. Descubra pratos deliciosos, dicas
          de preparo e ideias criativas para tornar suas refeições mais
          saudáveis e cheias de sabor. Venha transformar sua cozinha em um
          espaço de saúde e bem-estar!
        </p>
      </div>
      <div className="imagens">
        <img className="circuloColorido" src={circuloColorido} aria-hidden={true} />

        <img className="banner-foto" src={fotoBanner} aria-hidden={true} />
      </div>
    </div>
  );
}
