import './Footer.css';
import logo from '../../assets/logo.png';

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
                    </div>
                </div>
                <div className='container-wrapper'>
                    <h2>Informações</h2>
                    <ul>
                        <li><a href="#">Unhas</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Termos e Condições</a></li>
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