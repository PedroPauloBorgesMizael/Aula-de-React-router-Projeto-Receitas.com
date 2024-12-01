import './PostModelo.css'

export default function PostModelo({ fotoCapa, titulo, children }) {
    return (
        <article className='posrModeloContainer'>
            <h2 className='titulo-post-modelo'>
                {titulo}
            </h2>

            <div className='postConteudoContainer'>
                {children}
                <img src={fotoCapa} className='fotoCapa' />
            </div>
        </article>
    )
}