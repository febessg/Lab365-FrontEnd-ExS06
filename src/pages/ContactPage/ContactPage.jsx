import './ContactPage.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import ContactForm from '../../components/ContactForm/ContactForm';
import LocalComponent from '../../components/LocalComponent/LocalComponent';
import Footer from '../../components/Footer/Footer';

export const ContactPage = () => {
    return (
        <div className='contact-page-wrapper'>
            <Header/>
            <Banner title='Contato' quote='Entre em contato conosco'/>
            <div className="main-contact-wrapper">
                <ContactForm/>
                <LocalComponent/>
            </div>
            <Footer/>
        </div>
    )
}