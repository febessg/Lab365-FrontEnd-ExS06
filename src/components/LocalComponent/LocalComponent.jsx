import './LocalComponent.css';

function LocalComponent() {
    return (  
        <div className='local-component-wrapper'>
        <h1>Venha conhecer nossa loja<span className='text-brown'>.</span></h1>
        <div className="local-wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.7811973204307!2d-48.515826499999996!3d-27.6003124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739036b8d0323%3A0xf6b0d490436e047b!2sR.%20Jo%C3%A3o%20Pio%20Duarte%20Silva%2C%2094%20-%20C%C3%B3rrego%20Grande%2C%20Florian%C3%B3polis%20-%20SC%2C%2088037-000!5e0!3m2!1spt-BR!2sbr!4v1687895745857!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        <div className="content-wrapper">
            <h3>Matriz</h3>
            <div className='local-info-wrapper'>
                <div className='column-wrapper'>
                    <ul>
                        <li>Rua João Pio Duarte Silva, 94 - Córrego Grande</li>
                        <li>Florianópolis - SC</li>
                    </ul>
                </div>
                <div className='column-wrapper'>
                    <ul>
                        <li><a href="#">gabriellabess@hotmail.com</a></li>
                        <li><a href="https://whats.link/studiogabriellabess">+55 48 9615-3765</a></li>
                    </ul>
                </div>
            </div>
            <span>Aberta de 08h00 as 18h00 de segunda a sexta</span>
        </div>
        </div>
        </div>
    );
}

export default LocalComponent;