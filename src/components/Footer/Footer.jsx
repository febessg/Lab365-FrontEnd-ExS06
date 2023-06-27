import './Footer.css';
import logo from '../../assets/logo.png';
import instaLogo from '../../assets/instagram.png';
import fbLogo from '../../assets/facebook.png';

function Footer() {
    return (  
        <div className="Footer">
            <div className="footer-wrapper">
                <div className='logo-wrapper'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='container-wrapper'>
                    <h2>Contato</h2>
                    <div className='info-wrapper'>
                        <ul>
                            <li><a href="https://whats.link/studiogabriellabess">+55 48 9615-3765</a></li>
                            <li><a href="#">gabriellabess@hotmail.com</a></li>
                        </ul>
                    </div>
                    <div className='info-wrapper'>
                        <ul>
                            <li>Rua João Pio Duarte Silva, 94 - Córrego Grande</li>
                            <li>Florianópolis - SC</li>
                        </ul>
                    </div>
                    <div className='social-wrapper'>
                        <a href="https://www.instagram.com/studiogabriellabess/" target='blank'><img src={instaLogo} alt="Logo Instagram" /></a>
                        <a href="https://www.facebook.com/studiogabriellabess" target='blank'><img src={fbLogo} alt="Logo Facebook" /></a>
                    </div>
                </div>
                <div className='container-wrapper'>
                    <h2>Informações</h2>
                    <ul>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="/contact">Contato</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className='copywright-wrapper'>
                <p>Minha Empresa © Alguns direitos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;