import "./SobreMim.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/capa.png";
import fotoDonos from "assets/donos.webp"

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className="subtitulo">Sobre Receitas.com!</h3>
      <img
                src={fotoDonos}
                alt="Foto dos Donos"
                className="fotoSobreMim"
            />
      <p className="paragrafo">
        Em 2010, um jovem casal apaixonado por culinária, Ana e Ricardo, decidiu
        unir suas duas grandes paixões: cozinhar e compartilhar momentos ao
        redor da mesa. Eles viviam em uma pequena cidade no interior, onde as
        refeições em família eram sagradas, e acreditavam que a comida tinha o
        poder de conectar pessoas. Foi então que surgiu a ideia de criar um site
        que fosse uma verdadeira comunidade culinária, um espaço para
        compartilhar receitas simples e sofisticadas, histórias de cozinha e
        dicas valiosas. Assim nasceu o <stong>Receitas.com</stong>. <br />
        <br /> <strong>O Início: Um Site Simples, mas Cheio de Amor</strong>
        <br /> No começo, o Receitas.com era um blog simples. Ana digitava as
        receitas em um laptop antigo, enquanto Ricardo fazia as fotos com o
        celular. Eles publicavam pratos que amavam cozinhar, como o bolo de
        cenoura com cobertura de chocolate da avó de Ana e o tradicional feijão
        tropeiro que Ricardo aprendia desde criança. Apesar dos recursos
        limitados, cada postagem transbordava autenticidade, o que rapidamente
        atraiu a atenção de amigos e vizinhos. A grande virada aconteceu quando
        um usuário, encantado com as receitas, compartilhou o site nas redes
        sociais. Em questão de semanas, o número de acessos disparou, e o casal
        percebeu que sua ideia tinha potencial para crescer muito mais.
        <br />
        <br /> <strong>Crescimento: Do Blog ao Portal</strong> <br />
        Com o aumento de acessos, Ana e Ricardo decidiram transformar o
        Receitas.com em algo maior. Contrataram um desenvolvedor para modernizar
        o site, incluindo recursos como:
        <br /> <stong>- Busca inteligente:</stong> para encontrar receitas por
        ingredientes ou tipo de prato.
        <br /> <stong> - Avaliações dos usuários:</stong> permitindo que cada
        pessoa deixasse sua opinião.
        <br /> <stong> - Vídeos passo a passo:</stong>
        Ricardo comprou uma câmera profissional e começou a gravar Ana
        cozinhando, o que encantou a audiência. <br />
        Além disso, abriram espaço para que usuários cadastrados pudessem
        publicar suas próprias receitas. Em pouco tempo, o Receitas.com se
        tornou uma comunidade colaborativa, onde pessoas de todo o Brasil
        trocavam ideias culinárias e dicas. <br />
        <br />
        <strong>Reconhecimento Nacional</strong> <br />O crescimento do
        Receitas.com chamou a atenção de chefs renomados e marcas de alimentos.
        O site passou a ser patrocinado por grandes empresas e foi mencionado em
        programas de TV e revistas de gastronomia. Em 2015, lançaram um
        aplicativo que trouxe ainda mais acessibilidade para os usuários,
        permitindo que as receitas estivessem à mão de quem quisesse cozinhar na
        hora. Um marco importante foi a criação de uma seção dedicada a receitas
        regionais brasileiras, que ajudou a valorizar a diversidade da culinária
        nacional. Desde o acarajé baiano até o chimarrão gaúcho, o Receitas.com
        se tornou um verdadeiro tributo à cozinha brasileira. <br />
        <br />
        <strong>Receitas com Impacto Social</strong> <br />Ana e Ricardo nunca
        esqueceram suas raízes e a ideia de que comida é sinônimo de união. Por
        isso, em 2018, lançaram o projeto <stong>"Receitas que Transformam"</stong>, uma
        iniciativa para ensinar famílias de baixa renda a cozinhar refeições
        nutritivas e acessíveis. Por meio de oficinas culinárias e conteúdos
        gratuitos, o Receitas.com passou a impactar milhares de vidas, além de
        promover sustentabilidade ao ensinar o aproveitamento integral dos
        alimentos. <br /><br /><strong>O Futuro do Receitas.com</strong><br /> Hoje, o Receitas.com é um
        dos maiores sites de culinária do Brasil, com milhões de acessos
        mensais. Ana e Ricardo continuam liderando o projeto, agora com uma
        equipe dedicada de chefs, desenvolvedores e criadores de conteúdo. O
        casal planeja expandir o site internacionalmente, compartilhando
        receitas brasileiras com o mundo e trazendo pratos de outras culturas
        para os brasileiros. Para Ana e Ricardo, o Receitas.com nunca foi apenas
        sobre comida, mas sobre histórias, conexões e amor em cada prato. E
        assim, o site continua crescendo, um tempero de cada vez, enquanto
        transforma cozinhas e corações.
      </p>
    </PostModelo>
  );
}
