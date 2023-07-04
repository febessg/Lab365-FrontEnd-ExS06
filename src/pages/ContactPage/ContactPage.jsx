import './ContactPage.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import ContactForm from '../../components/ContactForm/ContactForm';
import LocalComponent from '../../components/LocalComponent/LocalComponent';
import Footer from '../../components/Footer/Footer';
import { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext/BannerContext';

export const ContactPage = () => {
    const {setBanner} = useContext(BannerContext);

    const setContactBanner = () => {
        const newBanner = {
            quote: 'Entre em contato conosco',
            title: 'Contato'
        };
        setBanner(newBanner)
    };

    useEffect(() => {setContactBanner()}, [])
    
    return (
        <div className='contact-page-wrapper'>
            <Header/>
            <Banner/>
            <div className="main-contact-wrapper">
                <ContactForm/>
                <LocalComponent/>
            </div>
            <Footer/>
        </div>
    )
}