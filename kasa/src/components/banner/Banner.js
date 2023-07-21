import './_banner.scss'
import React from 'react';

const Banner = (props) => {
    return (
        <div className='banner'>
            <img src={props.src} alt={props.alt}/>
            <div>
                
            </div>
            {props.bannerTitle ? <h1>{props.bannerTitle}</h1> : null}
        </div>
    );
};

export default Banner;