import './Banner.css';
import propTypes from 'prop-types';

function Banner({title, quote}) {
    return ( 
        <div className='Banner'>
            <h3 className='text-muted'>{quote}</h3>
            <h1>{title}<span className='text-brown'>.</span></h1>
        </div>
    );
}

Banner.propTypes = {
    quote: propTypes.string.isRequired,
    title: propTypes.string.isRequired
}

export default Banner;