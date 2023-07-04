import { useContext } from 'react';
import './Banner.css';
import { BannerContext } from '../../contexts/BannerContext/BannerContext';

function Banner() {
    const {banner} = useContext(BannerContext);

    return ( 
        <div className='Banner'>
            <h3 className='text-muted'>{banner.quote}</h3>
            <h1>{banner.title}<span className='text-brown'>.</span></h1>
        </div>
    );
}

export default Banner;