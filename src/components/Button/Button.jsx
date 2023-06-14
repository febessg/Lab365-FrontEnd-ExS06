import './Button.css';

function Button({prop}) {
    return (  
        <div className='card-button'>
            <button className='Button'>{prop}</button>
        </div>
    );
}

export default Button;