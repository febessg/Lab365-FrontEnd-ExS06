import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
    return ( 
        <nav className='menu-principal-wrapper'>
            <div className='logo-wrapper'>
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
                <ul className='menu-wrapper'>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="/contact">Contato</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
        </nav>
    );
}

export default Header;