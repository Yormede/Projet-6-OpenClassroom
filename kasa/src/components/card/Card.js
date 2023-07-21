import React from 'react';
import {Link} from "react-router-dom";

const Card = (props) => {

    return (
        <Link to={props.id}>
        <figure id={props.id}>
            <div></div>
            <img src={props.cover} alt={props.title} />
            <figcaption>{props.title}</figcaption>
        </figure>
        </Link>
    );
};

export default Card;