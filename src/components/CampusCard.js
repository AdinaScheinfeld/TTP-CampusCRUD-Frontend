import React from 'react';

const CampusCard = props => {
    return (
        <div>
            <p>{ props.name }</p>
            <img src={ props.image } alt='school' />
            <p>{ props.description }</p>
            <p>{props.address}</p>
        </div>
    )
}

export default CampusCard;