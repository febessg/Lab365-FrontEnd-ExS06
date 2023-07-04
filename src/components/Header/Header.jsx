import './Header.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';


function Header() {
    return ( 
        <nav className='menu-principal-wrapper'>
            <div className='logo-wrapper'>
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
                <ul className='menu-wrapper'>
                    <li><Link to={'/services'}>Serviços</Link></li>
                    <li><Link to={'/contact'}>Contato</Link></li>
                    <li><Link to={'/faq'}>FAQ</Link></li>
                </ul>
        </nav>
    );
}

export default Header;