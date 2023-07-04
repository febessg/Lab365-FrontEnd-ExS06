import './NotFoundPage.css';

import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext/BannerContext";

import notFound from "../../assets/notFound.png";



export const NotFoundPage = () => {
  const {setBanner} = useContext(BannerContext);

  const setNotFoundBanner = () => {
    const newBanner = {
      quote: 'Vixi não encontramos essa página',
      title: 'Opsssss'
    };
    setBanner(newBanner)
  };

  useEffect(() => {setNotFoundBanner()}, [])
  return (
      <div className="notFound-page-Wrapper">
        <Header/>
        <Banner/>
        <div className="notFound-wrapper">
          <div className="notFound-message-wrapper">
            	<h3>Página não encontrada.</h3>
          </div>  
          <div className="notFound-img-wrapper">
              <img src={notFound} alt="Not Found" />
          </div>
        </div>
        <Footer/>
      </div>
  )
}