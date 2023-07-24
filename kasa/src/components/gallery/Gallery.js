import "./_gallery.scss"
import React, { useState } from 'react';
import rightArrow from "../../images/right-bracket.svg"
import leftArrow from "../../images/left-bracket.svg"



const Gallery = (props) => {

    const length = props.pictures.length
    const [currentIndex, updateIndex] = useState(0)

const nextImage = () => {
    if (currentIndex < length - 1) {
        updateIndex(currentIndex + 1)
    } else {
        updateIndex(0)
}    
}

const prevImage = () => {
    if (currentIndex > 0) {
        updateIndex(currentIndex - 1)
    } else {
        updateIndex(length - 1)
}    
}



    return (
        <section className="lodgingGallery">
            <img className={currentIndex + " galleryImage"} src={props.pictures[currentIndex]} alt={props.alt} />
            <div>
            <img className="leftArrow" src={leftArrow} alt="fleche gauche" onClick={prevImage}/>
            <img className="rightArrow" src={rightArrow} alt="fleche droite" onClick={nextImage} />
            </div>
            <p>{currentIndex + 1}/{length}</p>

        </section>
    );
};

export default Gallery;