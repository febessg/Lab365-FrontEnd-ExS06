import './ProductCard.css';
import Button from '../Button/Button';
import propTypes from 'prop-types';

function ProductCard(props) {
    return (  
        <div className='product-card'>
            <div className='image-wrapper'>
                <img src={props.imgPath} alt="Imagem unha" />
                <span>{props.price}</span>
            </div>
            <div className='card-data'>
                <h2>{props.title}</h2>
                <p>{props.info}</p>
                <div className='card-details'>
                    <div className="details">
                        <ul>
                        {props.details.map((item, index) => {
                                if (item) {
                                return ( 
                                    <li key={index}>{item}</li>
                                )}
                            })}
                        </ul>
                    </div>
                    <div className='details-button'>
                        <Button prop="Mais sobre"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    imgPath: propTypes.string,
    price: propTypes.string,
    title: propTypes.string,
    info: propTypes.string,
    details: propTypes.array
}

export default ProductCard;