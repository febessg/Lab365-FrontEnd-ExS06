import './Banner.css';
import propTypes from 'prop-types';

function Banner({quote}) {
    return ( 
        <div className='Banner'>
            <h3 className='text-muted'>{quote}</h3>
            <h1>Por Gabriella Bess<span className='text-brown'>.</span></h1>
        </div>
    );
}

Banner.propTypes = {
    quote: propTypes.string.isRequired
}

export default Banner;