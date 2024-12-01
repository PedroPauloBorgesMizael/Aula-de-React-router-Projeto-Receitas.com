import './Menu.modules.css';
import MenuLink from '../MenuLink';

export default function Menu() {

    return (
        <header>
            <nav className='navegacao'>
                <MenuLink to="/" index>
                    Início
                </MenuLink>
                <MenuLink to="sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}