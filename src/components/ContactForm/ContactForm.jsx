import './ContactForm.css';
import Button from '../Button/Button';

function ContactForm() {
    return (  
        <div className='contact-form-wrapper'>
            <h2>Deixe o seu recado</h2>
            <form>
                <div className="form-row-wrapper row-1">
                    <div className="form-input-wrapper">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id='name' placeholder='Digite seu nome...' />
                    </div>
                    <div className="form-input-wrapper">
                        <label htmlFor="phone">Telefone</label>
                        <input type="text" id="phone" placeholder='Digite seu telefone...' />
                    </div>
                </div>
                <div className="form-input-wrapper">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email"  placeholder='Digite seu email...' />
                </div>
                <div className="form-input-wrapper textarea-wrapper">
                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Digite a sua mensagem...'></textarea>
                    <span>0 a 500 caracteres.</span>
                </div>
                <div className="button-wrapper">
                    <Button prop="Enviar"/>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;