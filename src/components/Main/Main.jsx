import './Main.css';
import ProductCard from '../ProductCard/ProductCard';

function Main() {
    return (  
        <div className='cards-wrapper'>
            <ProductCard price='R$60,00' title='Esmaltação em gel' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore esse eius obcaecati nihil id unde. Eum, alias? Cum nesciunt incidunt eos deleniti laboriosam, perspiciatis quae dicta facere repudiandae nisi!' detail1='Característica' detail2='Característica' detail3='Característica' detail4='Característica'/>
            <ProductCard price='R$170,00' title='Alongamento' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore esse eius obcaecati nihil id unde. Eum, alias? Cum nesciunt incidunt eos deleniti laboriosam, perspiciatis quae dicta facere repudiandae nisi!' detail1='Característica' detail2='Característica' detail3='Característica' detail4='Característica'/>
            <ProductCard price='R$00,00' title='Pé e mão' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore esse eius obcaecati nihil id unde. Eum, alias? Cum nesciunt incidunt eos deleniti laboriosam, perspiciatis quae dicta facere repudiandae nisi!' detail1='Característica' detail2='Característica' detail3='Característica' detail4='Característica'/>
        </div>
    );
}

export default Main;