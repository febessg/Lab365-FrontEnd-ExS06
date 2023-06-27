import './HomePage.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import gel from '../../assets/gel.jpeg';
import alongamento from '../../assets/alongamento.jpeg';
import manutencao from '../../assets/manutencao.jpeg';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export const HomePage = () => {
  const products = [
    {
        id: 1,
        imgPath: gel,
      price: 'R$60,00',
      title: 'Esmaltação em gel',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore esse eius obcaecati nihil id unde. Eum, alias? Cum nesciunt incidunt eos deleniti laboriosam, perspiciatis quae dicta facere repudiandae nisi!',
      details: ['Resistente', 'Prática', 'Brilhosa', 'Maior durabilidade']
    },{
        id: 2,
      imgPath: alongamento,
      price: 'R$170,00',
      title: 'Alongamento',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore esse eius obcaecati nihil id unde. Eum, alias? Cum nesciunt incidunt eos deleniti laboriosam, perspiciatis quae dicta facere repudiandae nisi!',
      details: ['Resistente', 'Hipoalergênica', 'Protege a unha natural', 'Práticas']
    },
    {
        id: 3,
      imgPath: manutencao,
      price: 'R$100,00',
      title: 'Manutenção',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore esse eius obcaecati nihil id unde. Eum, alias? Cum nesciunt incidunt eos deleniti laboriosam, perspiciatis quae dicta facere repudiandae nisi!',
      details: ['Resistente', 'Prática', 'Brilhosa', 'Maior durabilidade']
    }
    
  ];
    return (
      <div className='home-page-container'>
       <Header/>
       <Banner title='Por Gabriella Bess' quote='Renovo sua autoestima através das unhas'/>
       <div className='cards-wrapper'>
            {products.map((product) => (
        <ProductCard
          key={product.id}
          imgPath={product.imgPath}
          price={product.price}
          title={product.title}
          info={product.info}
          details={product.details}
        />
      ))}
        </div>
       <Footer/>
      </div>
    )
  }
