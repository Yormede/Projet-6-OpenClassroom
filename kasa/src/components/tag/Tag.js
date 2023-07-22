import './_tag.scss'
import React from 'react';

const Tag = (props) => {
    return (
            <p className='tags'>{props.data}</p>
    );
};

export default Tag;