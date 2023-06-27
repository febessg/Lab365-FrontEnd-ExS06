import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { FaqPage } from './pages/FaqPage/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
