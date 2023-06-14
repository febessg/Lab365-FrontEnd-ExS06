import './ProductCard.css';
import Button from '../Button/Button';

function ProductCard(props) {
    return (  
        <div className='product-card'>
            <div className='image-wrapper'>
                <span>{props.price}</span>
            </div>
            <div className='card-data'>
                <h2>{props.title}</h2>
                <p>{props.info}</p>
                <div className='card-details'>
                    <div className="details">
                        <ul>
                            <li>{props.detail1}</li>
                            <li>{props.detail2}</li>
                            <li>{props.detail3}</li>
                            <li>{props.detail4}</li>
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

export default ProductCard;