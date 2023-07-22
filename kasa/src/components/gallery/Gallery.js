import "./_gallery.scss"
import React from 'react';

const Gallery = (props) => {
    return (
        <section className="lodgingGallery">
            {props.pictures.map((pictures) => (
                <img key={pictures} src={pictures} alt={props.alt} />
            ))}
        </section>
    );
};

export default Gallery;