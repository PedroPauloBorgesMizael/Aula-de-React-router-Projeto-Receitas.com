import { Link } from "react-router-dom";
import "./Post.css";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <img
          className="capa"
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa"
        />
        <h2 className="titulo-post">{post.titulo}</h2>
        <button className="botaoLer">Ler</button>
      </div>
    </Link>
  );
}
