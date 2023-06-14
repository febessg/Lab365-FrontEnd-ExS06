import './App.css'
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app-container'>
     <Header/>
     <Banner quote="Renovo sua autoestima através da unha"/>
     <Main/>
     <Footer/>
    </div>
  )
}

export default App
