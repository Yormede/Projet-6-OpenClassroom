import React from 'react';
import {Link} from "react-router-dom";
import "./_card.scss"

const Card = (props) => {

    return (
        <Link to={props.id} className='cardFigure' id={props.id}>
            <div></div>
            <img src={props.cover} alt={props.title} />
            <figcaption className='figCaption'>{props.title}</figcaption>
        </Link>
    );
};

export default Card;