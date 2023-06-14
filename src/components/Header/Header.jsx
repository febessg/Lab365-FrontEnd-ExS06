import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
    return ( 
        <nav className='menu-principal-wrapper'>
            <div className='logo-wrapper'>
                <img src={logo} alt="Logo" />
            </div>
                <ul className='menu-wrapper'>
                    <li><a href="#">Unhas</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
        </nav>
    );
}

export default Header;